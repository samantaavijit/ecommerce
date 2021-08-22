from flask import Flask, jsonify, request
from flask_login import LoginManager, UserMixin, current_user, login_required, login_user, logout_user
from flask_sqlalchemy import SQLAlchemy
import json
from sqlalchemy import *
from werkzeug.security import generate_password_hash, check_password_hash
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
import os

with open("config.json", 'r') as c:
    params = json.load(c)["params"]

app = Flask(__name__)
CORS(app)
app.secret_key = "os.urandom(24)"

myDbUri = "mysql://" + params['db_user_name'] + ":" + params['db_user_password'] + "@" + params['db_server'] + \
          "/" + params['db_name']

app.config['SQLALCHEMY_DATABASE_URI'] = myDbUri
db = SQLAlchemy(app)
ma = Marshmallow(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"
login_manager.session_protection = "strong"


class User(db.Model, UserMixin):
    user_id = db.Column(db.String(150), primary_key=True, nullable=False)
    password = db.Column(db.Text(), nullable=False)
    name = db.Column(db.String(100), nullable=False)

    def get_id(self):
        return self.user_id


# ID , name , price , description, created_at, updated_at, add_by_user
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    price = db.Column(db.String(100))
    description = db.Column(db.Text())
    created_at = db.Column(db.DateTime, default=datetime.datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.now)
    add_by_user = db.Column(db.String(150))

    def __init__(self, name, price, description, add_by_user):
        self.name = name
        self.price = price
        self.description = description
        self.add_by_user = add_by_user


class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'price', 'description', 'created_at', 'updated_at', 'add_by_user')


product_schema = ProductSchema()
products_schema = ProductSchema(many=True)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.route('/')
def home():
    return "Hello World"


@cross_origin()
@login_required
@app.route("/register", methods=["POST"])
def register_user():
    name = request.json['name']
    user_id = request.json['email']
    password = request.json['password']

    user = User.query.filter_by(user_id=user_id).first()
    if user:
        return jsonify({"status": 500, "message": "Username already exist"})
    else:
        user = User(user_id=user_id, password=generate_password_hash(password, method='sha256'), name=name)
        db.session.add(user)
        db.session.commit()
        return jsonify({"status": 200, "message": "Successfully Registered"})


@cross_origin()
@app.route("/login", methods=["POST"])
def login():
    user_id = request.json['email']
    password = request.json['password']
    user = User.query.filter_by(user_id=user_id).first()
    if user:
        if check_password_hash(user.password, password):
            login_user(user, remember=True)
            return jsonify({"status": 200, "message": "Successfully login", "user_id": user_id, "isActive": True})
        else:
            return jsonify({"status": 500, "message": "Password Not match", "user_id": "", "isActive": False})
    else:
        return jsonify({"status": 500, "message": "Username & Password not found!", "user_id": "", "isActive": False})


@cross_origin()
@login_required
@app.route("/products", methods=['GET'])
def all_products():
    products = Product.query.order_by(asc(Product.created_at)).all()
    result = products_schema.dump(products)
    return jsonify(result)


@cross_origin()
@login_required
@app.route("/product_details/<pid>", methods=['GET'])
def product_details(pid):
    product = Product.query.get(pid)
    return product_schema.jsonify(product)


@cross_origin()
@login_required
@app.route("/update/<pid>", methods=['POST'])
def update_product(pid):
    product = Product.query.get(pid)

    name = request.json['name']
    price = request.json['price']
    description = request.json['desc']
    product.name = name
    product.price = price
    product.description = description
    product.updated_at = datetime.datetime.now
    db.session.commit()
    return product_schema.jsonify(product)


@cross_origin()
@login_required
@app.route("/delete/<pid>", methods=['DELETE'])
def delete(pid):
    product = Product.query.get(pid)
    db.session.delete(product)
    db.session.commit()
    return jsonify({"status": 200, "message": "Product Successfully deleted"})


@cross_origin()
@login_required
@app.route("/search/<key>", methods=['GET'])
def search(key):
    key = str(key).lower()
    search_key = func.lower(Product.name).like('%' + key + '%')
    products = Product.query.filter(search_key)
    result = products_schema.dump(products)
    return jsonify(result)


@cross_origin()
@login_required
@app.route("/add_product", methods=["POST"])
def add_product():
    name = request.json['name']
    price = request.json['price']
    description = request.json['desc']
    email = request.json['email']

    product = Product(name=name, price=price, description=description, add_by_user=email)
    db.session.add(product)
    db.session.commit()
    return jsonify({"status": 200, "message": "Successfully New Product Added"})


if __name__ == '__main__':
    app.run(debug=True)

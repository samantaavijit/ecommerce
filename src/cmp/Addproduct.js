import React, { Component } from "react";

export default class Addproduct extends Component {
  addProduct() {
    let email = JSON.parse(localStorage.getItem("email"));
    let name = this.state.name;
    let price = this.state.price;
    let desc = this.state.desc;

    fetch("http://127.0.0.1:5000/add_product", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        price: price,
        desc: desc,
      }),
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
  }
  render() {
    return (
      <form>
        <div className="container">
          <h3 className="text-center">Add Product Form</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              aria-describedby="emailHelp"
              onChange={(e) => {
                this.setState({ price: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Product Description
            </label>
            <textarea
              name="desc"
              className="form-control"
              id="desc"
              rows="5"
              onChange={(e) => {
                this.setState({ desc: e.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => this.addProduct()}
          >
            Add Product
          </button>
        </div>
      </form>
    );
  }
}

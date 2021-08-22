import React, { useEffect, useState } from "react";

export default function Updateproduct(props) {
  const id = props.match.params.id;
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");


  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("http://127.0.0.1:5000/product_details/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((result) => {
        result.json().then((response) => {
          console.log(response);
          setProduct(response);
        });
      });
    };
    fetchProducts();
  }, []);

  function updateProduct() {
    console.log(product.add_by_user);
  }

  return (
    <div className="container">
      <h3 className="text-center">Update Product</h3>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Product ID
        </label>
        <input
          type="text"
          className="form-control"
          id="id"
          value={id}
          aria-describedby="nameHelp"
          readOnly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={product.name}
          onChange={(e) => setProductName(e.target.value)}
          aria-describedby="nameHelp"
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
          value={product.price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          aria-describedby="emailHelp"
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
          value={product.description}
          rows="5"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
}

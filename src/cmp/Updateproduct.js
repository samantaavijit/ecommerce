import React, { useEffect, useState } from "react";

export default function Updateproduct(props) {
  const id = props.match.params.id;
  const [pN, setPn] = useState("");
  const [pE, setPe] = useState("");
  const [pP, setPp] = useState("");
  const [pDesc, setpDesc] = useState("");
  const [pL, setPl] = useState("");
  const [pC, setPc] = useState("");

  const [email, setEmail] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  const [created, setCreated] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/product_details/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPn(result.name);
        setPe(result.add_by_user);
        setPp(result.price);
        setpDesc(result.description);
        setPl(result.updated_at)
        setPc(result.created_at)
      });
  });

  function updateProduct() {
    console.log(productName);
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
          value={pN}
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
          value={pP}
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
          value={desc}
          rows="5"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={updateProduct}>
        Add Product
      </button>
    </div>
  );
}

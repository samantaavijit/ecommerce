import React from "react";
import { Link } from "react-router-dom";

export default function Products({ products, isLoading,deleteProduct }) {
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  const style = {
    marginTop: "2px",
    marginRight: "2px",
    marginBottom: "2px",
    marginLeft: "10px",
  };
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} style={style}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><b>Price : </b>Rs.{product.price}</p>
            <p>
              last update : <b>{product.updated_at}</b>
            </p>
            <div className="row">
              <div className="col-md-1">
                <Link className="btn btn-primary" to={"/update/" + product.id}>
                  Update
                </Link>
              </div>
              <div className="col">
                <button className="btn btn-danger" onClick={() => deleteProduct(product.id)} >Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import ProductsList from "./Products";
import Pagination from "./Pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loding, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);

  const style = {
    width: "350px",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await fetch("http://127.0.0.1:5000/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((result) => {
        result.json().then((response) => {
          setProducts(response);
        });
      });
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // get current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const search_key = async (e) => {
    const key = e.target.value;
    if (key === "") {
      fetchProducts();
      return;
    }
    console.log(key);
    await fetch("http://127.0.0.1:5000/search/" + key, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
        setProducts([]);
        setCurrentPage(1);
        setProducts(response);
      });
    });
  };

  const fetchProducts = async () => {
    setLoading(true);
    await fetch("http://127.0.0.1:5000/products", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((response) => {
        setProducts([]);
        setCurrentPage(1);
        setProducts(response);
      });
    });
    setLoading(false);
  };

  const delete_product = async (id) => {
    await fetch("http://127.0.0.1:5000/delete/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        if (response.status === 200) {
          fetchProducts();
        }
      });
    });
  };

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="d-flex px-5 pt-3 pb-2">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={style}
          onChange={search_key}
        />
        <button className="btn btn-outline-success me-3" type="submit">
          Search
        </button>
      </div>

      <ProductsList
        products={currentProducts}
        isLoading={loding}
        deleteProduct={delete_product}
      />
      <Pagination
        productsPerPage={productsPerPage}
        totalProduct={products.length}
        paginate={paginate}
      />
    </div>
  );
}

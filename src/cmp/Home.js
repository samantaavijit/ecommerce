import React, { useEffect, useState } from "react";
import ProductsList from "./Products";
import Pagination from "./Pagination";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loding, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);

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
    
    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber );

  return (
    <div>
      <ProductsList products={currentProducts} isLoading={loding} />
      <Pagination
        productsPerPage={productsPerPage}
              totalProduct={products.length}
              paginate={paginate}
      />
    </div>
  );
}

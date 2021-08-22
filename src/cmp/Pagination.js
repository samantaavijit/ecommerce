import React from "react";

export default function Pagination({
  productsPerPage,
  totalProduct,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProduct / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const style = {
    margin: "10px",
  };
  return (
    <nav aria-label="Page navigation example" style={style}>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

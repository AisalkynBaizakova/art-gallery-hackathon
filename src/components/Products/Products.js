import React, { useState, useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";

const Products = () => {
  const { getPaintings, paintings } = useContext(productsContext);

  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(paintings.length / 6);

  useEffect(() => {
    getPaintings();
  }, []);

  function changePage({ selected }) {
    setPage(selected);
  }

  const productsPerPage = 6;

  const pageVisited = page * productsPerPage;

  const displayProducts = paintings
    .slice(pageVisited, pageVisited + productsPerPage)
    .map((item) => <ProductCard key={item.id} item={item} />);

  return (
    <div className="card-wrapper">
      {displayProducts}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Products;

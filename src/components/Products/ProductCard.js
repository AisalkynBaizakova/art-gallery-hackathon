import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../context/ProductContext";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  const { addProductToCart } = useContext(productsContext);
  return (
    <>
      <div class="product-card">
        <Link to={`product/${item.id}`}>
          <div class="product-img">
            <img src={item.image} height="420" width="327" />
          </div>
        </Link>
        <div class="product-info">
          <div class="product-text">
            <h1>{item.artistsName}</h1>
            <p>{item.name}</p>
          </div>
          <div class="product-price-btn">
            <p>
              <span>{item.price}</span>$
            </p>
            <div>
              <Link to="/cart">
                <button onClick={() => addProductToCart(item)} type="button">
                  buy now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { productsContext } from "../../context/ProductContext";
import "./ProductCard.css";

const ProductDetails = ({ item }) => {
  const {
    getPaintingDetails,
    paintingDetails,
    getData,
    deletePainting,
    addProductToCart,
  } = useContext(productsContext);

  let params = useParams().id;

  useEffect(() => {
    getPaintingDetails(params);
  }, []);

  function handleSave() {
    getData(paintingDetails, params);
  }
  function handleDelete() {
    deletePainting(params);
  }

  const {
    user: { email },
    admin,
  } = useAuth();
  console.log({ email });
  console.log(admin);

  return (
    <div>
      {paintingDetails.name ? (
        <div className="details-wrapper">
          <div className="container">
            <div className="content-painting-details">
              <div className="content-left">
                <img src={paintingDetails.image} />
              </div>
              <div className="content-right">
                <div>
                  <h1>{paintingDetails.artistsName}</h1>
                </div>
                <h2>{paintingDetails.name}</h2>
                <div>
                  <p>{paintingDetails.description}</p>
                </div>
                <div>
                  <span>{paintingDetails.price}$</span>
                </div>
                <Link to="/cart">
                  <button
                    className="buy-btn"
                    onClick={() => addProductToCart(paintingDetails)}
                  >
                    Buy
                  </button>{" "}
                </Link>
                <br />
                {admin ? (
                  <>
                    <Link to="/">
                      <button onClick={handleDelete}>Delete</button>
                    </Link>
                    <Link to="/edit">
                      <button onClick={handleSave}>Edit</button>
                    </Link>{" "}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default ProductDetails;

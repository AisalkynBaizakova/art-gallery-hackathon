import React, { useContext, useEffect, useRef } from "react";
import { productsContext } from "../../context/ProductContext";
import "./Cart.css";
import { Link } from "react-router-dom";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Cart = () => {
  const { getCart, cart, changeProductCount, deleteProductFromCart } =
    useContext(productsContext);
  console.log(cart);
  useEffect(() => {
    getCart();
  }, []);

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  function deleteFromeCart(id) {
    deleteProductFromCart(id);
  }

  return (
    <center>
      <div className="cart">
        {cart.products ? (
          <div>
            <div className="cart">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>SubPrice</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((elem) => (
                    <tr key={elem.item.id}>
                      <td>
                        <img src={elem.item.image} alt="product img" />
                      </td>
                      <td>{elem.item.name}</td>
                      <td>{elem.item.price}</td>
                      <td>
                        <input
                          className="count-inp"
                          min="0"
                          value={elem.count}
                          type="number"
                          onChange={(e) =>
                            changeProductCount(e.target.value, elem.item.id)
                          }
                        />
                      </td>
                      <td>{elem.subPrice}</td>
                      <td>
                        <button
                          className="delete-from-cart"
                          onClick={() => deleteFromeCart(elem.item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h2>Total: {cart.totalPrice} </h2>
              <div className="buy-btn">
                <Link to="/cart/cashout">
                  <button>Buy</button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <h1>your cart is empty</h1>
        )}
      </div>
    </center>
  );
};

export default Cart;

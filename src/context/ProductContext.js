import React, { createContext, useReducer, useState } from "react";
import axios from "axios";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/cartFunctions";
export const productsContext = createContext();

const INIT_STATE = {
  paintings: [],
  paintingDetails: {},
  cartLength: getCountProductsInCart(),
  cart: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PAINTINGS":
      return { ...state, paintings: action.payload };
    case "GET_PAINTING_DETAILS":
      return { ...state, paintingDetails: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [data, setData] = useState({});
  const [dataId, setDataId] = useState();
  const [cartItems, setCartItems] = useState([]);

  const getPaintings = async (params = "") => {
    //history
    const { data } = await axios(`http://localhost:8000/paintings/?${params}`);
    dispatch({
      type: "GET_PAINTINGS",
      payload: data,
    });
  };

  async function addPaintings(product) {
    await axios.post(`http://localhost:8000/paintings`, product);
    getPaintings();
  }
  async function getPaintingDetails(id) {
    let { data } = await axios(`http://localhost:8000/paintings/${id}`);
    dispatch({ type: "GET_PAINTING_DETAILS", payload: data });
  }

  function getData(data, id) {
    setData(data);
    setDataId(id);
  }
  async function deletePainting(id) {
    await axios.delete(`http://localhost:8000/paintings/${id}`);
    getPaintings();
  }

  async function editPaintingDetails(obj) {
    await axios.patch(`http://localhost:8000/paintings/${dataId}`, obj);
    getPaintings();
  }

  const addProductToCart = (product) => {
    console.log(product);
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: 0,
    };
    let filteredCart = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }
    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  };

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function deleteProductFromCart(id) {
    let toDelete = JSON.parse(localStorage.getItem("cart"));
    let newCart = {
      ...toDelete,
      products: toDelete.products.filter((item) => item.item.id !== id),
    };
    console.log(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    getCart();
  }
  return (
    <productsContext.Provider
      value={{
        paintings: state.paintings,
        paintingDetails: state.paintingDetails,
        data,
        cart: state.cart,
        getPaintings,
        addPaintings,
        getPaintingDetails,
        getData,
        editPaintingDetails,
        deletePainting,
        addProductToCart,
        changeProductCount,
        getCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;

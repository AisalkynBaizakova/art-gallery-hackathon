import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AddProduct from "./components/AdminPanel/AddProduct/AddProduct";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import { useAuth } from "./context/AuthContext";
import EditProducts from "./components/AdminPanel/EditProducts/EditProducts";
import Cart from "./components/Cart/Cart";
import CashOut from "./components/Cart/CashOut/CashOut";

const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/edit" element={<EditProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/cashout" element={<CashOut />} />

      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;

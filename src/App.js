import React from "react";
import MainRoutes from "./MainRoutes";
import ProductsContextProvider from "./context/ProductContext";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <div>
          <MainRoutes />
        </div>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
};

export default App;

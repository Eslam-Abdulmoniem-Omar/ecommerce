import React, { useContext } from "react";

import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import AllProducts from "./components/pages/AllProducts";
import CategoryItems from "./components/pages/CategoryItems";
import Cart from "./components/pages/Cart";
import Footer from "./components/Footer";

import ShoppingCartProvider from "./context/ShoppingCartContext";
import errorImg from "./images/error.jpg";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/product/:id" Component={ProductDetails} />
        <Route path="/AllProducts" Component={AllProducts} />
        <Route path="/categories/:name" Component={CategoryItems} />
        <Route path="/cart" Component={Cart} />
        <Route
          path="*"
          element={<img className=" md:max-w-[500px] m-auto" src={errorImg} />}
        />
      </Routes>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default App;

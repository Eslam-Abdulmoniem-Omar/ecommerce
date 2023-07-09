import React, { useState, useEffect } from "react";

import ProductsCard from "../ProductsCard";
import Categories from "./Categories";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Categories />
      <ProductsCard products={products} title={'All Products'} />
    </>
  );
};

export default AllProducts;

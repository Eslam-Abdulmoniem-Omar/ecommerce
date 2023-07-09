import React, { useEffect, useState } from "react";

import HeroSection from "../HeroSection";
import ProductsCard from "../ProductsCard";
import StatCard from "../StatCard";
import Categories from "./Categories";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <HeroSection />
      <Categories />
      <ProductsCard products={products} title={"Most Popular Products"} />
      <StatCard />
    </>
  );
};

export default Home;

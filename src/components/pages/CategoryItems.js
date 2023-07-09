import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ProductsCard from "../ProductsCard";

const CategoryItems = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (products.length === 0) {
    <button className="btn loading m-auto bg-indigo-500 text-white border-none">
      loading
    </button>;
  }
  return <ProductsCard products={products} title={name} />;
};

export default CategoryItems;

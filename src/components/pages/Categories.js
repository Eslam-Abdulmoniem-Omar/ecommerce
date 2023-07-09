import React, { useState, useEffect } from "react";

import FeatureCard from "../FeatureCard";
import { useParams } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <FeatureCard categories={categories} />
    </>
  );
};

export default Categories;

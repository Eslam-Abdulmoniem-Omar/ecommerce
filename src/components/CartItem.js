import React, { useState, useEffect } from "react";

import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
  const [product, setProduct] = useState([]);
  const { removeItemFromCart } = useShoppingCart();
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const item = product.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div className="flex items-center justify-center hover:bg-gray-100 -mx-8 lg:px-6 py-5 border-b border-gray-300">
      <div className="flex flex-col md:flex-row sm:max-w-xs">
        <div className="w-3/5">
          <img
            className=" m-auto mb-1 h-20 md:h-32 md:mr-20"
            src={item.image}
            alt="Not-Found"
          />
        </div>
        <div className="flex flex-col justify-between lg:ml-4 flex-grow">
          <span className="text-black font-semibold text-sm max-w-xs">
            {item.title}
          </span>
          <span className="text-gray-500 text-xs">{item.category}</span>
          <button
            className=" mr-auto font-semibold hover:text-red-500 text-gray-500 text-x  text-red-600"
            onClick={() => removeItemFromCart(id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-2/5 mt-1">
        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={() => decreaseCartQuantity(id)}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <div className="text-black mx-2 border text-center w-8">{quantity}</div>

        <svg
          className="fill-current text-gray-600 w-3 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={() => increaseCartQuantity(id)}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-black text-center w-1/5 font-semibold text-sm">
        ${quantity * item.price}
      </span>
    </div>
  );
};

export default CartItem;

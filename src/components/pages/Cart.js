import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";

import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useEffect, useState } from "react";

const Cart = () => {
  const [product, setProduct] = useState([]);

  const { cartItems, cartQuantity } = useShoppingCart();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container max-w-[90%]  mx-auto mt-10">
      <div className="flex flex-col shadow-md my-10">
        <div className="lg:w-3/4 md:m-auto bg-white px-10 py-10">
          <div className="flex justify-between border-b border-gray-300 pb-8">
            <h1 className="text-black font-bold text-2xl">Shopping Cart</h1>
            <h2 className="text-black font-bold text-2xl">
              {cartQuantity} Items
            </h2>
          </div>
          <ShoppingCart />
          <Link
            to="/AllProducts"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div
          id="summary"
          className=" w-[90%] md:w-[600px] max-w-2xl m-auto bg-gray-100 mb-6 px-8 rounded-md"
        >
          <div className=" mt-8">
            <h3 className="text-black font-semibold">Order Summary</h3>
            <div className="text-black flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>

              <span>
                $
                {cartItems.reduce((total, cartItem) => {
                  const item = product.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 mb-5 text-sm text-white uppercase w-full rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

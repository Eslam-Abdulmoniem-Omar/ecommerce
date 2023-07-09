import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useShoppingCart } from "../context/ShoppingCartContext";

const navigation = [
  {
    id: 0,
    name: "Home",
    path: "/",
  },
  {
    id: 1,
    name: "Products",
    path: "/AllProducts",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },

  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <header className="text-gray-600 body-font shadow-lg relative">
      <div className="container max-w-[90%] mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mt-4 md:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="mx-2 text-xl cursor-pointer">Ecommerce</span>
        </Link>
        <nav className="mt-4 md:mt-0 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigation.map((nav) => (
            <Link
              key={nav.id}
              className="mr-2 md:mr-5 hover:text-gray-900 cursor-pointer"
              to={nav.path}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <Link
          to="cart"
          className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 tabletHeader:mt-0 cursor-pointer relative"
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <div className=" w-4 h-4 absolute -bottom-2 -right-1 flex items-center justify-center bg-red-800 rounded-full ">
            {cartQuantity}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

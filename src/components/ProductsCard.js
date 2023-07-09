import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ products , title }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container max-w-[90%] px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">
            Products
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 uppercase">
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {products.length > 0 ? (
            products.map((product) => {
              const { id, title, price, category, image } = product;
              return (
                <div
                  key={id}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm"
                >
                  <Link
                    to={`/product/${id}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt={title}
                      className="object-contain object-center w-full h-full block"
                      src={image}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                      {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium uppercase">
                      {title}
                    </h2>
                    <p className="mt-1 text-md font-semibold">${price}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <button className="btn loading m-auto bg-indigo-500 text-white border-none">
              loading
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsCard;

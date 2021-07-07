import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ItemContext } from "../contexts/ItemContext";

const Products = () => {
  const { items } = useContext(ItemContext);
  const { addToCart, removeCart, updateCart } = useContext(CartContext);

  return (
    <div className="grid p-6 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 bg-blue-50 font-poppins">
      {items.map((item) => {
        return (
          <div key={item.id} className="bg-700 m-2 rounded-lg  bg-white">
            <img
              src={item.img}
              className="h-48 rounded-t-lg w-full"
              alt="some"
            />
            <div className="px-2">
              <div className="flex justify-between items-center ">
                <p className="text-xl py-3 capitalize">{item.name}</p>
                <i
                  className="fas fa-plus text-xl px-1 text-white bg-gray-400 rounded"
                  onClick={() => {
                    addToCart(item);
                    // updateCart(item.id, item.price);
                  }}
                ></i>
                <i
                  className="fas fa-minus text-xl px-1 text-white bg-gray-400 rounded"
                  onClick={() => {
                    removeCart(item.id);
                    // updateCart(item.id, item.price);
                  }}
                ></i>
              </div>

              <p className="text-md">{item.description}</p>
              <p className="text-lg text-gray-800">price : ${item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

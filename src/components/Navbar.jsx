import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
    const { cart } = useContext(CartContext);




    return (
        <nav className="bg-pink-700 py-5 flex justify-between">
            <h3 className="font-poppins text-xl text-white px-4 italic ">
                Pandu's Shop
            </h3>
            <div className="flex flex-col">
                <button className="bg-blue-500 rounded p-4">
                    <i className="fas fa-shopping-cart text-xl text-white px-4">
                        {cart.reduce((n, { quantity }) => n + quantity, 0)}
                        {cart.reduce((n, { price }) => n + price, 0)}
                    </i>
                </button>
                <div className="bg-gray-300 flex flex-col">
                    {/* {
                        cart.reduce(
                            (unique, item) => {
                                if (unique.includes(item)) {
                                    return (
                                        <div className="flex flex-row" key={item.id}>
                                            <span>{item.name}</span>
                                            <span>{item.price}</span>
                                            <span>{item.quantity}</span>
                                        </div>)
                                } else {
                                    console.log("heh");

                                }

                            }, [])} */}





                </div>
            </div>
        </nav>
    );
};

export default Navbar;

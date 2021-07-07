import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  let [cart, setCart] = useState([]);

  let localCart = localStorage.getItem("Cart");
  useEffect(() => {
    localCart = JSON.parse(localCart);
    localCart ? setCart(cart) : console.log("he");
  }, []);

  const addToCart = (item) => {
    let cartCopy = [...cart];

    let { id } = item;

    let existingItem = cartCopy.find((item) => item.id === id);

    if (existingItem) {
      existingItem.price += existingItem.price / existingItem.quantity;
      existingItem.quantity += 1;
    } else {
      cartCopy.push(item);
    }
    setCart(cartCopy);

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("Cart", stringCart);
    console.log(cart);
  };

  const updateCart = (id, price) => {
    let cartCopy = [...cart];
    let existingItem = cartCopy.find((item) => item.id === id);
    if (!existingItem) return;

    existingItem.price += price;
    if (!existingItem.quantity <= 0) {
      cartCopy = cartCopy.filter((item) => item.id !== id);
    }
    console.log(cart);

    setCart(cartCopy);

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  const removeCart = (id) => {
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter((item) => item.id !== id);

    setCart(cartCopy);
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("cart", cartString);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeCart, updateCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;

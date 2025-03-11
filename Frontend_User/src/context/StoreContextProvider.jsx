import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, count: 1 }];
    });
  };

  const updateCartItem = (id, newCount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item._id === id ? { ...item, count: newCount } : item))
        .filter((item) => item.count > 0)
    );
  };
  return (
    <StoreContext.Provider
      value={{ food_list, cart, addToCart, updateCartItem }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

import { createContext, useState } from "react";
import { food_list } from "../assets/assets"; // Assuming food_list is coming from your assets

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if the item with the selected options already exists in the cart
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem._id === item._id &&
          JSON.stringify(cartItem.options) === JSON.stringify(item.options) // Compare options too
      );

      if (existingItem) {
        // If the item already exists, increment the quantity
        return prevCart.map((cartItem) =>
          cartItem._id === item._id &&
          JSON.stringify(cartItem.options) === JSON.stringify(item.options)
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      }

      // Otherwise, add the item as a new line in the cart with count = 1
      return [...prevCart, { ...item, count: 1 }];
    });
  };

  // Function to update the count of a specific cart item
  const updateCartItem = (id, newCount) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item._id === id ? { ...item, count: newCount } : item
          )
          .filter((item) => item.count > 0) // Remove items with zero count
    );
  };

  // Function to reset the cart
  const resetCart = () => {
    setCart([]); // Reset the cart to an empty array
  };

  return (
    <StoreContext.Provider
      value={{ food_list, cart, addToCart, updateCartItem, resetCart }} // Add resetCart to the context value
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

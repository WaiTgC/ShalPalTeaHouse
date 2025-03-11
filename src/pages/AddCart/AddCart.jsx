import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
import "./AddCart.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Contact from "../../components/Contact/Contact";
import { Link } from "react-router-dom";

const AddCart = () => {
  const { cart, updateCartItem } = useContext(StoreContext);
  useEffect(() => {
    console.log("Updated Cart:", cart);
  }, [cart]);

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0; // Convert to number safely
    const count = item.count > 0 ? item.count : 1; // Ensure count is valid
    console.log(`Item: ${item.name}, Price: ${price}, Count: ${count}`); // Debugging log
    return total + price * count;
  }, 0);

  return (
    <div className="AddCart-Page">
      <Header />
      <Logobar />

      <div className="cart-container">
        <h2>YOUR ORDERS</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={item._id} className="cart-item">
              <div className="cart-item-details">
                <p className="cart-item-name">
                  {index + 1}. {item.name}
                </p>
                <p className="cart-item-price">{item.price}</p>
              </div>
              <div className="cart-controls">
                <button
                  className="button_3"
                  onClick={() => updateCartItem(item._id, item.count - 1)}
                >
                  -
                </button>
                <span className="item-count">{item.count}</span>
                <button
                  className="button_4"
                  onClick={() => updateCartItem(item._id, item.count + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
        <div className="cart-footer">
          <div className="total-price">
            <h3>Total </h3>
            <span>{totalPrice.toFixed(2)} THB</span>
          </div>
          <Link to={"/Checkout"}>
            <button className="order-button" disabled={cart.length === 0}>
              Order Now
            </button>
          </Link>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default AddCart;

import React, { useEffect, useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
import "./AddCart.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Contact from "../../components/Contact/Contact";
import { Link } from "react-router-dom";

const AddCart = () => {
  const { cart, updateCartItem, resetCart } = useContext(StoreContext); // Add resetCart to the context

  const [orderNotes, setOrderNotes] = useState("");

  useEffect(() => {
    console.log("Updated Cart:", cart);
    console.log("Order Notes:", orderNotes);
  }, [cart, orderNotes]);

  const handleOrderNotesChange = (e) => {
    setOrderNotes(e.target.value);
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const count = item.count > 0 ? item.count : 1;
    return total + price * count;
  }, 0);

  // Handle the "Order Now" button click
  const handleOrderNow = () => {
    resetCart(); // Reset the cart when "Order Now" is clicked
  };

  return (
    <div className="AddCart-Page">
      <Header />
      <Logobar />

      <div className="cart-container">
        <h2>Your Orders</h2>
        <p className="items-quantity">
          <span>Items</span>
          <span>Quantity</span>
        </p>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={`${item._id}-${index}`} className="cart-item">
              <div className="cart-item-details">
                <p className="cart-item-name">
                  <span className="item-name">
                    {index + 1}. {item.name}
                  </span>
                  {item.options.length > 0 && (
                    <span className="cart-item-options">
                      ({[...new Set(item.options)].join(", ")})
                    </span>
                  )}
                </p>
                <p className="cart-item-price">{item.price}</p>
              </div>
              <div className="adttional-input"></div>
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

        <div className="order-notes">
          <input
            type="text"
            placeholder="Leave your addtional notes for your orders here ....."
            value={orderNotes}
            onChange={handleOrderNotesChange}
            className="order-notes-input"
          />
        </div>

        <div className="cart-footer">
          <div className="total-price">
            <h3>Total</h3>
            <span>{totalPrice.toFixed(2)} THB</span>
          </div>
          <Link to="/Checkout">
            <button
              className="order-button"
              disabled={cart.length === 0}
              onClick={handleOrderNow} // Call handleOrderNow to reset the cart
            >
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

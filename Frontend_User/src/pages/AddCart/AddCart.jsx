import React, { useEffect, useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
import "./AddCart.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Contact from "../../components/Contact/Contact";
import { Link } from "react-router-dom";

const AddCart = () => {
  const { cart, updateCartItem } = useContext(StoreContext);

  // State to store additional notes for the entire order
  const [orderNotes, setOrderNotes] = useState("");

  useEffect(() => {
    console.log("Updated Cart:", cart); // Debugging cart updates
    console.log("Order Notes:", orderNotes); // Debugging notes
  }, [cart, orderNotes]);

  // Handle changes to the order notes input
  const handleOrderNotesChange = (e) => {
    setOrderNotes(e.target.value);
  };

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0; // Convert to number safely
    const count = item.count > 0 ? item.count : 1; // Ensure valid count
    return total + price * count;
  }, 0);

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
              <div className="adttional-input">
                {/* Removed the per-item input box */}
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

        {/* Add the input box for the entire order above cart-footer */}
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

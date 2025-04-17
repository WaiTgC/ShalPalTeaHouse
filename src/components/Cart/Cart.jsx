import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Cart.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContextProvider";

const Cart = () => {
  const location = useLocation();
  const { cart, addToCart } = useContext(StoreContext);
  const [isDragOver, setIsDragOver] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  };

  // Handle drag leave
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  // Handle drop
  const handleDrop = (e) => {
    e.preventDefault();
    const itemData = JSON.parse(e.dataTransfer.getData("application/json"));
    addToCart(itemData);
    setIsDragOver(false);
  };

  return (
    <div className="cart">
      <Link to="/AddCart">
        <div
          className={`cart-container ${isDragOver ? "drag-over" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <img src={assets.cart} alt="cart" />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Cart;

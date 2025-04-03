import React from "react";
import { useLocation } from "react-router-dom";
import "./Cart.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContextProvider";
import { useContext } from "react";

const Cart = () => {
  const location = useLocation();
  const { cart } = useContext(StoreContext);

  // Calculate total number of items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <div className="cart">
      <Link to="/AddCart">
        <div className="cart-container">
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

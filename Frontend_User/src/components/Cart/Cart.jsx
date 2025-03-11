import React from "react";
import { useLocation } from "react-router-dom";
import "./Cart.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const location = useLocation();

  return (
    <div className="cart">
      <Link to="/AddCart">
        <img src={assets.cart} alt="cart" />
      </Link>
    </div>
  );
};

export default Cart;

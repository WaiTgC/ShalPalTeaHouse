import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <Link to="/Today">
          <button className="today">TODAY'S SPECIALS</button>
        </Link>
        <Link to="/Combo">
          <button className="combo">COMBO SETS</button>
        </Link>
      </div>
    </section>
  );
};

export default Footer;

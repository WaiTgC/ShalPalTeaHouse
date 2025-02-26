import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <a href="today.html">
          <button className="today">TODAY'S SPECIALS</button>
        </a>
        <a href="#">
          <button className="combo">COMBO SETS</button>
        </a>
      </div>
      <div className="social-contact">
        <p>Follow Us On</p>
        <a className="ig" href="#">
          <i className="bi bi-instagram"></i>
        </a>
        <a className="fb" href="#">
          <i className="bi bi-facebook"></i>
        </a>
      </div>
    </section>
  );
};

export default Footer;

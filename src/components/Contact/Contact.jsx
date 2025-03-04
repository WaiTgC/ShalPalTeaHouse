import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="social-contact">
        <p>Follow Us On</p>
        <Link className="ig" href="#">
          <i className="bi bi-instagram"></i>
        </Link>
        <a className="fb" href="#">
          <i className="bi bi-facebook"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;

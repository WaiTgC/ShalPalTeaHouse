import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Contact from "../../components/Contact/Contact";
import "./CheckOut.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const CheckOut = () => {
  // State for feedback input
  const [feedback, setFeedback] = useState("");

  // Handle feedback input changes
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Handle feedback submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback(""); // Clear the input after submission
  };

  // useEffect to monitor feedback changes
  useEffect(() => {
    console.log("Feedback:", feedback);
  }, [feedback]);

  return (
    <div className="CheckOut-Page">
      <Header />
      <Logobar />
      <div className="checkout-container">
        <img src={assets.paper_1} alt="checkout" />
        <button className="button_1">Order Completed</button>
        <Link className="linktomain" to={"/PoppicksPage"}>
          <button className="button_2">Order More </button>
        </Link>
        <p>Order No: 00001</p>

        {/* Feedback Input styled like order-notes */}
        <div className="feedback-notes">
          <form onSubmit={handleFeedbackSubmit}>
            <input
              type="text"
              placeholder="Leave your feedback here:)"
              value={feedback}
              onChange={handleFeedbackChange}
              className="feedback-notes-input"
            />
            <button type="submit" className="feedback-submit">
              Drop
            </button>
          </form>
        </div>
      </div>
      <p className="Thanks-note">We'd love your feedback! Thank you </p>
      <Contact />
    </div>
  );
};

export default CheckOut;

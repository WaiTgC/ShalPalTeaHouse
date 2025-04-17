import React, { useState } from "react";
import "./Today.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Contact from "../../components/Contact/Contact";
import Cart from "../../components/Cart/Cart";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Today = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="today-Page">
      <Header />
      <Logobar />

      <div className="today-Page-title">
        <h1>TODAY'S SPECIALS</h1>
      </div>
      <FoodDisplay category="Today's Specials" customClass="today-style" />
      <Cart />

      <Contact />
    </div>
  );
};

export default Today;

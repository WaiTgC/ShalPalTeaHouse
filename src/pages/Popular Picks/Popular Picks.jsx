import React, { useState } from "react";
import "./Popular Picks.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Cart from "../../components/Cart/Cart";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const PoppicksPage = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="pp-Page">
      <Header />
      <Logobar />
      <Navbar />
      <FoodDisplay category="Popular Picks" customClass="ppstyle" />
      <FoodDisplay category="Popular Picks" customClass="ppstyle" />
      <Cart />
      <Footer />
      <Contact />
    </div>
  );
};

export default PoppicksPage;

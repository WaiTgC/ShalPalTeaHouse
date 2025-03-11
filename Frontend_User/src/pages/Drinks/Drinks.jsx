import React from "react";
import "./Drinks.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Cart from "../../components/Cart/Cart";

const Drinks = () => {
  return (
    <div className="dr-Page">
      <Header />
      <Logobar />
      <Navbar />
      <>
        <h1>Drinks</h1>
      </>
      <Cart />
      <Footer />
      <Contact />
    </div>
  );
};

export default Drinks;

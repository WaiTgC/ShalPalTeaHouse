import React from "react";
import "./Snacks.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Cart from "../../components/Cart/Cart";

const Snacks = () => {
  return (
    <div className="sn-Page">
      <div>
        <Header />
        <Logobar />
        <Navbar />
        <>
          <h1>Snacks</h1>
        </>
        <Cart />
        <Footer />
        <Contact />
      </div>
    </div>
  );
};

export default Snacks;

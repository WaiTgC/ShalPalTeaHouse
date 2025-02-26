import React from "react";
import "./Drinks.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Drinks = () => {
  return (
    <div className="dr-Page">
      <Header />
      <Logobar />
      <Navbar />
      <>
        <h1>Drinks</h1>
      </>
      <Footer />
    </div>
  );
};

export default Drinks;

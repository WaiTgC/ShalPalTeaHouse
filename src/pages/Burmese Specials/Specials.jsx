import React from "react";
import "./Specials.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Specials = () => {
  return (
    <div className="sp-Page">
      <div>
        <Header />
        <Logobar />
        <Navbar />
        <>
          <h1>Specials</h1>
        </>
        <Footer />
      </div>
    </div>
  );
};

export default Specials;

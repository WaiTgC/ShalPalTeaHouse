import React from "react";
import "./Salads.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Salads = () => {
  return (
    <div className="sal-Page">
      <div>
        <Header />
        <Logobar />
        <Navbar />
        <>
          <h1>Salads</h1>
        </>
        <Footer />
      </div>
    </div>
  );
};

export default Salads;

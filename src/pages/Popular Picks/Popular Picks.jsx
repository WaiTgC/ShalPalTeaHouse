import React from "react";
import "./Popular Picks.css";
import Header from "../../components/header/Header";
import Logobar from "../../components/Logobar/Logobar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PoppicksPage = () => {
  return (
    <div className="pp-Page">
      <div>
        <Header />
        <Logobar />
        <Navbar />
        <>
          <h1>Popular Picks</h1>
        </>
        <Footer />
      </div>
    </div>
  );
};

export default PoppicksPage;

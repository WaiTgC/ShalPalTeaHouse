import React from "react";

import { assets } from "../../assets/assets";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg" style={{ backgroundImage: `url(${assets.cover})` }}>
      <div className="logo">
        <img src={assets.logo} alt="Logo" />
      </div>
      <div className="menu">
        <Link to="/PoppicksPage">
          MENU
          <img src={assets.Arrow} alt="to menu" />
        </Link>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(Home);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <ul className="nav nav-pills mb-3">
          <li className="nav-item">
            <Link
              to="/PoppicksPage"
              className={`nav-link ${
                activeTab === "/PoppicksPage" ? "active" : ""
              }`}
              onClick={() => setActiveTab("/PoppicksPage")}
            >
              Popular Picks
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Specials"
              className={`nav-link ${
                activeTab === "/Specials" ? "active" : ""
              }`}
              onClick={() => setActiveTab("/Specials")}
            >
              Burmese Specials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Salads"
              className={`nav-link ${activeTab === "/Salads" ? "active" : ""}`}
              onClick={() => setActiveTab("/Salads")}
            >
              Burmese Salads
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Snacks"
              className={`nav-link ${activeTab === "/Snacks" ? "active" : ""}`}
              onClick={() => setActiveTab("/Snacks")}
            >
              Burmese Snacks
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Drinks"
              className={`nav-link ${activeTab === "/Drinks" ? "active" : ""}`}
              onClick={() => setActiveTab("/Drinks")}
            >
              Drinks
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

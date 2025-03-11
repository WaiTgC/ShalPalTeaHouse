import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    const activeItem = document.querySelector(".nav-item.active");
    if (activeItem && navContainerRef.current) {
      navContainerRef.current.scrollLeft =
        activeItem.offsetLeft -
        navContainerRef.current.clientWidth / 2 +
        activeItem.clientWidth / 2;
    }
  }, [location.pathname]); // Runs when the route changes

  return (
    <nav className="navbar-container" ref={navContainerRef}>
      <ul className="navbar">
        <li>
          <NavLink to="/PoppicksPage" className="nav-item">
            Popular Picks
          </NavLink>
        </li>
        <li>
          <NavLink to="/Specials" className="nav-item">
            Burmese Specials
          </NavLink>
        </li>
        <li>
          <NavLink to="/Salads" className="nav-item">
            Burmese Salads
          </NavLink>
        </li>
        <li>
          <NavLink to="/Snacks" className="nav-item">
            Burmese Snacks
          </NavLink>
        </li>
        <li>
          <NavLink to="/Drinks" className="nav-item">
            Drinks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

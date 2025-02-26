import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(Home);

  return (
    <nav className="navbar-container">
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
    // <div className="navbar-container">
    //   <ul class="nav nav-tabs" id="myTab" role="tablist">
    //     <li class="nav-item" role="presentation">
    //       <button
    //         class="nav-link active"
    //         id="home-tab"
    //         data-bs-toggle="tab"
    //         data-bs-target="#home-tab-pane"
    //         type="button"
    //         role="tab"
    //         aria-controls="home-tab-pane"
    //         aria-selected="true"
    //       >
    //         Home
    //       </button>
    //     </li>
    //     <li class="nav-item" role="presentation">
    //       <button
    //         class="nav-link"
    //         id="profile-tab"
    //         data-bs-toggle="tab"
    //         data-bs-target="#profile-tab-pane"
    //         type="button"
    //         role="tab"
    //         aria-controls="profile-tab-pane"
    //         aria-selected="false"
    //       >
    //         Profile
    //       </button>
    //     </li>
    //     <li class="nav-item" role="presentation">
    //       <button
    //         class="nav-link"
    //         id="contact-tab"
    //         data-bs-toggle="tab"
    //         data-bs-target="#contact-tab-pane"
    //         type="button"
    //         role="tab"
    //         aria-controls="contact-tab-pane"
    //         aria-selected="false"
    //       >
    //         Contact
    //       </button>
    //     </li>
    //     <li class="nav-item" role="presentation">
    //       <button
    //         class="nav-link"
    //         id="disabled-tab"
    //         data-bs-toggle="tab"
    //         data-bs-target="#disabled-tab-pane"
    //         type="button"
    //         role="tab"
    //         aria-controls="disabled-tab-pane"
    //         aria-selected="false"
    //         disabled
    //       >
    //         Disabled
    //       </button>
    //     </li>
    //   </ul>
    //   <div class="tab-content" id="myTabContent">
    //     <div
    //       class="tab-pane fade show active"
    //       id="home-tab-pane"
    //       role="tabpanel"
    //       aria-labelledby="home-tab"
    //       tabindex="0"
    //     >
    //       ...
    //     </div>
    //     <div
    //       class="tab-pane fade"
    //       id="profile-tab-pane"
    //       role="tabpanel"
    //       aria-labelledby="profile-tab"
    //       tabindex="0"
    //     >
    //       ...
    //     </div>
    //     <div
    //       class="tab-pane fade"
    //       id="contact-tab-pane"
    //       role="tabpanel"
    //       aria-labelledby="contact-tab"
    //       tabindex="0"
    //     >
    //       ...
    //     </div>
    //     <div
    //       class="tab-pane fade"
    //       id="disabled-tab-pane"
    //       role="tabpanel"
    //       aria-labelledby="disabled-tab"
    //       tabindex="0"
    //     >
    //       ...
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;

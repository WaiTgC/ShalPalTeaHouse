import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="header">
      <div className="leftlogo" onClick={goBack} style={{ cursor: "pointer" }}>
        <i className="bi bi-arrow-left" />
      </div>
      <div className="rightlogo">
        <i className="bi bi-bell" />
      </div>
    </div>
  );
};

export default Header;

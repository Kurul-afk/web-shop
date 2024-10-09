import React from "react";
import { toast } from "react-toastify";
import "./style.css";
import { Link } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <ul className="header-links">
          <Link to={"/"}>Main</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/reviews"}>Reviews</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

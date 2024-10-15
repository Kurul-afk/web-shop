import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import "./style.css";
import BtnComponent from "../BtnComponent";
import Logo from "../../assets/img/logo.svg";
import DropDownBtn from "../DropDownBtn";
import HeaderSearch from "../HeaderSearch";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-slate-100 w-full ml-auto mr-auto fixed">
      <div className="flex items-center w-11/12 mx-auto my-2">
        <div
          className="flex items-center cursor-pointer w-16 mr-32"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="w-16" />
          <p className="text-purple-500 text-5xl">WS</p>
        </div>
        <DropDownBtn />
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header;

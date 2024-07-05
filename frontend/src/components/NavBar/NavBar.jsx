import React, { useContext, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount}= useContext(StoreContext)
  return (
    <div className="navbar">
      <link to='/'><img src={assets.logo} className="logo"></img></link>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <link to='/cart'></link><img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount()===0?"": "dot"}></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;

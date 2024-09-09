/* eslint-disable react/prop-types */
// import React from "react";
import "./NavMenu.css";

const NavMenu = ({ isOpen }) => {
  return (
    <div className={isOpen ? "navMenu open" : "navMenu closed"}>
      <ul className="navList">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;

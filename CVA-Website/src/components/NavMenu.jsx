import React from "react";
import "./NavMenu.css";

const NavMenu = ({ isOpen }) => {
  return (
    <div className={isOpen ? "navMenu open" : "navMenu closed"}>
      <ul className="navList">
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavMenu;

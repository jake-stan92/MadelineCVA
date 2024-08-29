import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import "./Header.css";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log(hamburgerOpen);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = hamburgerOpen ? "hidden" : "auto";
    }
  }, [hamburgerOpen]);

  return (
    <>
      <div className="header">
        <a href="/">Madeline Traynor CVA</a>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
      <NavMenu isOpen={hamburgerOpen} />
    </>
  );
};

export default Header;

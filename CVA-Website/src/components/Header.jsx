import React, { useState } from "react";
import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";
import "./Header.css";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log(hamburgerOpen);
  };

  return (
    <>
      <div className="header">
        <p>Madeline Traynor CVA</p>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
      <NavMenu isOpen={hamburgerOpen} />
    </>
  );
};

export default Header;

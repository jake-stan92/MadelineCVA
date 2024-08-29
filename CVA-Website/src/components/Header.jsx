import React, { useState } from "react";
import Hamburger from "./Hamburger";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log(hamburgerOpen);
  };

  return (
    <div className="header">
      <p>Madeline Traynor CVA</p>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </div>
  );
};

export default Header;

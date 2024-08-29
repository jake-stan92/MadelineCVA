import React from "react";
import "./Hamburger.css";

const Hamburger = ({ isOpen }) => {
  return (
    <>
      <div className="hamburger">
        <div
          className={isOpen ? "burger burger1Open" : "burger burger1Closed"}
        ></div>
        <div
          className={isOpen ? "burger burger2Open" : "burger burger2Closed"}
        ></div>
        <div
          className={isOpen ? "burger burger3Open" : "burger burger3Closed"}
        ></div>
      </div>
    </>
  );
};

export default Hamburger;

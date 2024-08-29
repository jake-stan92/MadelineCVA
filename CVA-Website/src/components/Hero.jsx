import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="poppyBG">
        <h1>
          Creative <br></br>Virtual<br></br>Assistance
        </h1>
        {/* flower image bg here */}
        <div className="insetContent">
          <p>
            FOR ADVENTUROUS SOULS, TRAVEL FOCUSED AND WOMEN-OWNED BUSINESSES.
          </p>
          <p className="right-set-text">
            FOR THE BIG <br></br>DREAMERS
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import "./Header.css";
import vijitimg from "../../assets/vijitimage.jpg";
import pattern from "../../assets/background.png"
const Header = () => {
  return (
    <div className="head-sec">
      <img src={pattern} alt="decor" class="head-decor" />
      <div className="head-left">
        <div className="left-container">
          <div className="left-back"></div>
          <div className="left-img">
            <img src={vijitimg} alt="" />
          </div>
        </div>
      </div>
      <div className="head-right"></div>
    </div>
  );
};

export default Header;

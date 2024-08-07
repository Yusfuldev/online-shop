import React from "react";
import banner from "../assets/banner.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="discunt">
        <span>
          <button className="btn">
            <img src={left} alt="" />
          </button>
          <p>Buy 5 & Get FLAT 15% OFF | Use code HNG11-24</p>
          <button className="btn">
            <img src={right} alt="" />
          </button>
        </span>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};
export default Hero;

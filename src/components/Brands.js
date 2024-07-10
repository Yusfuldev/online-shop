import React from "react";
import niti from "../assets/niti.svg";
import forbes from "../assets/forbes.svg";
import indian from "../assets/indian.svg";
import femina from "../assets/femina.svg";
import story from "../assets/story.svg";
import bt from "../assets/bt.png";
import yourstory from "../assets/yourstory.png";
import bw from "../assets/bw.png";
import mirror from "../assets/mirror.png";
import control from "../assets/control.png";
import lbb from "../assets/lbb.png";
import scoop from "../assets/scoop.png";

const Brands = () => {
  return (
    <div className="brands">
      <p>FEATURED IN</p>
      <div className="top">
        <img src={forbes} alt="" />
        <img src={niti} alt="" />
        <img src={indian} alt="" />
        <img src={femina} alt="" />
        <img src={story} alt="" />
        <img src={bt} alt="" />
      </div>
      <div className="bottom">
        <img src={yourstory} alt="" />
        <img src={bw} alt="" />
        <img src={mirror} alt="" />
        <img src={control} alt="" />
        <img src={lbb} alt="" />
        <img src={scoop} alt="" />
      </div>
    </div>
  );
};

export default Brands;

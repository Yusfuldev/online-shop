import React from "react";
import office from '../assets/office.png'
import wedding from '../assets/wedding.png'
const Wears = () => {
  return (
    <div className="wears">
      <div className="wedding">
        <img src={wedding} alt="" />
        <span>
          <p>Wedding Wears</p>
          <button>VIEW PRODUCTS</button>
        </span>
      </div>
      <div className="office">
        <img src={office} alt="" />
        <span>
          <p>Office Wears</p>
          <button>VIEW PRODUCTS</button>
        </span>
      </div>
    </div>
  );
};

export default Wears;

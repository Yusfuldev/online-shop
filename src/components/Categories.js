import React from "react";
import { Link } from "react-router-dom";
import watches from "../assets/watches.png";
import dresses from "../assets/dresses.png";
import casual from "../assets/casuals.png";
import jewellery from "../assets/jewellery.png";
import mens from "../assets/mens.png";
import shoes from "../assets/shoes.png";
import apppliances from "../assets/appliances.png";

const Categories = () => {
  return (
    <div className="categories">
      <h2>Product Categories</h2>
      <ul>
        <li>
          <Link to="/products">
            <img src={watches} alt=""></img>Watches
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src={dresses} alt=""></img>Dresses
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src={casual} alt=""></img>Casual wears (women)
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src={jewellery} alt=""></img>Jewellery
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src={mens} alt=""></img>Men's Wear
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src={shoes} alt=""></img>Shoe's Men
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src={apppliances} alt=""></img>Home Appliances
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src={watches} alt=""></img>Dresses
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;

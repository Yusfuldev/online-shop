import React from "react";
import likes from "../assets/likes.svg";
import addcart from "../assets/addcart.png";
import star from "../assets/star.png";
import turkey from "../assets/turkey.png";
import silk from "../assets/silk.png";
import vintage from "../assets/vintage.png";
import shirt from "../assets/shirt.png";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="features">
      <div className="carousel-nav">
        <button>Best Seller Ladies Wear</button>
        <button>Best Seller - Blouses</button>
      </div>
      <div className="products-wrapper">
        <div className="product-cards">
          <div className="card">
            <div className="abs-wrap">
              <p className="bestseller abs">Bestseller</p>
              <p className="rating abs">
                4.4
                <img src={star} alt="" />
                (198)
              </p>
              <button className="abs addcart">
                <img src={addcart} alt="" />
              </button>
              <button className="abs likes">
                <img src={likes} alt="" />
              </button>
              <img src={turkey} alt="" />
            </div>
            <Link to="./Categories.js">Hand-made Turkey casual</Link>
            <p className="price">#350,000.00</p>
          </div>
          <div className="card">
            <div className="abs-wrap">
              <p className="bestseller abs">Bestseller</p>
              <p className="rating abs">
                4.9
                <img src={star} alt="" />
                (691)
              </p>
              <button className="abs addcart">
                <img src={addcart} alt="" />
              </button>
              <button className="abs likes">
                <img src={likes} alt="" />
              </button>
              <img src={silk} alt="" />
            </div>
            <Link to="./Categories.js">PEACH SILK BLOUSE</Link>
            <p className="price">#35,200.00</p>
          </div>
          <div className="card">
            <div className="abs-wrap">
              <p className="bestseller abs">Bestseller</p>
              <p className="rating abs">
                4.9
                <img src={star} alt="" />
                (252)
              </p>
              <button className="abs addcart">
                <img src={addcart} alt="" />
              </button>
              <button className="abs likes">
                <img src={likes} alt="" />
              </button>
              <img src={vintage} alt="" />
            </div>
            <Link to="./Categories.js">vintage Hand-made blouse</Link>
            <p className="price">#30,000.00</p>
          </div>
          <div className="card">
                        <div className="abs-wrap">

            <p className="bestseller abs">Bestseller</p>
            <p className="rating abs">
              4.7
              <img src={star} alt="" />
              (212)
            </p>
            <button className="abs addcart">
              <img src={addcart} alt="" />
            </button>
            <button className="abs likes">
              <img src={likes} alt="" />
            </button>
              <img src={shirt} alt="" />
              </div>
            <Link to="./Categories.js">unisex t-shirt</Link>
            <p className="price">#28,850.00</p>
          </div>
        </div>
      </div>
      <Link to="./Features.js">View all</Link>
    </div>
  );
};

export default Features;

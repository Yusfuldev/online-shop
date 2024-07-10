import React from "react";
import likes from "../assets/likes.svg";
import addcart from "../assets/addcart.png";
import star from "../assets/star.png";
import designer from "../assets/designer.png";
import vintage from "../assets/vintage-dress.png";
import sunshine from "../assets/sunshine.png";
import youtan from "../assets/youtan.png";
import { Link } from "react-router-dom";

const Women = () => {
  return (
    <div className="women">
      <div className="carousel-nav">
        <p>Dresses For Women</p>
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
              <img src={designer} alt="" />
            </div>
            <Link to="./Categories.js">Hand-made Turkey casual</Link>
            <p className="price">#350,000.00</p>
            <p className="sizes">
              Sizes: XS S M L <span className="cancel">XL</span> XXL
            </p>
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
              <img src={vintage} alt="" />
            </div>
            <Link to="./Categories.js">PEACH SILK BLOUSE</Link>
            <p className="price">#35,200.00</p>
            <p className="sizes">
              Sizes: XS S M <span className="cancel">L</span> XL XXL
            </p>
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
              <img src={sunshine} alt="" />
            </div>
            <Link to="./Categories.js">vintage Hand-made blouse</Link>
            <p className="price">#30,000.00</p>
            <p className="sizes">
              Sizes: XS S M L XL <span className="cancel">XXL</span>
            </p>
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
              <img src={youtan} alt="" />
            </div>
            <Link to="./Categories.js">unisex t-shirt</Link>
            <p className="price">#28,850.00</p>
            <p className="sizes">
              Sizes: XS S <span className="cancel">M </span>
              <span className="cancel">L</span> XL XXL
            </p>
          </div>
        </div>
      </div>
      <Link to="./Features.js">View all products</Link>
    </div>
  );
};

export default Women;

import React from "react";
import likes from "../assets/likes.svg";
import addcart from "../assets/addcart.png";
import native from "../assets/native.png";
import jeans from "../assets/jeans.png";
import senator from "../assets/senator.png";
import menshoe from "../assets/menshoe.png";
import { Link } from "react-router-dom";

const Launched = () => {
  return (
    <div className="launched">
      <div className="carousel-nav">
        <p>Just Launched</p>
      </div>
      <div className="products-wrapper">
        <div className="product-cards">
          <div className="card">
            <div className="abs-wrap">
              <button className="abs addcart">
                <img src={addcart} alt="" />
              </button>
              <button className="abs likes">
                <img src={likes} alt="" />
              </button>
              <img src={native} alt="" />
            </div>
            <Link to="./Categories.js">Hand-made native casual</Link>
            <p className="price">#350,000.00</p>
            <p className="sizes">Sizes: XS S M L XL XXL</p>
          </div>
          <div className="card">
            <div className="abs-wrap">
              <button className="abs addcart">
                <img src={addcart} alt="" />
              </button>
              <button className="abs likes">
                <img src={likes} alt="" />
              </button>
              <img src={jeans} alt="" />
            </div>
            <Link to="./Categories.js">PEACH jeans BLOUSE</Link>
            <p className="price">#35,200.00</p>
            <p className="sizes">Sizes: XS S M L XL XXL</p>
          </div>
          <div className="card">
            <div className="abs-wrap">
              <button className="abs addcart">
                <img src={addcart} alt="" />
              </button>
              <button className="abs likes">
                <img src={likes} alt="" />
              </button>
              <img src={senator} alt="" />
            </div>
            <Link to="./Categories.js">senator Hand-made blouse</Link>
            <p className="price">#30,000.00</p>
            <p className="sizes">Sizes: XS S M L XL XXL</p>
          </div>
          <div className="card">
            <div className="abs-wrap">
              <button className="abs addcart">
                <img src={addcart} alt="" />
              </button>
              <button className="abs likes">
                <img src={likes} alt="" />
              </button>
              <img src={menshoe} alt="" />
            </div>
            <Link to="./Categories.js">unisex t-menshoe</Link>
            <p className="price">#28,850.00</p>
            <p className="sizes">Sizes: XS S M L XL XXL</p>
          </div>
        </div>
      </div>
      <Link to="./Features.js">View all products</Link>
    </div>
  );
};

export default Launched;

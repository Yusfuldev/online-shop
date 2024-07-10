import React from "react";
import { Link } from "react-router-dom";
import Dollar from "../assets/Dollar.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import van from "../assets/van.svg";
import likes from "../assets/likes.png";
import cart from "../assets/cart.png";
import logo from "../assets/logo.svg";
import "../index.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="secondary-nav">
          <img className="logo" src={logo} alt="" />

          <div className="list">
            <div className="search-rel">
              <input type="text" />
              <img className="search-icon" alt="" src={search} />
            </div>
            <ul>
              <li>
                <Link to="./Header">
                  <img alt="" src={user} />
                </Link>
              </li>
              <li>
                <Link to="./Header">
                  <img alt="" src={van} />
                </Link>
              </li>
              <li>
                <Link to="./Header">
                  <img alt="" src={likes} />
                </Link>
              </li>
              <li>
                <Link to="./Header">
                  <img alt="" src={cart} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="primary-nav">
          <li>
            <Link to="./Categories">BLOUSES</Link>
          </li>
          <li>
            <Link to="./Launched">
              DRESSES<sup>NEW</sup>
            </Link>
          </li>
          <li>
            <Link to="./Header">MEN'S WEAR</Link>
          </li>
          <li>
            <Link to="./Women">WOMEN'S WEAR</Link>
          </li>
          <li>
            <Link to="./Categories">ACCESSORIES</Link>
          </li>
          <li>
            <Link to="./Header">HOME & LIVING</Link>
          </li>
          <li>
            <Link to="./Header">ONE OF A KIND</Link>
          </li>
          <li className="links">
            <Link to="./Header">BEST SELLER</Link>
          </li>
          <li>
            <Link to="./Header" className="red">
              SALE
            </Link>
          </li>
          <li>
            <Link to="./Header">ABOUT US</Link>
          </li>
          <li>
            <Link to="./Header">
              SHOPPING COINS <img alt="" src={Dollar} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

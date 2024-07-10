import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import x from "../assets/twitter.png";
import ig from "../assets/ig.png";
import pinterest from "../assets/pinterest.png";
import ytube from "../assets/ytube.png";
import visa from "../assets/Visa.png.png";
import master from "../assets/MasterCard.png.png";
import paypal from "../assets/PayPal.png.png";
import american from "../assets/AmericanExpress.png.png";
import up from "../assets/UPI.png.png";
import cod from "../assets/COD.png.png";
import play from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import love from "../assets/love.svg";
import arrowup from "../assets/arrowup.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-wrapper">
        <div className="quicklinks">
          <p>QUICK LINKS</p>
          <ul>
            <li>
              <Link to="./Launched.js">RETURN & EXCHANGE REQUEST</Link>
            </li>
            <li>
              <Link to="./Launched.js">Contact Us!</Link>
            </li>
            <li>
              <Link to="./Launched.js">Frequently Asked Questions</Link>
            </li>
            <li>
              <Link to="./Launched.js" className="red">
                We Are Hiring!
              </Link>
            </li>
            <li>
              <Link to="./Launched.js">Wholesale Enquiries</Link>
            </li>
            <li>
              <Link to="./Launched.js">M-HNG Earth</Link>
            </li>
            <li>
              <Link to="./Launched.js">About Us</Link>
            </li>
            <li>
              <Link to="./Launched.js">Shopping Coins</Link>
            </li>
            <li>
              <Link to="./Launched.js">Refund policy</Link>
            </li>
            <li>
              <Link to="./Launched.js">Franchise Enquiry</Link>
            </li>
            <li>
              <Link to="./Launched.js">Affiliate Program</Link>
            </li>
            <li>
              <Link to="./Launched.js">Gowns and Blouses Under 3000</Link>
            </li>
            <li>
              <Link to="./Launched.js">Products Under 40000</Link>
            </li>
            <li>
              <Link to="./Launched.js">Dresses Under 30000</Link>
            </li>
          </ul>
        </div>
        <div className="quicklinks">
          <p>CUSTOMER SERVICE</p>
          <ul>
            <li>
              <Link to="./">Track Order</Link>
            </li>
            <li>
              <Link to="./">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="./">Shipping & Delivery Policy</Link>
            </li>
            <li>
              <Link to="./">Privacy Policy</Link>
            </li>
            <li>
              <Link to="./">Disclaimer Policy</Link>
            </li>
            <li>
              <Link to="./">Return & Exchange Policy</Link>
            </li>
          </ul>
        </div>
        <div className="quicklinks">
          <p>NEWSLETTER</p>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <input type="text" placeholder="Enter your email address" />
          <button type="submit">SUBSCRIBE</button>
        </div>
        <div className="quicklinks">
          <p>ABOUT M-ONLINE SHOPPING</p>
          <p>
            M-HNG shopping is Nigerians centuries online shop with the most
            streamlined shopping experience for anyone looking to buy
            traditional with contemporary style fashions- so that what looks
            good, feels good too.
            <br />
            Toll Free: 012345
            <br /> Email: ghh@gmail.com
          </p>
          <ul className="socials">
            <li>
              <Link to="./">
                <img alt="" src={facebook} />
              </Link>
            </li>
            <li>
              <Link to="./">
                <img alt="" src={x} />
              </Link>
            </li>
            <li>
              <Link to="./">
                <img alt="" src={ig} />
              </Link>
            </li>
            <li>
              <Link to="./">
                <img alt="" src={pinterest} />
              </Link>
            </li>
            <li>
              <Link to="./">
                <img alt="" src={ytube} />
              </Link>
            </li>
          </ul>
          <div className="quicklinks">
            <p>SUPPORTED PAYMENTS</p>
            <ul className="payment">
              <li>
                <img alt="" src={visa} />
              </li>
              <li>
                <img alt="" src={master} />
              </li>
              <li>
                <img alt="" src={paypal} />
              </li>
              <img alt="" src={american} />
              <li>
                <img alt="" src={up} />
              </li>
              <li>
                <img alt="" src={cod} />
              </li>
            </ul>
          </div>
        </div>
        <div className="quicklinks">
          <p>EXPERIENCE THE M-ONLINE SHOPPING APP</p>
          <ul className="apps">
            <li>
              <Link to="./">
                <img alt="" src={play} />
              </Link>
            </li>
            <li>
              <Link to="./">
                <img alt="" src={appstore} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="copyright">
        <p>
          Copyright 2024 &copy m-Oline Private Limited. All rights reserved.
        </p>
        <p className="diff">
          <b>Dipped in Love.</b>
          <br />
          <img src={love} alt="" />
        </p>
        <button>
          <img src={arrowup} alt="" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

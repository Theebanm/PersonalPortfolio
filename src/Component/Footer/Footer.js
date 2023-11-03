import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-copyright">
        <p>&#169; 2023 Theeban .All Rights Reserverd</p>
      </div>
      {/* foooter social */}
      <ul className="footer-socialmedia">
        <li>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

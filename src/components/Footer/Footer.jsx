import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © Restoran, All Rights Reserved.
      </div>
      <div className="footer-right">
        <Link to="/">Home</Link>
          <Link to="/contact-us">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;

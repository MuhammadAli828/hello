import React from "react";
import "./ContactUs.css"; // Import your custom CSS
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section className="hero1-wrapper">
      <div className="padding innerWidth  hero-container">
      <div className="contact-header">
      <div className="overlay"></div>
      <div className="content">
        <h1>Contact Us</h1>
        <p>
        <span><Link to="/">Home</Link> </span> /  <span>CONTACT</span>
        </p>
      </div>
    </div>
    </div>
    </section>
);
};

export default ContactUs;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className={`h-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="flexCenter paddings innerWidth h-container">
        <div className="logo">
          <i className="fa-solid fa-utensils"></i>
          <h1>Restoran</h1>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <div className={`h-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => {
              const section = document.getElementById("menu");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
              closeMenu(); 
            }} >Home</Link>
          <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
          <button
            className="button"
            onClick={() => {
              const section = document.getElementById("reservation-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
              closeMenu(); 
            }}
          >
            Book A Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

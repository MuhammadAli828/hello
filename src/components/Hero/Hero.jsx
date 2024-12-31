import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper1">
      <div className="padding innerWidth hero-container">
        {/* Left Section */}
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Enjoy Our
              <br />
              Delicious Meal
            </h1>
          </div>
          <div className="hero-des">
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam eteos.
            </p>
            <p>
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
              justo magna dolore erat amet.
            </p>
          </div>
          <div className="search-bar">
          <button className="button" onClick={() => 
          {
               const section = document.getElementById("reservation-section");
              if (section) 
                {
                     section.scrollIntoView({ behavior: "smooth" });
                 }
                   }}>   
                       Book A Table
                   </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <div className="image-container">
            <img src="/hero-image.png" alt="Delicious Meal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

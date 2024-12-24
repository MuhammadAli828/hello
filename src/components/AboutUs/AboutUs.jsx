import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Main Section */}
      <section className="about-us-section">
        {/* Images Grid */}
        <div className="images-grid">
          <img className="image1"src="about-1.jpg" alt="Restaurant Interior 1" style={{ width: '350px', height: '350px', objectFit: 'cover' ,}}/>
          <img  className="image2" src="about-2.jpg" alt="Restaurant Interior 2" />
          <img className="image3" src="about-3.jpg" alt="Food Dish" />
          <img className="image4"src="about-4.jpg" alt="Food Spread" style={{ width: '350px', height: '350px', objectFit: 'cover' }}/>
        </div>

        {/* Text Content */}
        <div className="about-us-text">
          <h5 className="about-us-heading">About Us</h5>
          <h1 className="welcome-title">
            Welcome to <span className="highlight"> <i className="fa-solid fa-utensils"></i> Restoran</span>
          </h1>
          <p className="welcome-description">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          <p className="welcome-description">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>

          {/* Statistics */}
          <div className="stats-container">
            <div className="stat-item">
              <h2>15</h2>
              <p>
                Years of <strong>EXPERIENCE</strong>
              </p>
            </div>
            <div className="stat-item">
              <h2>50</h2>
              <p>
                Popular <strong>MASTER CHEFS</strong>
              </p>
            </div>
          </div>

          <button className='button'>
            <a href=''>Read more</a></button>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;

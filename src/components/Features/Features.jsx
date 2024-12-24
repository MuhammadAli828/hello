import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      {/* Feature Tile 1 */}
      <div className="feature-tile">
        <div className="icon"><i class="fa-solid fa-cookie-bite"></i></div>
        <h3 className="title">Master Chefs</h3>
        <p className="description">
          Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </p>
      </div>

      {/* Feature Tile 2 */}
      <div className="feature-tile">
        <div className="icon"><i class="fa-solid fa-utensils"></i></div>
        <h3 className="title">Quality Food</h3>
        <p className="description">
          Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </p>
      </div>

      {/* Feature Tile 3 */}
      <div className="feature-tile">
        <div className="icon"><i class="fa-solid fa-cart-shopping"></i></div>
        <h3 className="title">Online Order</h3>
        <p className="description">
          Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </p>
      </div>

      {/* Feature Tile 4 */}
      <div className="feature-tile">
        <div className="icon"><i class="fa-solid fa-headphones"></i></div>
        <h3 className="title">24/7 Service</h3>
        <p className="description">
          Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
        </p>
      </div>
    </div>
  );
};

export default Features;

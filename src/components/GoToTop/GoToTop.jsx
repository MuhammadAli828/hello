import React, { useState, useEffect } from "react";
import "./GoToTop.css"; 



const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="go-to-top-button" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
                </button>
      )}
    </div>
  );
};

export default GoToTop;

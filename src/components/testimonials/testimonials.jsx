import React, { useState, useEffect } from "react";
import "./testimonials.css";

const testimonials = [
  {
    id: 1,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    clientName: "Client 1",
    profession: "Profession",
    image: "testimonial-1.jpg",
  },
  {
    id: 2,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    clientName: "Client 2",
    profession: "Profession",
    image: "testimonial-2.jpg",
  },
  {
    id: 3,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    clientName: "Client 3",
    profession: "Profession",
    image: "testimonial-3.jpg",
  },
  {
    id: 4,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    clientName: "Client 4",
    profession: "Profession",
    image: "testimonial-4.jpg",
  },
  {
    id: 5,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
    clientName: "Client 5",
    profession: "Profession",
    image: "testimonial-1.jpg",
  },
];

function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  // Automatically cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const visibleTestimonials = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h5>Testimonial</h5>
        <h2>Our Clients Say!!!</h2>
      </div>

      <div className="testimonial-grid">
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-client">
              <img
                src={testimonial.image}
                alt={testimonial.clientName}
                className="client-image"
              />
              <div>
                <p className="client-name">{testimonial.clientName}</p>
                <p className="client-profession">{testimonial.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

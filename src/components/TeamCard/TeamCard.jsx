import React from 'react';
import './TeamCard.css'; // External CSS file for styling

const TeamCard = () => {
  const teamMembers = [
    {
      id: 1,
      image: 'team-1.jpg', // Replace with actual image URLs
      name: 'Full Name',
      designation: 'Designation',
    },
    {
      id: 2,
      image: 'team-2.jpg',
      name: 'Full Name',
      designation: 'Designation',
    },
    {
      id: 3,
      image: 'team-3.jpg',
      name: 'Full Name',
      designation: 'Designation',
    },
    {
      id: 4,
      image: 'team-4.jpg',
      name: 'Full Name',
      designation: 'Designation',
    },
  ];

  return (
    <div className="team-container">
      <h2 className="team-heading">
        <span className="team-highlight">Team Members</span>
        <br />
        Our Master Chefs
      </h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image-container">
              <img src={member.image} alt={member.name} className="team-image" />
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-designation">{member.designation}</p>
            </div>
            <div className="team-social">
              <span className="social-icon"><i class="fa-brands fa-facebook"></i></span>
              <span className="social-icon"><i class="fa-brands fa-x-twitter"></i></span>
              <span className="social-icon"><i class="fa-brands fa-instagram"></i></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;

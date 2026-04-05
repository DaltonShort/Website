import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from './assets/image.jpg';

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img 
            src={profileImg}
            alt="Dalton J. Short" 
            className="profile-img"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Dalton J. Short</h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-description">
            Passionate software engineer with expertise in full-stack development, algorithmic problem-solving, and modern engineering workflows. 
            Experienced in Java, Python, React, and enterprise platforms like ServiceNow. 
            Dedicated to building efficient, maintainable systems with a focus on AI integration and clean architecture.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

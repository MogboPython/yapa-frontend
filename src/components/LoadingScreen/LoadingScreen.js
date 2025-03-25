import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dof4l5eul/image/upload/v1742909829/Yapa-logo_jjdeyu.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <p className="tagline">Yap to your favourite people</p>
    </div>
  );
};

export default LoadingScreen;
// src/components/OnboardingScreen.js
import React from 'react';
import './OnboardingScreen.css';

const OnboardingScreen = () => {
  return (
    <div className="onboarding-screen">
      <h1 className="onboarding-title">
        Start a Fun Communication with Anonymity
      </h1>
      
      <div className="avatar-grid">
        {/* NFT Avatar circles with placeholder backgrounds */}
        <div className="avatar-circle avatar-circle-1">
          {/* // TODO: image */}
        </div>
        <div className="avatar-circle avatar-circle-2">
          {/* // TODO: image */}
        </div>
        <div className="avatar-circle avatar-circle-3">
          {/* // TODO: image */}
        </div>
        <div className="avatar-circle avatar-circle-4">
          {/* // TODO: image */}
        </div>
        <div className="avatar-circle avatar-circle-5">
          {/* // TODO: image */}
        </div>
        <div className="avatar-circle avatar-circle-6">
          {/* // TODO: image */}
        </div>
        <div className="avatar-circle avatar-circle-7">
          {/* // TODO: image */}
        </div>
        <div className="avatar-circle avatar-circle-8">
          {/* // TODO: image */}
        </div>
        <div className="avatar-circle avatar-circle-9">
          {/* // TODO: image */}
        </div>
      </div>

      <button className="create-account-btn">Create an account</button>
      <button className="restore-btn">Restore</button>
    </div>
  );
};

export default OnboardingScreen;
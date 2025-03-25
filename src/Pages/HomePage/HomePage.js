import React from 'react';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import OnboardingScreen from '../../components/OnboardingScreen/OnboardingScreen';
import './HomePage.css';

const HomePage = ({ isMobile = false }) => {
  if (!isMobile) {
    // Web view (side by side)
    return (
      <div className="home-page split-view">
        <div className="left-panel">
          <LoadingScreen />
        </div>
        <div className="right-panel">
          <OnboardingScreen />
        </div>
      </div>
    );
  }
  
  // Mobile view
  return (
    <div className="home-page mobile-view">
      <OnboardingScreen />
    </div>
  );
};

export default HomePage;
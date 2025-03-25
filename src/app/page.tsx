'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import OnboardingScreen from '@/components/OnboardingScreen/OnboardingScreen';
import './homepage.css';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if mobile on initial render
    setIsMobile(window.innerWidth <= 768);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Mobile view with loading screen
  if (isMobile && isLoading) {
    return <LoadingScreen />;
  }
  
  // Web view (side by side)
  if (!isMobile) {
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
  
  // Mobile view after loading
  return (
    <div className="home-page mobile-view">
      <OnboardingScreen />
    </div>
  );
}
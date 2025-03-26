'use client';

import React, { useState, useEffect } from 'react';
import { LoadingScreen, OnboardingScreen } from './OnboardingScreen/Onboarding';
import './homepage.css';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  useEffect(() => {
     // Prevent body from scrolling
     document.body.style.overflow = 'hidden';

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
      document.body.style.overflow = '';
    };
  }, []);
  
  // Mobile view with loading screen
  if (isMobile && isLoading) {
    return <LoadingScreen />;
  }
  
  // Web view (side by side)
  return (
    <div className="h-screen w-full overflow-hidden md:flex">
      {!isMobile ? (
        <>
          <div className="flex-1 h-full">
            <LoadingScreen />
          </div>
          <div className="flex-1 h-full">
            <OnboardingScreen />
          </div>
        </>
      ) : (
        <OnboardingScreen />
      )}
    </div>
  );
}
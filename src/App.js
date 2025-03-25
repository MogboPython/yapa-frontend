// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
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

  // Handle mobile view with loading screen
  if (isMobile && isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage isMobile={isMobile} />} />
          {/* Add more routes here as you build more pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './OnboardingScreen.css';

interface OnboardingScreenProps {
  // Add any props if needed
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleCreateAccount = async (): Promise<void> => {
    setIsLoading(true);
    setError('');
    
    try {
      // Here you would add your wallet connection logic
      console.log('Connecting wallet...');
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      console.error('Wallet connection error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestore = async (): Promise<void> => {
    setIsLoading(true);
    setError('');
    
    try {
      // Restore account logic
      console.log('Restoring account...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    } catch (err) {
      setError('Failed to restore account. Please try again.');
      console.error('Account restoration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="onboarding-screen">
      <h1 className="onboarding-title">
        Start a Fun Communication with Anonymity
      </h1>
      
      <div className="avatar-grid">
        {/* NFT Avatar circles with placeholder backgrounds */}
        <div className="avatar-circle avatar-circle-1"></div>
        <div className="avatar-circle avatar-circle-2"></div>
        <div className="avatar-circle avatar-circle-3"></div>
        <div className="avatar-circle avatar-circle-4"></div>
        <div className="avatar-circle avatar-circle-5"></div>
        <div className="avatar-circle avatar-circle-6"></div>
        <div className="avatar-circle avatar-circle-7"></div>
        <div className="avatar-circle avatar-circle-8"></div>
        <div className="avatar-circle avatar-circle-9"></div>
      </div>

      {error && <p className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      
      <button 
        className="create-account-btn" 
        onClick={handleCreateAccount}
        disabled={isLoading}
      >
        {isLoading ? 'Connecting...' : 'Create an account'}
      </button>
      
      <button 
        className="restore-btn"
        onClick={handleRestore}
        disabled={isLoading}
      >
        Restore
      </button>
    </div>
  );
};

export default OnboardingScreen;
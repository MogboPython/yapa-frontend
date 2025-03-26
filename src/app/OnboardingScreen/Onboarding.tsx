import { useState } from 'react';
import AvatarGrid from './AvatarGrid';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen h-screen flex flex-col items-center justify-center">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dof4l5eul/image/upload/v1742909829/Yapa-logo_jjdeyu.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <p className="tagline text-[#0573F3] text-[20px] tracking-[-2%]">Yap to your favourite people</p>
    </div>
  );
};

export const OnboardingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

  const handleCreateAccount = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      console.log('Connecting wallet...');
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
      console.error('Wallet connection error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestore = async () => {
    setIsLoading(true);
    setError('');
    
    try {
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
    <div className=" h-screen w-screen md:w-full lg:w-[70%] flex flex-col items-center gap-4 pb-4">
      <h1 className="text-[40px] tracking-[-2%] font-semibold text-[#0573F3] pt-10 w-[70%] md:w-[80%] self-start pl-5 md:pl-3">
        Start a Fun Communication with Anonymity
      </h1>
      
      <AvatarGrid />

      {error && <p className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      
      <button 
        className="bg-[#0067E0] w-[90%] mx-auto md:w-[90%] lg:w-[87%] lg:ml-0 lg:mr-auto py-3 rounded-[4px] cursor-pointer hover:opacity-60 transition ease-in-out duration-300" 
        onClick={handleCreateAccount}
        disabled={isLoading}
      >
       <p className='tracking-[-2%] text-base text-[#F6FBFF]'>
         {isLoading ? 'Connecting...' : 'Create an account'}
        </p>
      </button>
      
      <button 
        className="cursor-pointer w-[90%] mx-auto md:w-[90%] lg:w-[87%] lg:ml-0 lg:mr-auto"
        onClick={handleRestore}
        disabled={isLoading}
      >
       <p className='text-[#424F63] tracking-[-2%] text-base'>
        Restore
       </p>
      </button>
    </div>
  );
};

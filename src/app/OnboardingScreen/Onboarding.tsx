import { useState } from 'react';
import AvatarGrid from './AvatarGrid';
import { useAppKit } from '@reown/appkit/react'

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
  const { open } = useAppKit()

  return (
    <div className=" h-screen w-screen md:w-full lg:w-[70%] flex flex-col items-center gap-4 pb-4">
      <h1 className="text-[40px] tracking-[-2%] font-semibold text-[#0573F3] pt-10 w-[70%] md:w-[80%] self-start pl-5 md:pl-3">
        Start a Fun Communication with Anonymity
      </h1>
      
      <AvatarGrid />
      
      <button 
        className="bg-[#0067E0] w-[90%] mx-auto md:w-[90%] lg:w-[87%] lg:ml-0 lg:mr-auto py-3 rounded-[4px] cursor-pointer hover:opacity-60 transition ease-in-out duration-300" 
        onClick={() => open()}
      >
       <p className='tracking-[-2%] text-base text-[#F6FBFF]'>
         Connect your account
        </p>
      </button>
    </div>
  );
};

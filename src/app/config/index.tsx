import dotenv from 'dotenv';
dotenv.config();


export const config = {
  PORT: process.env.PORT || '4000',
  NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID || '',
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || '',
};

export * from './wallet';
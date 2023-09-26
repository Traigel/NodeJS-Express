import dotenv from 'dotenv';

const appEnv = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${appEnv}` });

export const appConfig = {
  Env: appEnv,
  IsDevelopment: appEnv === 'development',
  IsProduction: appEnv === 'production',
  Port: process.env.PORT || 5000,
};

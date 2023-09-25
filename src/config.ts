import dotenv from 'dotenv';

const appEnv = process.env.NODE_ENV || 'prod';
dotenv.config({ path: `.env.${appEnv}` });

export const apiConfig = {
  Env: appEnv,
  IsLocal: appEnv === 'local',
  IsProd: appEnv === 'prod',
  Port: process.env.PORT || 5001,
};

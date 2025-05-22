import { cleanEnv, str, port, url } from 'envalid';

export const appEnv = cleanEnv(process.env, {
  NODE_ENV: str({ default: 'development' }),
  PORT: port(),
  MONGO_URI: str(),
  MONGO_DB_NAME: str(),
  BASE_URL: url()
});
import { cleanEnv, str, port } from 'envalid';

export const appEnv = cleanEnv(process.env, {
  NODE_ENV: str({ default: 'development' }),
  PORT: port(),
  MONGO_URI: str()
});
import mongoose from "mongoose";
import { appEnv } from "./env.js";
import { logger } from "./logger.js";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(appEnv.MONGO_URI, {
      dbName: appEnv.MONGO_DB_NAME
    });
    logger.info(`Mongo Database connected`);
  } catch (error) {
    logger.error(`Error: ${error}`);
    process.exit(1);
  }
};
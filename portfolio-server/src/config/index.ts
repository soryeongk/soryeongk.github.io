import dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {
  /**
   * MongoDB URI
   */
  mongoURI: process.env.MONGODB_URI as string,
};

export default config;

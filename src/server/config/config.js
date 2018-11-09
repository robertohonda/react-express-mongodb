import dotenv from "dotenv";
dotenv.config();

export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.SERVER_PORT;
export const DB_URI = process.env.DB_URI;

export default {
  PORT,
  DB_URI
};

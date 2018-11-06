import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.SERVER_PORT;
export const DB_URI = process.env.DB_URI;

export default {
  PORT,
  DB_URI
};

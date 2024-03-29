import { config } from "dotenv";

config();


export const SECRETKEY_ENCRYPT = process.env.SECRETKEY_ENCRYPT;
export const DB_HOST = process.env.DB_HOST;
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_PORT = process.env.DB_PORT;

export const SMTP_HOST = process.env.SMTP_HOST;
export const SMTP_PORT = process.env.SMTP_PORT;
export const SMTP_EMAIL = process.env.SMTP_EMAIL;
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

export const BASE_PATH_RESTCOUNTRIES = process.env.BASE_PATH_RESTCOUNTRIES;
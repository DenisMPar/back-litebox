import * as pg from "pg";
import { Options, Sequelize } from "sequelize";
import "dotenv/config";

let testing = process.env.NODE_ENV === "test";

const sequelizeOptions: Options = {
  dialect: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  logging: false,
  ssl: true,
  dialectOptions: {
    statement_timeout: 150000,
    lock_timeout: 150000,
    iddle_in_transaction_session_timeout: 50000,
    useUTC: true,
  },
  timezone: "UTC",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectModule: pg,
};

const sequelizeConection = new Sequelize(sequelizeOptions);

const initDatabase = async () => {
  try {
    await sequelizeConection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { sequelizeConection, initDatabase };
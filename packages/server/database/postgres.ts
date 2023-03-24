import dotenv from 'dotenv';
import type { SequelizeOptions } from 'sequelize-typescript';
import { Sequelize } from 'sequelize-typescript';

dotenv.config();

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, HOST } = process.env;

console.log(process.env.POSTGRES_USER); // undefined

const clientPostgresDB: SequelizeOptions = {
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: HOST,
  port: Number(POSTGRES_PORT),
  dialect: 'postgres',
};

export const sequelize = new Sequelize(clientPostgresDB);

export const connectPostgresDB = async () => {
  try {
    // await import('../models/mockModel');
    await sequelize.authenticate();
    // await sequelize.sync();
    console.log('Successfull connection to DB!');
  } catch (e) {
    console.error(e);
    console.error('Connection fail:', e);
  }
};

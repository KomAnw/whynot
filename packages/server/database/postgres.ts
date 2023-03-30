import * as dotenv from 'dotenv';
import type { Options } from 'sequelize';
import { Sequelize } from 'sequelize';
import { findFile } from '../utils/findFile';

dotenv.config({ path: findFile('.env') });

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, HOST } = process.env;

const clientPostgresDB: Options = {
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
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Successfull connection to DB!');
  } catch (e) {
    console.error('Connection fail:', e);
  }
};

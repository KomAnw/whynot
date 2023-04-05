import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import type { Options } from 'sequelize';
import { findFile } from '../utils/findFile';
import { logger } from '../utils/logger';

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
    logger('Successfully connection to DB!', 'info');
  } catch (e) {
    logger(`Connection fail: ${e}`, 'error');
  }
};

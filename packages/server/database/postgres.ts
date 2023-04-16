import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import type { Options } from 'sequelize';
import { logger } from '../utils/logger';
import { findFile } from '../utils/findFile';
import { isDockerBuild } from '../src/app';

dotenv.config({ path: findFile('.env') });

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } = process.env;

const clientPostgresDB: Options = {
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: isDockerBuild ? 'postgres' : 'localhost',
  port: Number(POSTGRES_PORT),
  dialect: 'postgres',
};

export const sequelize = new Sequelize(clientPostgresDB);
export const connectPostgresDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    logger('Successfully connection to DB!', 'info');
  } catch (e) {
    logger(`Connection fail: ${e}`, 'error');
  }
};

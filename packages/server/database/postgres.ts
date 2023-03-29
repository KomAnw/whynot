import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { findFile } from '../utils/findFile';

dotenv.config({ path: findFile('.env') });

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, HOST } = process.env;

type Dialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle';

type TSequelizeOptions = {
  database?: string;
  username?: string;
  password?: string;
  host?: string;
  port?: number;
  dialect?: Dialect;
};

const clientPostgresDB: TSequelizeOptions = {
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
    console.log('Successfully connection to DB!');
  } catch (e) {
    console.error('Connection fail:', e);
  }
};

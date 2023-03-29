import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import type { SequelizeOptions } from 'sequelize-typescript';
// import type { Dialect } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { findFile } from '../utils/findFile';

dotenv.config({ path: findFile('.env') });

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, HOST } = process.env;

export const clientPostgresDB: SequelizeOptions = {
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: HOST,
  port: Number(POSTGRES_PORT),
  dialect: 'postgres',
  models: ['../models/models'],
};

export const sequelize = new Sequelize(clientPostgresDB);

class Theme extends Model {}

Theme.init(
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    theme: { type: DataTypes.ENUM('default', 'other'), defaultValue: 'default' },
    mode: { type: DataTypes.ENUM('Doodle', 'Mario', 'Homer'), defaultValue: 'Doodle' },
  },
  { sequelize, timestamps: false, modelName: 'theme' }
);

export const connectPostgresDB = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.addModels(['../models/models']);

    // Alarm! { force: true } adds a DROP TABLE IF EXISTS before trying to create the table
    await sequelize.sync({ force: true });
    await Theme.create({ user_id: 2 });
    console.log('Successfull connection to DB!');
  } catch (e) {
    console.error('Connection fail:', e);
  }
};

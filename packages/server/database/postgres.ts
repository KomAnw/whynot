import * as dotenv from 'dotenv';
import { AutoIncrement, Column, DataType, PrimaryKey, Sequelize, Table } from 'sequelize-typescript';
import type { SequelizeOptions } from 'sequelize-typescript';
import type { Dialect } from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { findFile } from '../utils/findFile';

const ts = [AutoIncrement, Column, DataType, PrimaryKey, Table];

console.log(ts);

dotenv.config({ path: findFile('.env') });

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, HOST, DIALECT } = process.env;

export const clientPostgresDB: SequelizeOptions = {
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: HOST,
  port: Number(POSTGRES_PORT),
  dialect: DIALECT as Dialect,
  // models: ['../models/models'],
};

export const sequelize = new Sequelize(clientPostgresDB);

@Table
class Theme extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id?: number;
  @Column(DataType.INTEGER)
  user_id!: number;
  @Column(DataType.ENUM)
  theme?: string;
  @Column(DataType.ENUM)
  mode?: string;
}

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
    await Theme.create({ user_id: 1 });
    await Theme.create({ user_id: 2, mode: 'Homer' });
    await Theme.create({ user_id: 3, theme: 'other' });
    await Theme.create({ user_id: 4 });
    const themes = Theme.findByPk(1);

    themes.then(res => console.log(res));
    console.log('Successfull connection to DB!');
  } catch (e) {
    console.error('Connection fail:', e);
  }
};

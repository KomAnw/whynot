import { DataTypes } from 'sequelize';
import { sequelize } from '../database/postgres';

export const MockData = sequelize.define('mockdata', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING },
  number: { type: DataTypes.INTEGER },
  boolean: { type: DataTypes.BOOLEAN, defaultValue: false },
});

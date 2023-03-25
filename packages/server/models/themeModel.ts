import { DataTypes } from 'sequelize';
import { sequelize } from '../database/postgres';
import { User } from './userModel';

export const Theme = sequelize.define('theme', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

Theme.hasMany(User);

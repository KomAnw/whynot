import { DataTypes } from 'sequelize';
import { sequelize } from '../database/postgres';
import { User } from './userModel';

export const Mode = sequelize.define('mode', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

Mode.hasMany(User);

import { DataTypes } from 'sequelize';
import { sequelize } from '../database/postgres';

export const User = sequelize.define(
  'user',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, unique: true },
    theme: { type: DataTypes.STRING, defaultValue: 'default' },
    mode: { type: DataTypes.STRING, defaultValue: 'Doodle' },
  },
  { timestamps: false }
);

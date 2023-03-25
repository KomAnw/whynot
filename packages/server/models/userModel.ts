import { DataTypes } from 'sequelize';
import { sequelize } from '../database/postgres';
import { Mode } from './modeModel';
import { Theme } from './themeModel';

export const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.STRING, unique: true },
  theme: { type: DataTypes.STRING, defaultValue: 'default' },
  mode: { type: DataTypes.STRING, defaultValue: 'Doodle' },
});

User.belongsTo(Theme);
User.belongsTo(Mode);

import { DataTypes } from 'sequelize';
import { sequelize } from '../database/postgres';

export const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

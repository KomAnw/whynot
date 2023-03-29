/*
import { DataTypes, Deferrable } from 'sequelize';
import { sequelize } from '../database/postgres';
import { Post } from './post';

export const Message = sequelize.define('Message', {
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
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id',
      deferrable: Deferrable.NOT(),
    },
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
*/

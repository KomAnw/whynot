import type { Model } from 'sequelize';
import { DataTypes, Deferrable } from 'sequelize';
import type { ModelAttributes } from 'sequelize/types';
import { sequelize } from '../database/postgres';
import { Post } from './post';

type TMessage = {
  text: string;
  author_id: number;
  post_id: number;
  date: Date;
  main_message_id: number;
  emojis: number[][];
};

const MessageModel: ModelAttributes<Model, TMessage> = {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
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
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  main_message_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  emojis: {
    type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.INTEGER)),
    allowNull: true,
  },
};

export const Message = sequelize.define('Message', MessageModel, { timestamps: false });

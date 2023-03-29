import type { Model } from 'sequelize';
import { DataTypes } from 'sequelize';
import type { ModelAttributes } from 'sequelize/types';
import { sequelize } from '../database/postgres';

type TPost = {
  text: string;
  author_id: number;
  date: Date;
};

export const PostModel: ModelAttributes<Model, TPost> = {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

export const Post = sequelize.define('Post', PostModel, { timestamps: false });

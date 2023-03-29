import type { Model } from 'sequelize';
import { DataTypes } from 'sequelize';
import type { ModelAttributes } from 'sequelize/types';
import { sequelize } from '../database/postgres';

type TPost = {
  name: string;
};

const PostModel: ModelAttributes<Model, TPost> = {
  name: {
    type: DataTypes.STRING,
  },
};

export const Post = sequelize.define('Post', PostModel, { timestamps: false });

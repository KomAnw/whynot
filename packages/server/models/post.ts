import { Model, DataTypes } from 'sequelize';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/postgres';

export class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post, { omit: 'id' }>> {
  declare id?: number;
  declare text: string;
  declare authorId: number;
  declare login: string;
  declare date: Date;
}

export const PostModel = Post.init(
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    login: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Posts',
  }
);

import { Model, DataTypes, Deferrable } from 'sequelize';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/postgres';
import { PostModel } from './post';

export class Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message, { omit: 'id' }>> {
  declare id?: number;
  declare text: string;
  declare authorId: number;
  declare authorFullName: string;
  declare postId: number;
  declare date: Date;
  declare mainMessageId: number | null;
  declare emojis: number[][] | null;
}

export const MessageModel = Message.init(
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    authorFullName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: PostModel,
        key: 'id',
        deferrable: Deferrable.NOT(),
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    mainMessageId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    emojis: {
      type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.INTEGER)),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Messages',
  }
);

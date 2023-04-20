import { Model, DataTypes, Deferrable } from 'sequelize';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/postgres';
import { PostModel } from './post';

export class Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message, { omit: 'id' }>> {
  declare id?: number;
  declare text: string;
  declare authorId: number;
  declare login: string;
  declare postId: number;
  declare date: Date;
  declare mainMessageId: number;
  declare emojis: JSON[];
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
    login: {
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
      allowNull: false,
    },
    emojis: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'Messages',
  }
);

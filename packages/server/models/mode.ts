import { Model, DataTypes } from 'sequelize';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/postgres';

export enum EMode {
  DOODLE = 'Doodle',
  HOMER = 'Homer',
  MARIO = 'Mario',
}

export class Mode extends Model<InferAttributes<Mode>, InferCreationAttributes<Mode, { omit: 'id' }>> {
  declare id?: number;
  declare userId: number;
  declare mode: EMode;
}

export const ModeModel = Mode.init(
  {
    userId: { type: DataTypes.INTEGER, unique: true },
    mode: { type: DataTypes.ENUM(EMode.DOODLE, EMode.HOMER, EMode.MARIO), defaultValue: EMode.DOODLE },
  },
  {
    sequelize,
    tableName: 'mode',
    timestamps: false,
  }
);

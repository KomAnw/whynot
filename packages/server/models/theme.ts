import { Model, DataTypes } from 'sequelize';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/postgres';

export enum ETheme {
  DEFAULT = 'default',
  OTHER = 'other',
}

export class Theme extends Model<InferAttributes<Theme>, InferCreationAttributes<Theme, { omit: 'id' }>> {
  declare id?: number;
  declare userId: number;
  declare theme: ETheme;
}

export const ThemeModel = Theme.init(
  {
    userId: { type: DataTypes.INTEGER, unique: true },
    theme: { type: DataTypes.ENUM(ETheme.OTHER, ETheme.DEFAULT), defaultValue: ETheme.DEFAULT },
  },
  {
    sequelize,
    tableName: 'theme',
    timestamps: false,
  }
);

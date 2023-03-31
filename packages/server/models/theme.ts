import { Model, DataTypes } from 'sequelize';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/postgres';

enum ETheme {
  DEFAULT = 'default',
  OTHER = 'other',
}

enum EMode {
  DOODLE = 'Doodle',
  HOMER = 'Homer',
  MARIO = 'Mario',
}

export class Theme extends Model<InferAttributes<Theme>, InferCreationAttributes<Theme, { omit: 'id' }>> {
  declare id?: number;
  declare userId: number;
  declare theme: ETheme;
  declare mode: EMode;
}

export const ThemeModel = Theme.init(
  {
    userId: { type: DataTypes.INTEGER, unique: true },
    theme: { type: DataTypes.ENUM(ETheme.OTHER, ETheme.DEFAULT), defaultValue: ETheme.DEFAULT },
    mode: { type: DataTypes.ENUM(EMode.DOODLE, EMode.HOMER, EMode.MARIO), defaultValue: EMode.DOODLE },
  },
  {
    sequelize,
    tableName: 'theme',
    timestamps: false,
  }
);

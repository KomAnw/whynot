import { Model, DataTypes } from 'sequelize';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/postgres';

export class Theme extends Model<InferAttributes<Theme>, InferCreationAttributes<Theme, { omit: 'id' }>> {
  declare id?: number;
  declare userId: number;
  declare theme: 'default' | 'other';
  declare mode: 'Doodle' | 'Homer' | 'Mario';
}

export const ThemeModel = Theme.init(
  {
    userId: { type: DataTypes.INTEGER, unique: true },
    theme: { type: DataTypes.ENUM('default', 'other'), defaultValue: 'default' },
    mode: { type: DataTypes.ENUM('Doodle', 'Homer', 'Mario'), defaultValue: 'Doodle' },
  },
  {
    sequelize,
    tableName: 'theme',
    timestamps: false,
  }
);

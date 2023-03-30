import { Model, DataTypes } from 'sequelize';
import type { InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../database/postgres';

export class Theme extends Model<InferAttributes<Theme>, InferCreationAttributes<Theme, { omit: 'id' }>> {
  declare id?: number;
  declare user_id: number;
  declare theme: string;
  declare mode: string;
}

export const ThemeModel = Theme.init(
  {
    user_id: { type: DataTypes.INTEGER, unique: true },
    theme: { type: DataTypes.ENUM('default', 'other'), defaultValue: 'default' },
    mode: { type: DataTypes.ENUM('Doodle', 'Homer, "Mario'), defaultValue: 'Doodle' },
  },
  {
    sequelize,
    tableName: 'theme',
    timestamps: false,
  }
);

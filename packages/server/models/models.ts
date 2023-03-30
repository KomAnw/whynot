import type { Model } from 'sequelize';
import { DataTypes } from 'sequelize';
import type { ModelAttributes } from 'sequelize/types';
import { sequelize } from '../database/postgres';

type TTheme = {
  user_id: number;
  theme: string;
  mode: string;
};

export const ThemeModel: ModelAttributes<Model, TTheme> = {
  user_id: { type: DataTypes.INTEGER, unique: true },
  theme: { type: DataTypes.ENUM('default', 'other'), defaultValue: 'default' },
  mode: { type: DataTypes.ENUM('Doodle', 'Homer, "Mario'), defaultValue: 'Doodle' },
};

export const Theme = sequelize.define('theme', ThemeModel, { timestamps: false });

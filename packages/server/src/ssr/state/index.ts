import { themes } from './theme';
import { defaultSprite } from './mode';
import type { ETheme } from '../../../models/theme';

/**
 * Начальное состояние для неавторизованных пользователей.
 */
export const initialState = { theme: themes.default, mode: { sprite: defaultSprite } };

/**
 * Функция получения темы для авторизованных пользователей.
 */
export const getUserState = (themeName: ETheme) => {
  return { theme: themes[themeName], mode: { sprite: defaultSprite } };
};

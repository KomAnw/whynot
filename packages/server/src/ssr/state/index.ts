import { themes } from './theme';
import { sprites } from './mode';
import { ETheme } from '../../../models/theme';
import { EMode } from '../../../models/mode';

/**
 * Функция получения темы и мода пользователя.
 */
export const getUserState = (themeName = ETheme.DEFAULT, modeName = EMode.DOODLE) => {
  const userMode = sprites.find(item => item.name === modeName);

  return { theme: themes[themeName], mode: { sprite: userMode } };
};

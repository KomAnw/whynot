import { ThemeModel } from '../../../models/theme';

export const getUserTheme = async (id: number | string) => {
  const data = await ThemeModel.findOne({ where: { userId: Number(id) } });

  return data ? data.theme : null;
};

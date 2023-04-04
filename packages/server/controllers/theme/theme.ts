import type { Response } from 'express';
import { ThemeModel } from '../../models/theme';
import type { IRequestPostTheme, IRequestGetTheme } from '../type';

export const postTheme = async (req: IRequestPostTheme, res: Response) => {
  const { userId, theme, mode } = req.body;

  const data = await ThemeModel.create({ userId, theme, mode });

  res.status(200).send(data.dataValues);
};

export const getTheme = async (req: IRequestGetTheme, res: Response) => {
  const { id } = req.params;

  const data = await ThemeModel.findOne({ where: { userId: Number(id) } });

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
};

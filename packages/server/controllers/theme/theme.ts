import type { Response } from 'express';
import { ThemeModel } from '../../models/theme';
import type { IRequestPostTheme, IRequestGetTheme } from '../type';

export const postTheme = async (req: IRequestPostTheme, res: Response) => {
  const { userId, theme } = req.body;

  const user = await ThemeModel.findOne({ where: { userId } });

  if (user) {
    const data = await ThemeModel.update({ userId, theme }, { where: { userId } });

    res.status(200).send(data);
  } else {
    const data = await ThemeModel.create({ userId, theme });

    res.status(200).send(data.dataValues);
  }
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

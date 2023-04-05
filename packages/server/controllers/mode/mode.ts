import type { Response } from 'express';
import { ModeModel } from '../../models/mode';
import type { IRequestPostTheme, IRequestGetTheme } from '../type';

export const postMode = async (req: IRequestPostTheme, res: Response) => {
  const { userId, mode } = req.body;

  const data = await ModeModel.create({ userId, mode });

  res.status(200).send(data.dataValues);
};

export const putMode = async (req: IRequestPostTheme, res: Response) => {
  const { userId, mode } = req.body;

  const data = await ModeModel.update({ userId, mode }, { where: { userId } });

  res.status(200).send(data);
};

export const getMode = async (req: IRequestGetTheme, res: Response) => {
  const { id } = req.params;

  const data = await ModeModel.findOne({ where: { userId: Number(id) } });

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
};

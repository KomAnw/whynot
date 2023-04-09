import type { Response } from 'express';
import { ModeModel } from '../../models/mode';
import type { IRequestPostMode, IRequestGetMode } from '../type';

export const postMode = async (req: IRequestPostMode, res: Response) => {
  const { userId, mode } = req.body;

  const user = await ModeModel.findOne({ where: { userId } });

  if (user) {
    const data = await ModeModel.update({ userId, mode }, { where: { userId }, returning: true });

    if (data) {
      res.status(201).json({ message: 'Mode successfully changed' });
    }
  } else {
    const data = await ModeModel.create({ userId, mode });

    res.status(201).json({ mode: data.dataValues.mode });
  }
};

export const getMode = async (req: IRequestGetMode, res: Response) => {
  const { id } = req.params;

  const data = await ModeModel.findOne({ where: { userId: Number(id) } });

  if (data) {
    res.status(200).json({ mode: data.mode });
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
};

import type { Request, Response } from 'express';
import { PostModel } from '../../models/post';
import type { IRequestPostPost, IRequestGetPostById } from '../type';

export const postPost = async (req: IRequestPostPost, res: Response) => {
  const data = await PostModel.create({ ...req.body });

  res.status(201).send(data.dataValues);
};

export const getPosts = async (_req: Request, res: Response) => {
  const data = await PostModel.findAll();

  res.status(200).send(data);
};

export const getPostById = async (req: IRequestGetPostById, res: Response) => {
  const { id } = req.params;

  const data = await PostModel.findOne({ where: { id: Number(id) } });

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
};

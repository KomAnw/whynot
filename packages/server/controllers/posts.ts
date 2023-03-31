import type { Request, Response, NextFunction } from 'express';
import { PostModel } from '../models/post';
import type { requestPosts } from './type';

export const postPost = (req: requestPosts, res: Response, next: NextFunction) => {
  try {
    const { text, authorId, date } = req.body;

    PostModel.create({ text, authorId, date }).then(data => {
      res.status(201).send(data.dataValues);
    });
  } catch (e) {
    return next(e);
  }
};

export const getPosts = (_req: Request, res: Response, next: NextFunction) => {
  try {
    PostModel.findAll().then(data => {
      res.status(201).send(data);
    });
  } catch (e) {
    return next(e);
  }
};

import type { Response, NextFunction } from 'express';
import { PostModel } from '../models/post';
import type { requestPosts } from './type';

export const postPost = async (req: requestPosts, res: Response, next: NextFunction) => {
  const dateD = new Date();
  const { body } = req || {};

  if (body) {
    const { text, authorId, date = dateD } = body;

    PostModel.create({ text, authorId, date }).then(data => {
      // eslint-disable-next-line no-console
      console.log(88, data.dataValues);
      res.status(201).send(data.dataValues);
    });
  } else {
    next();
  }
};

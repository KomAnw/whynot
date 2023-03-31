import type { Request } from 'express';
import { PostModel } from '../models/post';

export const postPost = async (req: Request) => {
  // eslint-disable-next-line no-console
  console.log(11);
  const { text, authorId, date } = req.body;
  const answer = await PostModel.create({ text, authorId, date });

  // eslint-disable-next-line no-console
  console.log(88, answer);
};

import type { Request } from 'express';

type IPost = {
  text: string;
  authorId: number;
  date: Date;
};

export interface IRequestPostPost extends Request {
  body: IPost;
}

export interface IRequestGetPostById extends Request {
  params: { id: string };
}

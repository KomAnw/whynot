import type { Request } from 'express';

type IPost = {
  text: string;
  authorId: number;
  date: Date;
};

export interface requestPosts extends Request {
  body: IPost;
}

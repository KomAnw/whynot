import type { Request } from 'express';

type IMessage = {
  text: string;
  authorId: number;
  postId: number;
  date: Date;
  mainMessageId: number | null;
  emojis: number[][] | null;
};

export interface IRequestPostMessage extends Request {
  body: IMessage;
}

export interface IRequestGetAllMessageByIdPost extends Request {
  query: { postId: string };
}

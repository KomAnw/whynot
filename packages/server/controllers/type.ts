import type { Request } from 'express';
import type { EMode, ETheme } from '../models/theme';

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

type ITheme = {
  userId: number;
  theme: ETheme;
  mode: EMode;
};

export interface IRequestPostTheme extends Request {
  body: ITheme;
}

export interface IRequestGetTheme extends Request {
  params: { id: string };
}

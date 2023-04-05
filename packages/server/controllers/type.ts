import type { Request } from 'express';
import type { ETheme } from '../models/theme';
import type { EMode } from '../models/mode';
import type { Message } from '../models/message';
import type { Post } from '../models/post';

export interface IRequestPostMessage extends Request {
  body: Message;
}

export interface IRequestGetAllMessageByIdPost extends Request {
  query: { postId: string };
}
export interface IRequestPostPost extends Request {
  body: Post;
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

import type { Request } from 'express';
import type { EMode, ETheme } from '../models/theme';
import type { Message } from '../models/message';
import type { Post } from '../models/post';

export interface IRequestPostMessage extends Request {
  body: Message;
}

export type TEmoji = {
  id: number;
  authorId: number[];
};
export interface IRequestPostMessageEmoji extends Request {
  body: {
    postId: string;
    messageId: string;
    emojiId: string;
    authorId: string;
  };
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

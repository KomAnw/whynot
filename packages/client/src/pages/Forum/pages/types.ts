import type { TMessage } from 'src/api/forum/messages/models';

export type TAuthor = {
  id: number;
  firstName: string;
  secondName: string;
};

export type TPost = {
  id: number;
  date: string;
  author: TAuthor;
  title: string;
};

export type THandleAddEmoji = { messageId: number; authorId: number; emojiId: number };
export type TMainMessage = { id: number; login: string };

export type TMessageProps = TMessage & {
  addEmoji: (value: THandleAddEmoji) => void;
  addMainMessage: (value: TMainMessage) => void;
};

export type TMenuEmojis = {
  setIsOpenMenuEmojis: (value: boolean) => void;
  addEmoji: (value: THandleAddEmoji) => void;
  messageId: number;
  authorId: number;
};

export type TInputMessage = {
  inputMessage: string;
};

export type TMessageInputProps = {
  mainMessage: TMainMessage;
  resetMainMessage: () => void;
};

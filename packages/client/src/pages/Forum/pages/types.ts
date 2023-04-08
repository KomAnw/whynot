import type { TMessageWithID } from 'src/api/forum/messages/models';

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
type TAddEmoji = (value: THandleAddEmoji) => void;
export type TMainMessage = { id: number; login: string };
type TAddMainMessage = (value: TMainMessage) => void;

export type TMessageProps = TMessageWithID & {
  addEmoji: TAddEmoji;
  addMainMessage: TAddMainMessage;
};

export type TMenuEmojis = {
  setIsOpenMenuEmojis: (value: boolean) => void;
  addEmoji: TAddEmoji;
  messageId: number;
  authorId: number;
};

export type TInputMessage = {
  inputMessage: string;
};

export type TMessageInputProps = {
  refreshPage: (value: void) => void;
  mainMessage: TMainMessage;
  resetMainMessage: (value: void) => void;
};

export type TAuthor = {
  id: number;
  firstName: string;
  secondName: string;
};

export type TEmoji = {
  id: number;
  authorId: number[];
};

export type TMessage = {
  id: number;
  date: string;
  author: TAuthor;
  messageMainId: number;
  emojis: TEmoji[];
  text: string;
};

export type TPost = {
  id: number;
  date: string;
  author: TAuthor;
  title: string;
};

export type TMenuEmojis = {
  setIsOpenMenuEmojis: (value: boolean) => void;
};

import React from 'react';

export type TAuthor = {
  id: number;
  first_name: string;
  second_name: string;
};

export type TEmoji = {
  id: number;
  author_id: number[];
};

export type TMessage = {
  id: number;
  data: string;
  author: TAuthor;
  message_main_id: number;
  emojis: TEmoji[];
  text: string;
};

export type TPost = {
  id: number;
  data: string;
  author: TAuthor;
  title: string;
};

export type TMenuEmojis = {
  isOpenMenuEmojis: boolean;
  setIsOpenMenuEmojis: React.Dispatch<React.SetStateAction<boolean>>;
};

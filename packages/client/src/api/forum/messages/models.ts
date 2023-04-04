export type TMessage = {
  id?: number;
  text: string;
  authorId: number;
  login: string;
  postId: number;
  date: Date;
  mainMessageId: number | null;
  emojis: number[][] | null;
};

export type TGetMessagesByPostIdResponse = TMessage[];

export type TPostMessageRequest = TMessage;

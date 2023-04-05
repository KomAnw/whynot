export type TMessage = {
  id?: number;
  text: string;
  authorId: number;
  login: string;
  postId: number;
  date: Date;
  mainMessageId: number;
  emojis: JSON[];
};

export type TGetMessagesByPostIdResponse = TMessage[];

export type TPostMessageRequest = TMessage;

export type TPostEmojiRequest = {
  postId: string;
  messageId: string;
  emojiId: string;
  authorId: string;
}

import type { Response } from 'express';
import type { IRequestGetAllMessageByIdPost, IRequestPostMessage, IRequestPostMessageEmoji } from '../type';
import { MessageModel } from '../../models/message';
import { sortMessage } from '../utils/sortMessages';

export const postMessage = async (req: IRequestPostMessage, res: Response) => {
  const data = await MessageModel.create({ ...req.body });

  res.status(201).send(data.dataValues);
};

export const postMessageEmoji = async (req: IRequestPostMessageEmoji, res: Response) => {
  const { messageId, emojiId, authorId } = req.body;
  const message = await MessageModel.findOne({ where: { id: Number(messageId) } });

  res.status(200).send(message);
  console.log(message, messageId, emojiId, authorId);
};

export const getMessages = async (req: IRequestGetAllMessageByIdPost, res: Response) => {
  const { postId } = req.query;

  const data = await MessageModel.findAll({ where: { postId: Number(postId) }, raw: true });

  if (data && data.length) {
    res.status(200).send(sortMessage(data));
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
};

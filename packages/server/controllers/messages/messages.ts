import type { Response } from 'express';
import type { IRequestGetAllMessageByIdPost, IRequestPostMessage, IRequestPostMessageEmoji, TEmoji } from '../type';
import { MessageModel } from '../../models/message';
import { sortMessage } from '../utils/sortMessages';

export const postMessage = async (req: IRequestPostMessage, res: Response) => {
  const data = await MessageModel.create({ ...req.body });

  res.status(201).send(data.dataValues);
};

export const postMessageEmoji = async (req: IRequestPostMessageEmoji, res: Response) => {
  const postId = Number(req.body.postId);
  const messageId = Number(req.body.messageId);
  const emojiId = Number(req.body.emojiId);
  const authorId = Number(req.body.authorId);

  const message = await MessageModel.findOne({ where: { id: messageId } });

  if (message) {
    const emojis = (message.emojis.length
      ? message.emojis
      : [{ id: emojiId, authorId: [authorId] }]) as unknown as TEmoji[];

    if (emojis) {
      const emojiIndex = emojis.findIndex((item: TEmoji) => item.id === emojiId);

      emojiIndex !== -1
        ? !emojis[emojiIndex].authorId.includes(authorId) && emojis[emojiIndex].authorId.push(authorId)
        : emojis.push({ id: emojiId, authorId: [authorId] });
    }

    await MessageModel.update({ emojis: emojis as unknown as JSON[] }, { where: { id: messageId } });

    const data = await MessageModel.findAll({ where: { id: Number(postId) }, raw: true });

    res.status(200).send(data);
  } else {
    res.status(404).json({ message: 'Not Found' });
  }
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

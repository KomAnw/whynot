import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { getMessages, postMessage, postMessageEmoji } from '../../controllers/messages';

export const router = Router();

router.post(
  '/emoji',
  celebrate({
    body: Joi.object().keys({
      postId: Joi.number().required(),
      messageId: Joi.number().required(),
      emojiId: Joi.number().required(),
      authorId: Joi.number().required(),
    }),
  }),
  postMessageEmoji
);

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      text: Joi.string().required().min(1),
      authorId: Joi.number().required(),
      postId: Joi.number().required(),
      login: Joi.string().required(),
      date: Joi.date().required(),
      mainMessageId: Joi.number().required(),
      emojis: Joi.array().required(),
    }),
  }),
  postMessage
);

router.get(
  '/',
  celebrate({
    query: Joi.object().keys({
      postId: Joi.string().required(),
    }),
  }),
  getMessages
);

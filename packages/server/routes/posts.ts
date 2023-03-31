import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { getPosts, postPost } from '../controllers/posts';

export const router = Router();

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      text: Joi.string().required().min(1),
      authorId: Joi.number().required(),
      date: Joi.date(),
    }),
  }),
  postPost
);

router.get('/', getPosts);

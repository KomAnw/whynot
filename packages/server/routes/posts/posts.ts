import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { getPosts, postPost, getPostById } from '../../controllers/posts';

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

router.get(
  '/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  getPostById
);

router.get('/', getPosts);

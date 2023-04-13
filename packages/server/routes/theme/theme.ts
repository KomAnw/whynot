import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { getTheme, postTheme } from '../../controllers/theme/theme';

export const router = Router();

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      userId: Joi.number().required(),
      theme: Joi.string(),
    }),
  }),
  postTheme
);

router.get(
  '/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  getTheme
);

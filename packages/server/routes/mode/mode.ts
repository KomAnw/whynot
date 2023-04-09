import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import { getMode, postMode } from '../../controllers/mode/mode';

export const router = Router();

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      userId: Joi.number().required(),
      mode: Joi.string(),
    }),
  }),
  postMode
);

router.get(
  '/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  getMode
);

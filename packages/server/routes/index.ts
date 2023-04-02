import { Router } from 'express';
import { routerMessage } from './messages';
import errorBadRequest from '../middlewares/error';

export const routerApi = Router();

routerApi.use('/messages', routerMessage);

routerApi.use('/', errorBadRequest);

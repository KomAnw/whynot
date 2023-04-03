import { Router } from 'express';
import { routerMessage } from './messages';
import { notFoundMiddleware } from '../middlewares';

export const routerApi = Router();

routerApi.use('/messages', routerMessage);

routerApi.use('/', notFoundMiddleware);

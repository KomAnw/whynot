import { Router } from 'express';
import { routerMessage } from './messages';
import { routerPost } from './posts';
import { notFoundMiddleware } from '../middlewares';
import { routerTheme } from './theme';

export const routerApi = Router();

routerApi.use('/messages', routerMessage);

routerApi.use('/posts', routerPost);

routerApi.use('/theme', routerTheme);

routerApi.use('/', notFoundMiddleware);

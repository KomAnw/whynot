import { Router } from 'express';
import { routerMessage } from './messages';
import { routerPost } from './posts';
import { notFoundMiddleware } from '../middlewares';
import { routerTheme } from './theme';
import { routerMode } from './mode';

export const routerApi = Router();

routerApi.use('/messages', routerMessage);

routerApi.use('/posts', routerPost);

routerApi.use('/theme', routerTheme);

routerApi.use('/mode', routerMode);

routerApi.use('/', notFoundMiddleware);

import { Router } from 'express';
import { routerPost } from './posts';
import notFoundMiddleware from '../middlewares/notFoundMiddleware';

export const routerApi = Router();

routerApi.use('/posts', routerPost);

routerApi.use('/', notFoundMiddleware);
import { Router } from 'express';
import { routerPost } from './posts';
import notFoundMiddleware from '../middlewares/error';

export const routerApi = Router();

routerApi.use('/posts', routerPost);

routerApi.use('/', notFoundMiddleware);

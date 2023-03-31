import { Router } from 'express';
import { router as routerPosts } from './posts';
import errorBadRequest from '../middlewares/error';

export const routerApi = Router();

routerApi.use('/posts', routerPosts);

routerApi.use('/', errorBadRequest);

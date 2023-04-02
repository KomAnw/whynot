import { Router } from 'express';
import { routerPost } from './posts';
import errorBadRequest from '../middlewares/error';

export const routerApi = Router();

routerApi.use('/posts', routerPost);

routerApi.use('/', errorBadRequest);

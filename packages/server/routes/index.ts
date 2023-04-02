import { Router } from 'express';
import { routerTheme } from './theme';

export const routerApi = Router();

routerApi.use('/theme', routerTheme);

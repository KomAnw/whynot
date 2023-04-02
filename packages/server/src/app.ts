import express from 'express';
import { errors } from 'celebrate';
import { connectPostgresDB } from '../database/postgres';
import { routerApi } from '../routes';
import { cors, cookieParser, proxy, bodyParserMiddleware } from '../middlewares';

const middlewares = [cors, cookieParser, bodyParserMiddleware];

const app = express();

app.use(middlewares);
app.use('/api/v2', proxy);

connectPostgresDB();

export const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
export const isProductionMode = process.argv.includes('--NODE_ENV=production');
export const PORT = Number(process.env.SERVER_PORT) || 3001;

app.use('/api', routerApi);
app.use(errors());

export default app;

import express from 'express';
import * as dotenv from 'dotenv';
import { cors, cookieParser, proxy, helmet, rateLimit, bodyParserMiddleware, errorCelebrate } from '../middlewares';
import { findFile } from '../utils/findFile';
import { routerApi } from '../routes';
import { connectPostgresDB } from '../database/postgres';

const middlewares = [cors, cookieParser, helmet, rateLimit, bodyParserMiddleware];

dotenv.config({ path: findFile('.env') });

const { SERVER_PORT } = process.env;

const app = express();

app.use(middlewares);

app.use('/api/v2/*', proxy);

connectPostgresDB();

export const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
export const isProductionMode = process.argv.includes('--NODE_ENV=production');
export const PORT = Number(SERVER_PORT) || 3001;

app.use('/api', routerApi);
app.use(errorCelebrate);

export default app;

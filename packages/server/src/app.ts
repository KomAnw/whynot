import express from 'express';
import * as dotenv from 'dotenv';
import { cors, cookieParser, proxy, helmet, rateLimit } from '../middlewares';
import { findFile } from '../utils/findFile';

const middlewares = [cors, cookieParser, helmet, rateLimit];

dotenv.config({ path: findFile('.env') });

const { SERVER_PORT } = process.env;

const app = express();

app.use(middlewares);

app.use('/api/v2/*', proxy);

// connectPostgresDB();

export const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
export const isProductionMode = process.argv.includes('--NODE_ENV=production');
export const PORT = Number(SERVER_PORT) || 3001;

export default app;

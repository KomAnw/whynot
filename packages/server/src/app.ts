import express from 'express';
import * as dotenv from 'dotenv';
import { cors, cookieParser, proxy, helmet, rateLimit, bodyParserMiddleware, errorCelebrate } from '../middlewares';
import { routerApi } from '../routes';
import { connectPostgresDB } from '../database/postgres';

const middlewares = [cors, cookieParser, helmet, rateLimit];

dotenv.config({ path: '../../../.env' });

const { SERVER_PORT, IS_DOCKER_BUILD } = process.env;

const app = express();

app.use(middlewares);

app.use('/api/v2/*', proxy);

connectPostgresDB();

export const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
export const isProductionMode = process.argv.includes('--NODE_ENV=production');
export const isDockerBuild = Boolean(IS_DOCKER_BUILD);
export const PORT = Number(SERVER_PORT) || 3000;

app.use(bodyParserMiddleware);
app.use('/api', routerApi);
app.use(errorCelebrate);

export default app;

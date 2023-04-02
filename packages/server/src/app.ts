import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import { connectPostgresDB } from '../database/postgres';
import { routerApi } from '../routes';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(
  '/api/v2',
  createProxyMiddleware({
    changeOrigin: true,
    target: 'https://ya-praktikum.tech',
    cookieDomainRewrite: {
      '*': '',
    },
  })
);

connectPostgresDB();

export const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
export const isProductionMode = process.argv.includes('--NODE_ENV=production');
export const PORT = Number(process.env.SERVER_PORT) || 3001;

app.use(bodyParser.json());
app.use('/api', routerApi);
app.use(errors());

export default app;

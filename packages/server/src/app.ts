import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { connectPostgresDB } from '../database/postgres';
import { router as routerPosts } from '../routes/posts';

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

app.use('/posts', routerPosts);

export default app;

import type { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';
import corsMiddleware from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import bodyParser from 'body-parser';

const cookieParser: RequestHandler = cookieParserMiddleware();

const proxy = createProxyMiddleware({
  changeOrigin: true,
  target: 'https://ya-praktikum.tech',
  cookieDomainRewrite: {
    '*': '',
  },
});

const cors = corsMiddleware();

const bodyParserMiddleware = bodyParser.json();

export { cookieParser, proxy, cors, bodyParserMiddleware };

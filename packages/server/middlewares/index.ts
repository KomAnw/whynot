import type { NextFunction, Request, RequestHandler, Response } from 'express';
import cookieParserMiddleware from 'cookie-parser';
import rateLimitMiddleware from 'express-rate-limit';
import helmetMiddleware from 'helmet';
import corsMiddleware from 'cors';
import * as crypto from 'crypto';
import { createProxyMiddleware } from 'http-proxy-middleware';

const cookieParser: RequestHandler = cookieParserMiddleware();

const proxy = createProxyMiddleware({
  changeOrigin: true,
  target: 'https://ya-praktikum.tech',
  cookieDomainRewrite: {
    '*': '',
  },
});

const cors = corsMiddleware();

const auth = ({ cookies }: Request, res: Response, next: NextFunction) => {
  const { authCookie, uuid } = cookies;

  if (!authCookie || !uuid) {
    res.status(401).json({ message: 'Unauthorized user' });
  } else {
    next();
  }
};

const rateLimit = rateLimitMiddleware({
  windowMs: 15 * 60 * 10000,
  max: 20000,
});

export const nonce = crypto.randomBytes(16).toString('base64');

const helmet = helmetMiddleware({
  contentSecurityPolicy: {
    directives: {
      scriptSrc: ["'self'", `'nonce-${nonce}'`],
      connectSrc: ["'self'", 'ws://localhost:*'],
    },
  },
});

export { cookieParser, proxy, cors, auth, rateLimit, helmet };

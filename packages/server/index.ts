import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { createServer as createViteServer, type ViteDevServer } from 'vite';
import https from 'https';
import path, { join, resolve } from 'path';
import { readFileSync } from 'node:fs';
import { productionConfig } from './configs/production';
import { developmentConfig } from './configs/development';

// import { createClientAndConnect } from './db';

// createClientAndConnect();
dotenv.config();

let vite: ViteDevServer | undefined;
const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
const nodeModulesPath = resolve(__dirname, '..', 'node_modules');
const clientPath = join(nodeModulesPath, 'client');
const distPath = join(clientPath, 'dist');
const ssrClientPath = join(clientPath, 'dist-ssr', 'client.cjs');
const context = {
  dev: {
    vite,
    clientPath,
  },
  prod: {
    distPath,
    ssrClientPath,
  },
};

const startServer = async () => {
  const app = express();
  const port = Number(process.env.SERVER_PORT) || 3001;
  const key = readFileSync(path.join(__dirname, './public/key.pem'), 'utf8');
  const cert = readFileSync(path.join(__dirname, './public/cert.pem'), 'utf8');

  app.use(cors());

  if (isDevelopmentMode) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: clientPath,
      appType: 'custom',
    });
    context.dev.vite = vite;
    app.use(vite.middlewares);
  }

  !isDevelopmentMode && app.use(express.static(distPath));

  app.use('*', async ({ originalUrl }, res, next) => {
    try {
      const { appHtml, css, template } = isDevelopmentMode
        ? await developmentConfig(context.dev, originalUrl)
        : await productionConfig(context.prod);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml).replace(`</head>`, `${css}</head>`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      isDevelopmentMode && vite!.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  if (isDevelopmentMode) {
    https.createServer({ key, cert }, app).listen(port, '127.0.0.1', () => {
      console.info(`https://localhost:${port}`);
    });
  } else {
    app.listen(port, () => {
      console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
    });
  }
};

startServer();

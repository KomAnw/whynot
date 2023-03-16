import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { createServer as createViteServer, type ViteDevServer } from 'vite';

// import { createClientAndConnect } from './db';

// createClientAndConnect();
dotenv.config();

let vite: ViteDevServer | undefined;
const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
const distPath = dirname(require.resolve('client/dist/index.html'));
const srcPath = dirname(require.resolve('client'));
const ssrClientPath = require.resolve('client/dist-ssr/client.cjs');

const productionConfig = async (): Promise<[string, Function]> => {
  const template = readFileSync(resolve(distPath, 'index.html'), 'utf-8');

  const { render } = await import(ssrClientPath);

  return [template, render];
};

const developmentConfig = async (originalUrl: string): Promise<[string, Function]> => {
  let template: string;

  template = readFileSync(resolve(srcPath, 'index.html'), 'utf-8');
  template = await vite!.transformIndexHtml(originalUrl, template);

  const { render } = await vite!.ssrLoadModule(resolve(srcPath, 'ssr.tsx'));

  return [template, render];
};

const startServer = async () => {
  const app = express();
  const port = Number(process.env.SERVER_PORT) || 3001;

  app.use(cors());

  if (isDevelopmentMode) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite.middlewares);
  }

  isDevelopmentMode && app.use('/assets', express.static(resolve(distPath, 'assets')));

  app.use('*', async ({ originalUrl }, res, next) => {
    try {
      const [template, render] = isDevelopmentMode ? await developmentConfig(originalUrl) : await productionConfig();

      const appHtml = await render();

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      isDevelopmentMode && vite!.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
};

startServer();

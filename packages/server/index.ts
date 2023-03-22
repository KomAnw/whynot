import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { join, resolve } from 'path';
import { createServer as createViteServer, type ViteDevServer } from 'vite';
import path from 'path';
import type { Store } from 'client/src/store/store';
import { developmentConfig } from './configs/development';
import { productionConfig } from './configs/production';
import { preloadedState } from './preloaded-state';

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

  let ssrModule;

  /**
   * Загрузка createStore из ssr.tsx в зависимости от режима: development или production.
   *
   * Режим DevelopmentMode:
   *   Загрузка с помощью vite.
   *   - ssrLoadModule автоматически преобразует исходный код ESM для использования в Node.js!.
   *   Модули ECMAScript (ESM) — это спецификация для использования модулей в Интернете.
   *
   * Режим ProductionMode:
   *    Импорт напряму из dist-ssr.
   */
  if (isDevelopmentMode) {
    ssrModule = await vite!.ssrLoadModule(path.resolve(clientPath, 'ssr.tsx') as string);
  } else {
    ssrModule = await import(ssrClientPath);
  }
  const { createStore } = ssrModule;

  const store: Store = createStore(preloadedState);

  !isDevelopmentMode && app.use(express.static(distPath));

  app.use('*', async ({ originalUrl }, res, next) => {
    try {
      const { appHtml, css, template } = isDevelopmentMode
        ? await developmentConfig(context.dev, originalUrl, store)
        : await productionConfig(context.prod, store);

      const stateMarkup = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}</script>`;

      const html = template.replace(`<!--ssr-outlet-->`, stateMarkup + appHtml).replace(`</head>`, `${css}</head>`);

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

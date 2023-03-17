import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { dirname, resolve } from 'path';
import { createServer as createViteServer, type ViteDevServer } from 'vite';
import { developmentConfig } from './configs/development';
import { productionConfig } from './configs/production';

// import { createClientAndConnect } from './db';

// createClientAndConnect();
dotenv.config();

let vite: ViteDevServer | undefined;
const isDevelopmentMode = process.argv.includes('--NODE_ENV=development');
const distPath = dirname(require.resolve('client/dist/index.html'));
const srcPath = dirname(require.resolve('client'));
const ssrClientPath = require.resolve('client/dist-ssr/client.cjs');
const context = {
  dev: {
    vite,
    srcPath,
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
      root: srcPath,
      appType: 'custom',
    });
    context.dev.vite = vite;
    app.use(vite.middlewares);
  }

  !isDevelopmentMode && app.use('/assets', express.static(resolve(distPath, 'assets')));

  app.use('*', async ({ originalUrl }, res, next) => {
    try {
      const { appHtml, css, template } = isDevelopmentMode
        ? await developmentConfig(context.dev, originalUrl)
        : await productionConfig(context.prod);

      const styleTag = `<style id="styles">${css}</style>`;
      const html = template.replace(`<!--ssr-outlet-->`, appHtml).replace(`</head>`, `${styleTag}</head>`);

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

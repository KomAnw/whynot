import { join } from 'path';
import { createServer as createViteServer, type ViteDevServer } from 'vite';
import app, { isDevelopmentMode } from '../app';
import { developmentConfig } from './configs/development';
import { productionConfig } from './configs/production';
import { state } from './state';
import { nonce } from '../../middlewares';

let vite: ViteDevServer | undefined;
const nodeModulesPath = join(__dirname, '../../../', 'node_modules');
const clientPath = join(nodeModulesPath, 'client');

export const startSSR = async () => {
  if (isDevelopmentMode) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: clientPath,
      appType: 'custom',
    });

    app.use(vite!.middlewares);
  }

  app.use('*', async ({ originalUrl }, res, next) => {
    globalThis.__PRELOADED_STATE__ = state;

    try {
      const { appHtml, css, template } = isDevelopmentMode
        ? await developmentConfig(originalUrl, vite!)
        : await productionConfig(originalUrl);

      const stateMarkup = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)}</script>`;
      const scriptWithNonce = `<script nonce="${nonce}"`;

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--styles-->`, css)
        .replace('<!--preloadedState-->', stateMarkup)
        .replace(/<script/g, scriptWithNonce);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      isDevelopmentMode && vite!.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
};

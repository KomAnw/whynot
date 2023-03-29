import { join } from 'path';
import { createServer as createViteServer, type ViteDevServer } from 'vite';
import app, { isDevelopmentMode } from '../app';
import { developmentConfig } from './configs/development';
import { productionConfig } from './configs/production';
import { state } from './state';

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

  app.use('*', async ({ originalUrl, cookies }, res, next) => {
    // Надо обсудить
    const getUser = await fetch('http://localhost:3001/api/v2/auth/user', {
      credentials: 'include',
      headers: {
        Cookie: `authCookie=${cookies.authCookie}; uuid=${cookies.uuid}`,
      },
    });
    const user = await getUser.json();

    globalThis.__PRELOADED_STATE__ = user?.id ? { ...state } : state;

    try {
      const { appHtml, css, template } = isDevelopmentMode
        ? await developmentConfig(originalUrl, vite!)
        : await productionConfig(originalUrl);

      const stateMarkup = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(state)}</script>`;
      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--styles-->`, css)
        .replace('<!--preloadedState-->', stateMarkup);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      isDevelopmentMode && vite!.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
};

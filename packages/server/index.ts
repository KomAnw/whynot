import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { join, resolve } from 'path';
import { createServer as createViteServer, type ViteDevServer } from 'vite';
import path from 'path';
import { developmentConfig } from './configs/development';
import { productionConfig } from './configs/production';
import type { Store } from 'client/src/store/store';
// import { themes } from 'client/src/components/App/constants';

// import type { Theme } from 'client/src/hoc/ThemeWrapper/types';

export const themes = {
  default: {
    name: 'default',
    colors: {
      core: {
        borderMenu: 'transparent',
        background: {
          primary: '#D9D9D9',
          secondary: '#5BCDC9',
          tertiary: '#F2CE0D',
        },
        text: {
          primary: '#6C5BC3',
          secondary: '#FFFFFF',
          error: '#FF0000',
          tertiary: '#6B687D',
          quaternary: '#000000',
          quinary: '#000000',
        },
        link: {
          link: '#6457B8',
          linkHover: '#6457b8b3',
        },
        spinner: '#F2CE0D',
        divider: '#C8C8C8',
      },
      control: {
        input: {
          color: '#000000',
          background: '#ABCDCE',
          label: '#6C5BC3',
          placeHolder: '#6B687D',
        },
        toggle: {
          control: '#FFFFFF',
          backgroundPrimary: '#6BD35A',
          backgroundSecondary: '#F2CE0D',
        },
        button: {
          primary: {
            color: '#FFFFFF',
            background: '#6C5BC3',
            hoverBackground: 'rgba(108, 91, 195, 0.8)',
          },
          secondary: {
            color: '#FFFFFF',
            background: '#6BD35A',
            hoverBackground: 'rgba(107, 211, 90, 0.5)',
          },
        },
      },
    },
    fonts: {
      main: 'Handjet',
    },
  },
  other: {
    name: 'other',
    colors: {
      core: {
        borderMenu: '#68B4D1',
        background: {
          primary: '#6C5BC3',
          secondary: '#C1CDF7',
          tertiary: '#F2CE0D',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#FFFFFF',
          error: '#FFD600',
          tertiary: '#5BCDC9',
          quaternary: '#6BD35A',
          quinary: '#FFFFFF',
        },
        link: {
          link: '#FFFFFF',
          linkHover: 'rgba(255, 255, 255, 0.8)',
        },
        spinner: '#F2CE0D',
        divider: '#C8C8C8',
      },
      control: {
        input: {
          color: '#6C5BC3',
          background: '#FFFFFF',
          label: '#6C5BC3',
          placeHolder: '#FFFFFF',
        },
        toggle: {
          control: '#FFFFFF',
          backgroundPrimary: '#6BD35A',
          backgroundSecondary: '#F2CE0D',
        },
        button: {
          primary: {
            color: '#FFFFFF',
            background: '#68B4D1',
            hoverBackground: 'rgba(108, 91, 195, 0.8)',
          },
          secondary: {
            color: '#FFFFFF',
            background: '#F2CE0D',
            hoverBackground: 'rgba(107, 211, 90, 0.8)',
          },
        },
      },
    },
    fonts: {
      main: 'Handjet',
    },
  },
} as const;

export const sprites = [
  {
    name: 'Doodle',
    sprite: '/images/game/doodle/sprite.png',
    background: '/images/game/doodle/background.png',
  },
  {
    name: 'Mario',
    sprite: '/images/game/mario/sprite.png',
    background: '/images/game/mario/background.png',
  },
  {
    name: 'Homer',
    sprite: '/images/game/homer/sprite.png',
    background: '/images/game/homer/background.png',
  },
] as const;

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

  // todo: доделать для production
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

  // todo: переделать

  // Тема по умолчанию
  const { other: defaultTheme } = themes;
  const initialState = defaultTheme;
  const preloadedState = { theme: initialState, mode: { sprite: sprites[2] } };

  console.log(preloadedState);

  const store: Store = createStore(preloadedState);

  !isDevelopmentMode && app.use(express.static(distPath));

  app.use('*', async ({ originalUrl }, res, next) => {
    try {
      const { appHtml, css, template } = isDevelopmentMode
        ? await developmentConfig(context.dev, originalUrl, store)
        : await productionConfig(context.prod, store);

      const stateMarkup = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}</script>`

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

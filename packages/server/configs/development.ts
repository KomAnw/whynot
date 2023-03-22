import { readFileSync } from 'fs';
import { join, resolve } from 'path';
import type { ViteDevServer } from 'vite';
import type { Store } from 'client/src/store/store';

type DevelopmentConfigContext = {
  vite: ViteDevServer | undefined;
  clientPath: string;
};

export const developmentConfig = async (
  { clientPath, vite }: DevelopmentConfigContext,
  originalUrl: string,
  store: Store
) => {
  let template: string;
  const htmlPath = join(clientPath, 'index.html');

  template = readFileSync(htmlPath, 'utf-8');
  template = await vite!.transformIndexHtml(originalUrl, template);

  const { render } = await vite!.ssrLoadModule(resolve(clientPath, 'ssr.tsx'));
  const { html: appHtml, css } = await render(store);

  return {
    appHtml,
    css,
    template,
  };
};

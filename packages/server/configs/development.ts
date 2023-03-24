import { readFileSync } from 'fs';
import { join, resolve } from 'path';
import type { ViteDevServer } from 'vite';

type DevelopmentConfigContext = {
  vite: ViteDevServer | undefined;
  clientPath: string;
};

export const developmentConfig = async ({ clientPath, vite }: DevelopmentConfigContext, originalUrl: string) => {
  let template: string;
  const htmlPath = join(clientPath, 'index.html');

  template = readFileSync(htmlPath, 'utf-8');
  template = await vite!.transformIndexHtml(originalUrl, template);

  const { render } = await vite!.ssrLoadModule(resolve(clientPath, 'ssr.tsx'));
  const { html: appHtml, css } = await render(originalUrl);

  return {
    appHtml,
    css,
    template,
  };
};

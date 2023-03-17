import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { ViteDevServer } from 'vite';

type DevelopmentConfigContext = {
  vite: ViteDevServer | undefined;
  srcPath: string;
};

export const developmentConfig = async ({ srcPath, vite }: DevelopmentConfigContext, originalUrl: string) => {
  let template: string;

  template = readFileSync(resolve(srcPath, 'index.html'), 'utf-8');
  template = await vite!.transformIndexHtml(originalUrl, template);

  const { render } = await vite!.ssrLoadModule(resolve(srcPath, 'ssr.tsx'));
  const { html: appHtml, css } = await render();

  return {
    appHtml,
    css,
    template,
  };
};

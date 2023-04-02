import { readFileSync } from 'fs';
import { join, resolve } from 'path';
import type { ViteDevServer } from 'vite';

const nodeModulesPath = join(__dirname, '../../../../', 'node_modules');
const clientPath = join(nodeModulesPath, 'client');
const htmlPath = join(clientPath, 'index.html');

export const developmentConfig = async (originalUrl: string, vite: ViteDevServer) => {
  const htmlFile = readFileSync(htmlPath, 'utf-8');
  const template = await vite.transformIndexHtml(originalUrl, htmlFile);
  const { render } = await vite.ssrLoadModule(resolve(clientPath, 'src/ssr.tsx'));
  const { html: appHtml, css } = await render(originalUrl);

  return {
    appHtml,
    css,
    template,
  };
};

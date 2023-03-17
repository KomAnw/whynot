import { readFileSync } from 'fs';
import { resolve } from 'path';

type ProductionConfigContext = {
  distPath: string;
  ssrClientPath: string;
};

export const productionConfig = async ({ distPath, ssrClientPath }: ProductionConfigContext) => {
  const template = readFileSync(resolve(distPath, 'index.html'), 'utf-8');
  const { render } = await import(ssrClientPath);
  const { html: appHtml, css } = await render();

  return {
    appHtml,
    css,
    template,
  };
};

import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { Store } from 'client/src/store/store';

type ProductionConfigContext = {
  distPath: string;
  ssrClientPath: string;
};

export const productionConfig = async ({ distPath, ssrClientPath }: ProductionConfigContext, store: Store) => {
  const template = readFileSync(resolve(distPath, 'index.html'), 'utf-8');
  const { render } = await import(ssrClientPath);
  const { html: appHtml, css } = await render(store);

  return {
    appHtml,
    css,
    template,
  };
};

import express from 'express';
import { readFileSync } from 'fs';
import { join, resolve } from 'path';
import app, { isProductionMode, isDockerBuild } from '../../app';

const nodeModulesPath = join(__dirname, '../../../../', 'node_modules');
const clientPath = join(nodeModulesPath, 'client');
const distPath = isDockerBuild ? join(__dirname, '../../../../', 'client-dist') : join(clientPath, 'dist');
const ssrClientPath = isDockerBuild
  ? join(__dirname, '../../../../', 'dist-ssr')
  : join(clientPath, 'dist-ssr', 'client.cjs');

isProductionMode && app.use(express.static(distPath));

export const productionConfig = async (originalUrl: string) => {
  const template = readFileSync(resolve(distPath, 'index.html'), 'utf-8');
  const { render } = await import(ssrClientPath);
  const { html: appHtml, css } = await render(originalUrl);

  return {
    appHtml,
    css,
    template,
  };
};

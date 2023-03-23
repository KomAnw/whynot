import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import App from './src/components/App/App';
import ErrorBoundary from './src/hoc/ErrorBoundary';
import ThemeWrapper from './src/hoc/ThemeWrapper/ThemeWrapper';
import store from './src/store';

export function render(url: string) {
  const sheet = new ServerStyleSheet();

  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <ThemeWrapper>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </ThemeWrapper>
        </StaticRouter>
      </Provider>
    </StyleSheetManager>
  );
  const css = sheet.getStyleTags();

  sheet.seal();

  return { html, css };
}

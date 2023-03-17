import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import App from './src/components/App/App';
import ErrorBoundary from './src/hoc/ErrorBoundary';
import ThemeWrapper from './src/hoc/ThemeWrapper/ThemeWrapper';
import store from './src/store';

export function render() {
  const sheet = new ServerStyleSheet();

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location="/">
        <ThemeWrapper>
          <ErrorBoundary>
            <StyleSheetManager sheet={sheet.instance}>
              <App />
            </StyleSheetManager>
          </ErrorBoundary>
        </ThemeWrapper>
      </StaticRouter>
    </Provider>
  );
  const css = sheet.getStyleTags();

  return { html, css };
}

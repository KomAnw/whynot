import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import App from './src/components/App/App';
import ErrorBoundary from './src/hoc/ErrorBoundary';
import ThemeWrapper from './src/hoc/ThemeWrapper/ThemeWrapper';
import store from './src/store';

export function render() {
  return renderToString(
    <Provider store={store}>
      <StaticRouter location="/">
        <ThemeWrapper>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeWrapper>
      </StaticRouter>
    </Provider>
  );
}

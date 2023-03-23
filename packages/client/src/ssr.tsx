import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import App from 'components/App/App';
import ErrorBoundary from './hoc/ErrorBoundary';
import ThemeWrapper from './hoc/ThemeWrapper/ThemeWrapper';
import createStore from './store';

export { createStore };

export function render(store) {
  const sheet = new ServerStyleSheet();

  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <StaticRouter location="/">
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

  return { html, css };
}

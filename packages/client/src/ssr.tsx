import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import App from 'components/App/App';
import { Normalize } from 'styled-normalize';
import ErrorBoundary from './hoc/ErrorBoundary';
import ThemeWrapper from './hoc/ThemeWrapper/ThemeWrapper';
import store from './store';
import { GlobalStyles } from './components/App/GlobalStyles';

export function render(url: string) {
  const sheet = new ServerStyleSheet();

  const AppNode = () => (
    <>
      <Normalize />
      <GlobalStyles />
      <Provider store={store}>
        <StaticRouter location={url}>
          <ThemeWrapper>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </ThemeWrapper>
        </StaticRouter>
      </Provider>
    </>
  );
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <AppNode />
    </StyleSheetManager>
  );
  const css = sheet.getStyleTags();

  sheet.seal();

  return { html, css };
}

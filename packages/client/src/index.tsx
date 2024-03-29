import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from 'components/App/GlobalStyles';
import { startServiceWorker } from 'src/utils/workers';
import App from './components/App/App';
import ThemeWrapper from './hoc/ThemeWrapper/ThemeWrapper';
import ErrorBoundary from './hoc/ErrorBoundary';
import store from './store/store';

import.meta.env.MODE !== 'development' && startServiceWorker();

const ReactNode = (
  <>
    <Normalize />
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <ThemeWrapper>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeWrapper>
      </BrowserRouter>
    </Provider>
  </>
);
const rootElement = document.getElementById('root');

hydrateRoot(rootElement as HTMLElement, ReactNode);

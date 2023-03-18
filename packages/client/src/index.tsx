import { createRoot } from 'react-dom/client';
import store from 'src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from 'components/App/GlobalStyles';
// import { startServiceWorker } from 'src/utils/workers';
import App from './components/App/App';
import ThemeWrapper from './hoc/ThemeWrapper/ThemeWrapper';
import ErrorBoundary from './hoc/ErrorBoundary';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
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

import.meta.env.MODE !== 'development' && startServiceWorker();

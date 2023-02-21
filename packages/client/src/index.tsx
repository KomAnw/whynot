import { createRoot } from 'react-dom/client';
import store from 'src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './App/GlobalStyles';
import App from './App/App';
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

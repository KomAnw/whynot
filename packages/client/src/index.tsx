import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from 'src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import App from './components/App/App';
import App from './components/App/App';
import { GlobalStyles } from './GlobalStyles';
import App from './components/App/App';
import ThemeWrapper from './hoc/ThemeWrapper/ThemeWrapper';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <Normalize />
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

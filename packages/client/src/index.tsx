import { createRoot } from 'react-dom/client';
import store from 'src/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './GlobalStyles';
import App from './components/App/App';
import ThemeWrapper from './hoc/ThemeWrapper/ThemeWrapper';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <>
    <Normalize />
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </BrowserRouter>
    </Provider>
  </>
);

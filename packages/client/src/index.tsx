import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <Normalize />
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

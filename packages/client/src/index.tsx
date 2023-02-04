import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import App from './components/App/App';
import { GlobalStyles } from './GlobalStyles';
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

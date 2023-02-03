import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import App from './components/App/App';
import { GlobalStyles } from './GlobalStyles';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <Normalize />
    <GlobalStyles />
    <App />
  </StrictMode>
);

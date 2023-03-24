import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* global css rules goes here */
  @font-face {
      font-family: 'Handjet';
      src: url('/fonts/Handjet.woff2');
      src: local('Handjet Regular'), local('Handjet-Regular'),
          url('/fonts/Handjet.woff2') format('woff2'),
          url('/fonts/Handjet.woff') format('truetype');
      font-display: block;
  }
  body * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
`;

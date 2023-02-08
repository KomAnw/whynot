import { createGlobalStyle } from 'styled-components';
import HanjetWoff2 from './assets/fonts/Handjet.woff2';
import HandjetTtf from './assets/fonts/Handjet.ttf';

export const GlobalStyles = createGlobalStyle`
/* global css rules goes here */
  @font-face {
      font-family: 'Handjet';
      src: url(${HanjetWoff2});
      src: local('Handjet Regular'), local('Handjet-Regular'),
          url(${HanjetWoff2}) format('woff2'),
          url(${HandjetTtf}) format('truetype');
  }
`;

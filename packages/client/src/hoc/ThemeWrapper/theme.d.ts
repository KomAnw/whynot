import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
    };
    fonts: {
      first: string;
      second: string;
    };
  }
}

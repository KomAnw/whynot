import { ThemeProvider } from 'styled-components';
import { themes } from 'components/App/constants';
import { ThemeWrapperProps } from './types';

const MockThemeWrapper = ({ children }: ThemeWrapperProps) => {
  return <ThemeProvider theme={themes.default}>{children}</ThemeProvider>;
};

export default MockThemeWrapper;

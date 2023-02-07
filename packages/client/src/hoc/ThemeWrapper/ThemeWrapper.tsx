import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { ThemeWrapperProps } from './types';

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useSelector(({ theme }: RootState) => theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;

import { ThemeProvider } from 'styled-components';
import { useAppSelector } from 'src/hooks/redux';
import type { ThemeWrapperProps } from './types';

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const theme = useAppSelector(({ theme }) => theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;

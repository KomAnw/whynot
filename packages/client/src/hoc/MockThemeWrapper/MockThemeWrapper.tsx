import { ThemeProvider } from 'styled-components';
import { useAppSelector } from 'src/hooks/redux';
import { ThemeWrapperProps } from './types';

const MockThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const mockTheme = useAppSelector(({ mockTheme }) => mockTheme);

  return <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>;
};

export default MockThemeWrapper;

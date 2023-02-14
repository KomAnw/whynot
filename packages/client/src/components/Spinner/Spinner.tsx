import styled, { withTheme } from 'styled-components';
import ClipLoader from 'react-spinners/ClimbingBoxLoader';
import { H3 } from 'src/design/H3';
import { Theme } from 'src/hoc/ThemeWrapper/types';

type SpinnerProps = {
  theme: Theme;
  size?: number;
  color?: string;
  speed?: number;
};

const Spinner = ({ theme, size, color, speed }: SpinnerProps) => {
  return (
    <Container>
      <ClipLoader size={size} speedMultiplier={speed} color={color || theme.colors.core.spinner} />
      <Text>Loading...</Text>
    </Container>
  );
};

export default withTheme(Spinner);

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const Text = styled(H3)`
  color: ${({ theme }) => theme.colors.core.spinner};
`;

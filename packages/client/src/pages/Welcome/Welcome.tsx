import Switch from 'src/components/Switch';
import { H1 } from 'src/design/H1';
import styled from 'styled-components';
import Link from 'components/Link';

const Welcome = () => {
  return (
    <Container>
      <Text>Welcome</Text>
      <Switch />
      <Link url="/game" variant="size30">
        перейти в игру
      </Link>
    </Container>
  );
};

export default Welcome;

const Container = styled('div')`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.core.background.primary};
`;

const Text = styled(H1)`
  margin: 0 auto;
  padding-top: 100px;
  width: max-content;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

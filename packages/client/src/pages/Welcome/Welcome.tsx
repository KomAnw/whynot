import Switch from 'src/components/Switch';
import { H1 } from 'src/design/H1';
import styled from 'styled-components';
import LinkComponent from 'components/LinkComponent';

const Welcome = () => {
  return (
    <Container>
      <Text>Welcome</Text>
      <Switch />
      <LinkComponent linkToValue='/game' linkToText='перейти в игру' style={{
        fontSizeText: '50px',
        lineHeightText: '50px',
      }}/>
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

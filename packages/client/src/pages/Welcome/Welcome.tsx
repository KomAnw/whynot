import Switch from 'src/components/Switch';
import styled from 'styled-components';

const Welcome = () => {
  return (
    <Container>
      <Text>Welcome</Text>
      <Switch />
    </Container>
  );
};

export default Welcome;

const Container = styled('div')`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
`;

const Text = styled('p')`
  margin: 0 auto;
  padding-top: 100px;
  width: max-content;
  color: ${({ theme }) => theme.colors.text};
`;

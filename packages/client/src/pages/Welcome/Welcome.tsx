import Switch from 'src/components/Switch';
import { H1 } from 'src/design/H1';
import styled from 'styled-components';
import ErrorBoundary from 'src/hoc/ErrorBoundary/ErrorBoundary';
import { useState } from 'react';

const Welcome = () => {
  return (
    <Container>
      <Text>Welcome</Text>
      <Switch />
      <p>2 компонента в одном ErrorBoundary</p>
      <ErrorBoundary>
        <Elem />
        <Elem />
      </ErrorBoundary>
      <p>1 компонент в другом ErrorBoundary</p>
      <ErrorBoundary>
        <Elem />
      </ErrorBoundary>
      <p>еще 1 компонент в еще одном ErrorBoundary</p>
      <ErrorBoundary>
       <Elem />
      </ErrorBoundary>
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

function Elem() {
  const [count, setCount] = useState(0);

  if (count === 3) throw new Error('some message');

  return <div style={{fontSize: '30px'}} onClick={() => setCount(count + 1)}>{count}</div>;
}

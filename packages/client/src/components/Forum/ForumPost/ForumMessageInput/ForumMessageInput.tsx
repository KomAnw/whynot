import styled from 'styled-components';

const ForumMessageInput = () => {
  return <Containers>Input</Containers>;
};

export default ForumMessageInput;

const Containers = styled('div')`
  display: grid;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  padding: 12px 24px;
`;

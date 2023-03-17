import styled from 'styled-components';
import { DividerProps } from 'components/Divider/types';
import { Text } from 'src/design/Text';

export const Divider = ({ children }: DividerProps) => {
  return (
    <Content>
      <DividerText>{children}</DividerText>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &::before,
  &::after {
    content: '';
    height: 1px;
    background-color: ${({ theme }) => theme.colors.core.divider};
    flex-grow: 1;
    margin: 0 15px;
  }
`;

const DividerText = styled(Text)`
  font-size: 20px;
`;

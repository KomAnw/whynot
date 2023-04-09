import styled from 'styled-components';
import { Text } from 'src/design/Text';

export const Container = styled('div')`
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.core.text.primary};
  border-radius: 5px;
  padding: 0 5px;
`;

export const Emoji = styled('img')`
  width: 18px;
  height: 18px;
`;

export const Number = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

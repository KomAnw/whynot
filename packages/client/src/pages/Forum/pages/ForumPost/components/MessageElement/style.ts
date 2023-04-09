import styled from 'styled-components';
import { Text } from 'src/design/Text';

export const Container = styled('div')<{ elementId: number }>`
  display: grid;
  grid-auto-flow: row;
  padding-left: ${({ elementId }) => elementId && '12px'};
`;

export const Header = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  justify-content: start;
  align-items: center;
`;

export const Author = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

export const Time = styled(Text)`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.tertiary};
`;

export const Message = styled(Text)`
  display: grid;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

export const Footer = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  justify-content: start;
  align-items: center;
`;

export const ButtonAnswer = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.core.text.sextuple};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonEmoji = styled('div')`
  cursor: pointer;
  position: relative;
  width: 18px;
  height: 18px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  path {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
  rect {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
`;

export const Emoji = styled('div')`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
`;

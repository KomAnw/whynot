import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  gap: 5px;
  padding: 0 5px;
  align-items: center;
  position: absolute;
  bottom: 18px;
  left: 18px;
  height: 26px;
  width: 74px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.control.input.background};
`;

export const Emoji = styled('img')`
  cursor: pointer;
`;

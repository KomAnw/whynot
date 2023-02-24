import styled from 'styled-components';
import { breakpoints } from 'src/components/App/constants';

const { mobileM } = breakpoints;

export const MiniDivForm = styled.div`
  margin: 0;
  padding: 0;
  width: 402px;
  height: 636px;
  background: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  @media (max-width: ${mobileM}) {
    width: 354px;
  }
`;

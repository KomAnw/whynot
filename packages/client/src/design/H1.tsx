import styled from 'styled-components';
import { Typography } from './Typography';

export const H1 = styled(Typography).attrs({ as: 'h1' })`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

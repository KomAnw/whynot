import styled from 'styled-components';
import { Typography } from './Typography';

export const H3 = styled(Typography).attrs({ as: 'h3' })`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

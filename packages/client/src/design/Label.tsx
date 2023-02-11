import styled from 'styled-components';
import { Typography } from './Typography';

export const Label = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

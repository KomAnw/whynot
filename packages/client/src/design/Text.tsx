import styled from 'styled-components';
import { Typography } from './Typography';

export const Text = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

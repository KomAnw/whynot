import styled from 'styled-components';
import { Typography } from './Typography';

export const LinkText = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

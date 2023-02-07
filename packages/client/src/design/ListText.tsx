import styled from 'styled-components';
import { Typography } from './Typography';

export const Label = styled(Typography).attrs({ as: 'li' })`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 34px;
`;

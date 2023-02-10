import styled from 'styled-components';
import { Typography } from './Typography';

export const CenterDivContainer = styled(Typography).attrs({ as: 'div' })`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

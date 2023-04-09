import styled from 'styled-components';
import { breakpoints } from 'components/App/constants';
import { H1 } from 'src/design/H1';
import { Text } from 'src/design/Text';

export const PageContainer = styled('div')`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const Component = styled('div')`
  display: grid;
  grid-template-rows: max-content max-content auto max-content;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  width: 600px;
  height: 700px;
  @media (max-width: ${breakpoints.mobileM}) {
    width: 354px;
    height: 636px;
  }
`;

export const Title = styled(H1)`
  display: grid;
  text-align: center;
  margin-top: 14px;
`;

export const TitlePost = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: start;
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.core.text.primary};
  margin: 27px 12px 0 12px;
  padding: 5px 0;
  path {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
`;

export const NamePost = styled(Text)`
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
`;

export const Main = styled('div')`
  display: grid;
  margin: 12px;
  overflow-y: auto;
  height: auto;
  align-content: start;
  @media (max-width: ${breakpoints.mobileM}) {
    height: auto;
  }
`;

export const Footer = styled('div')`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 10px;
  padding: 0 12px 10px;
  justify-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
`;

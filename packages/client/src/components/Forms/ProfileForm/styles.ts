import { breakpoints } from 'src/App/constants';
import { H1 } from 'src/design/H1';
import { H3 } from 'src/design/H3';
import { Label } from 'src/design/Label';
import { LinkText } from 'src/design/LinkText';
import { MiniDivForm } from 'src/design/MiniDivForm';
import styled from 'styled-components';

export const PageStyle = styled(MiniDivForm)`
  display: grid;
  justify-items: center;
`;

export const TextH1 = styled(H1)`
  height: 45px;
  margin: 14px 0 0 0;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

export const Avatar = styled.img`
  margin: 22px 0 0 0;
  height: 138px;
  width: 138px;
  border-radius: 50%;
`;

export const Data = styled.div`
  margin: 20px 0 19px 0;
  height: 242px;
  padding: 0;
  display: grid;
  text-align: center;
  grid-row-gap: 10px;
`;

export const DataRow = styled.div`
  width: 354px;
  height: 32px;
  display: grid;
  grid-template-columns: 100px 254px;
  align-items: center;
  justify-items: start;
  border-bottom: solid 1px ${({ theme }) => theme.colors.core.text.primary};
  @media (max-width: ${breakpoints.mobileM}) {
    width: 330px;
    grid-template-columns: 100px 230px;
  }
`;

export const DataLabel = styled(Label)`
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

export const DataValue = styled(LinkText)`
  display: grid;
  color: ${({ theme }) => theme.colors.core.text.tertiary};
  font-weight: 400;
`;

export const TextLink = styled(LinkText)`
  height: 27px;
  margin: 12px 0 0 0;
  padding: 0;
  display: grid;
`;

export const TextLinkBack = styled(H3)`
  margin: 20px 0 0 0;
  padding: 0;
  height: 22px;
  display: grid;
`;

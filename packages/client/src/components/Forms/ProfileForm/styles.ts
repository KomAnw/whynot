import { breakpoints } from 'src/components/App/constants';
import { H1 } from 'src/design/H1';
import { H3 } from 'src/design/H3';
import { Label } from 'src/design/Label';
import { LinkText } from 'src/design/LinkText';
import styled from 'styled-components';

export const PageStyle = styled('div')`
  display: grid;
  justify-items: center;
  width: 402px;
  height: 636px;
  background: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;

  @media (max-width: ${breakpoints.mobileM}) {
    width: 354px;
  }
`;

export const TextH1 = styled(H1)`
  height: 45px;
  margin-top: 14px;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

export const Avatar = styled.img`
  margin-top: 22px;
  height: 138px;
  width: 138px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Data = styled.div`
  height: 242px;
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
  display: grid;
`;

export const TextLinkBack = styled(H3)`
  margin-top: 20px;
  display: grid;
`;

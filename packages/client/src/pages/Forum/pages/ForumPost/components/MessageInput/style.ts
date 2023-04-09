import styled from 'styled-components';
import { Text } from 'src/design/Text';
import { Input } from 'components/Input';
import { InputStyled, LabelStyled, ValidationText } from 'components/Input/Input';

export const Form = styled('form')`
  display: grid;
  width: 100%;
  grid-template-rows: auto auto;
`;

export const Header = styled('div')`
  display: flex;
`;

export const Title = styled(Text)`
  margin-left: 32px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

export const Direction = styled(Text)`
  margin-left: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

export const Footer = styled('div')`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 36px;
  align-items: center;
`;

export const RestyledInput = styled(Input)`
  ${InputStyled} {
    border-radius: 18px;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.control.input.backgroundSecondary};
    &::placeholder {
      color: ${({ theme }) => theme.colors.control.input.placeHolderSecondary};
    }
  }
  ${LabelStyled} {
    display: none;
  }
  ${ValidationText} {
    display: none;
  }
`;

export const Button = styled('button')`
  border: 0;
  width: 26px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  cursor: pointer;
  path {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
  &:hover {
    opacity: 0.7;
  }
`;

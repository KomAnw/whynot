import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';
import type { InputProps } from 'components/Input/type';
import { Label } from 'src/design/Label';
import { LinkText } from 'src/design/LinkText';
import { breakpoints } from 'src/components/App/constants';

const { mobileM } = breakpoints;

export const Input = styled(
  ({ name, type, label, errorMessage, placeholder, validationRules, register, className }: InputProps) => {
    return (
      <InputContainer className={className}>
        <LabelStyled>{label}</LabelStyled>
        <InputStyled type={type} placeholder={placeholder} {...register(name, { ...validationRules })} />
        <ValidationText>{errorMessage}</ValidationText>
      </InputContainer>
    );
  }
)``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
`;

export const ValidationText = styled(Label)`
  margin: 0 auto;
  height: 20px;
  display: block;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.core.text.error};
`;

export const LabelStyled = styled(Label)`
  height: 20px;
  margin: 0;
  display: block;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.control.input.label};
`;

export const InputStyled = styled(LinkText).attrs({ as: 'input' })<InputHTMLAttributes<HTMLInputElement>>`
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 26px;
  width: 100%;
  height: 40px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.control.input.background};
  border: none;
  color: ${({ theme }) => theme.colors.control.input.color};

  &::placeholder {
    color: ${({ theme }) => theme.colors.control.input.placeHolder};
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: ${mobileM}) {
    padding-left: 12px;
  }
`;

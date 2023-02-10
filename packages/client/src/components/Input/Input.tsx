import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';
import { InputProps } from 'components/Input/type';
import { Label } from 'src/design/Label';
import { LinkText } from 'src/design/LinkText';

export const Input = ({ name, type, label, errorMessage = '', placeholder, register, validationRules }: InputProps) => (
  <InputContainer>
    <LabelStyled>{label}</LabelStyled>
    <InputStyled type={type} placeholder={placeholder} {...register(name, { ...validationRules })} />
    <ValidationText>{errorMessage}</ValidationText>
  </InputContainer>
);

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 0 5px 0;
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
`;

const ValidationText = styled(Label)`
  margin: 0 auto;
  font-size: 1em;
  height: 15px;
  display: block;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.core.text.error};
`;

const LabelStyled = styled(Label)`
  margin: 5px 3px;
  display: block;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.control.input.label};
`;

const InputStyled = styled(LinkText).attrs({ as: 'input' })<InputHTMLAttributes<HTMLInputElement>>`
  box-sizing: border-box;
  flex: 1;
  padding: 8px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.control.input.background};
  border: none;
  color: ${({ theme }) => theme.colors.control.input.color};
  ::placeholder: ${({ theme }) => theme.colors.control.input.placeHolder};
`;

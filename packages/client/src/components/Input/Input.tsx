import styled from 'styled-components';
import React, { InputHTMLAttributes, useState } from 'react';
import { InputProps } from 'components/Input/type';
import { Label } from 'src/design/Label';
import { LinkText } from 'src/design/LinkText';

export const Input = ({ type, name, label, errorMessage, onChange, placeholder, value }: InputProps) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange ? onChange(e) : setInternalValue(e.target.value);
  };

  return (
    <InputContainer>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled name={name} type={type} value={internalValue} placeholder={placeholder} onChange={handleChange} />
      {errorMessage && <ValidationStyled>{errorMessage}</ValidationStyled>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  margin: 0 0 5px 0;
  font-family: ${({ theme }) => theme.fonts.main};
  font-style: normal;
`;

const ValidationStyled = styled(Label)`
  margin: 0;
  height: 15px;
  display: block;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.core.text.error};
`;

const LabelStyled = styled(Label)`
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
  color: ${({ theme }) => theme.colors.control.input.placeHolder};
`;

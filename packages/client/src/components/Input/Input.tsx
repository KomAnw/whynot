import styled from 'styled-components';
import React, { useState } from 'react';
import { InputProps } from 'components/Input/type';

export const Input = ({ type, name, label, errorMessage, onChange, placeholder, value }: InputProps) => {
  const [iternalValue, setIternalValue] = useState('');

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIternalValue(e.target.value);
  };

  return (
    <InputContainer>
      <LabelStyled>{label} </LabelStyled>
      <InputStyled
        name={name}
        type={type}
        value={value || iternalValue}
        placeholder={placeholder}
        onChange={onChange || handler}
      />
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

const ValidationStyled = styled.p`
  margin: 0;
  font-size: 20px;
  height: 15px;
  display: block;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.core.text.error};
`;

const LabelStyled = styled.label`
  line-height: 22px;
  display: block;
  align-items: flex-start;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.control.input.label};
`;

const InputStyled = styled.input`
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
  font-weight: 400;
  font-size: 24px;
`;

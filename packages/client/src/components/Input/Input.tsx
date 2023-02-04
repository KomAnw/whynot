import styled from 'styled-components';
import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputWidth?: string;
  validationText?: string;
  backgroundColor?: string;
  valTextColor?: any;
}

interface TextStyledProps {
  valTextColor?: string;
}

interface InputStyledProps {
  inputWidth?: string;
  backgroundColor?: string;
  color?: string;
}

export const Input: FC<InputProps> = (props) => {
  return (
    <DivStyled>
      <InputStyled
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        onChange={props.onChange}
        backgroundColor={props.backgroundColor}
        inputWidth={props.inputWidth}
        color={props.color}
      />
      <TextStyled valTextColor={props.valTextColor}>{props.validationText}</TextStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
`;

const TextStyled = styled.p<TextStyledProps>`
  color: ${props => props.valTextColor || 'red'};
  margin: 0;
  font-size: 10pt;
  display: block;
  align-items: flex-start;
`;

const InputStyled = styled.input<InputStyledProps>`
  box-sizing: border-box;
  flex: 1;
  padding: 8px;
  width: ${props => props.inputWidth || '350px'};
  border-radius: 10px;
  border: none;
  background-color: ${props => props.backgroundColor || 'gray'};
  color: ${props => props.color || 'white'};
  max-width: 100%;
  outline: none;
`;

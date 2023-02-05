import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

type InputProps = {
  name: string;
  type: string;
  isValid?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  backgroundColor?: string;
  color?: string;
  label?: string;
  labelTextColor?: string;
  validationTextColor?: string;
  validationText?: string;
};

type ValidationStyledProps = Pick<InputProps, 'validationTextColor'>;

type LabelStyledProps = Pick<InputProps, 'labelTextColor'>;

type InputStyledProps = Pick<InputProps, 'width' | 'backgroundColor' | 'color'>;

export const Input = (props: InputProps) => {
  const [state, setState] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    state ? setIsTyping(true) : setIsTyping(false);
  }, [state]);

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setState(value);
  };

  return (
    <DivStyled>
      <LabelStyled>{isTyping ? props.placeholder : ''} </LabelStyled>
      <InputStyled
        {...props}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange ? props.onChange : handler}
        backgroundColor={props.backgroundColor}
        width={props.width}
        color={props.color}
      />
      <ValidationStyled validationTextColor={props.validationTextColor}>
        {props.isValid ? '' : props.validationText}
      </ValidationStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  margin: 0 0 5px 0;
`;

const ValidationStyled = styled.p<ValidationStyledProps>`
  color: ${props => props.validationTextColor || 'red'};
  margin: 0 0 5px 10px;
  font-size: 10pt;
  height: 15px;
  display: block;
  align-items: flex-start;
`;

const LabelStyled = styled.label<LabelStyledProps>`
  color: ${props => props.labelTextColor || 'grey'};
  margin: 0 0 1px 10px;
  font-size: 10pt;
  height: 15px;
  display: block;
  align-items: flex-start;
`;

const InputStyled = styled.input<InputStyledProps>`
  box-sizing: border-box;
  flex: 1;
  padding: 8px;
  width: ${props => props.width || '350px'};
  border-radius: 10px;
  border: none;
  background-color: ${props => props.backgroundColor || 'gray'};
  color: ${props => props.color || 'white'};
  max-width: 100%;
  outline: none;
`;

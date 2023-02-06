import styled from 'styled-components';
import React, { useState } from 'react';
import { InputProps } from 'components/Input/type';

export const Input = (props: InputProps) => {
  const [value, setValue] = useState('');

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <DivStyled>
      <LabelStyled>{props.label} </LabelStyled>
      <InputStyled
        name={props.name}
        type={props.type}
        value={props.value ? props.value : value}
        placeholder={props.placeholder}
        onChange={props.onChange ? props.onChange : handler}
      />
      <ValidationStyled>{props.isValid ? '' : props.validationText}</ValidationStyled>
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

const ValidationStyled = styled.p`
  margin: 0 0 5px 10px;
  font-size: 10pt;
  height: 15px;
  display: block;
  align-items: flex-start;
`;

const LabelStyled = styled.label`
  margin: 0 0 1px 5px;
  font-size: 10pt;
  height: 15px;
  display: block;
  align-items: flex-start;
`;

const InputStyled = styled.input`
  box-sizing: border-box;
  flex: 1;
  padding: 8px;
  border-radius: 5px;
  width: 100%;
  outline: none;
`;

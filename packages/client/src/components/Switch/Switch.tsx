import styled from 'styled-components';
import { useEffect, useState } from 'react';

export type SwitchProps = {
  onClick?: () => void;
  id: string;
  // isSwitchedOn?: boolean;
  isChecked?: boolean;
};

const Switch = ({ onClick, id, isChecked = false }: SwitchProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(isChecked);
  };

  useEffect(() => {
    handleChange();
  }, [isChecked]);

  return (
    <Container>
      <Input type="checkbox" id={id} checked={checked} />
      <Label htmlFor={id} onClick={onClick} />
    </Container>
  );
};

export default Switch;

const Container = styled('div')`
  width: max-content;
`;

const Label = styled('label')`
  cursor: pointer;
  text-indent: -9999px;
  width: 86px;
  height: 46px;
  background: ${({ theme }) => theme.colors.control.toggle.backgroundSecondary};
  display: block;
  border-radius: 20px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 36px;
    height: 36px;
    background: ${({ theme }) => theme.colors.control.toggle.control};
    border-radius: 20px;
    transition: 0.3s;
  }
  &:active:after {
    width: 55px;
  }
`;

const Input = styled('input')`
  display: none;
  :checked + ${Label} {
    background: ${({ theme }) => theme.colors.control.toggle.backgroundPrimary};
    &:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }
  }
`;

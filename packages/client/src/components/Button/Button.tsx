import styled from 'styled-components';
import { ButtonComponent, ButtonProps } from './types';

export const Button = ({ type, variant = 'primary', children, onSubmit, onClick }: ButtonComponent) => {
  return (
    <StyledButton type={type} variant={variant} onSubmit={onSubmit} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  height: 48px;
  width: 156px;
  border-radius: 12px;
  border: medium none;
  cursor: pointer;
  transition: 0.5s;
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  font-size: 32px;
  color: ${({ theme, variant }) => theme.colors.control.button[variant].color};
  background: ${({ theme, variant }) => theme.colors.control.button[variant].background};
  font-family: ${({ theme }) => theme.fonts.main};
  &:hover,
  &:focus,
  &:active {
    background: ${({ theme, variant }) => theme.colors.control.button[variant].hoverBackground};
  }
`;

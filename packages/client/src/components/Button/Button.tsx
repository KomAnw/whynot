import styled from 'styled-components';
import { ButtonComponent, ButtonProps } from './types';

export const Button = ({ type, theme, variant = 'primary', children, onSubmit, onClick }: ButtonComponent) => {
  return (
    <StyledButton type={type} theme={theme} variant={variant} onSubmit={onSubmit} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  height: '48px';
  width: '156px';
  border-radius: 12px;
  border: medium none;
  cursor: pointer;
  transition: 0.5s;
  font-style: 'normal';
  font-weight: '700';
  line-height: '39px';

  color: ${({ theme, variant }) => theme[variant].button.color || 'black'};
  background: ${({ theme, variant }) => theme[variant].button.background || 'red'};
  font-size: ${({ theme, variant }) => theme[variant].button.fontSize || '32px'};
  font-family: ${({ theme, variant }) => theme[variant].button.fontFamily || 'Arial'};

  &:hover,
  &:focus,
  &:active {
    background: ${({ theme, variant }) => theme[variant]?.button.hoverBackground || 'grey'};
  }
`;

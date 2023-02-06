import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  variant?: 'primary' | 'secondary';
}

export const Button = (props: ButtonProps) => {
  const { type, variant, children, onSubmit, onClick } = props;

  return (
    <StyledButton type={type} variant={variant} onSubmit={onSubmit} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.theme.color};

  background: ${props => props.theme.background};
  background: ${props => (props.primary ? '#6C5BC3' : null)};
  background: ${props => (props.secondary ? '#6BD35A' : null)};

  font-size: ${props => props.primary};
  font-size: ${props => (props.primary ? '32px' : null)};
  font-size: ${props => (props.secondary ? '35px' : null)};

  height: '48px';
  width: '156px';

  font-family: ${'Handjet' || 'Arial'};
  font-style: 'normal';
  font-weight: '700';
  line-height: '39px';
  border-radius: 12px;
  border: medium none;
  cursor: pointer;
  transition: 0.5s;
  &:hover,
  &:focus,
  &:active {
    background: ${props => props.theme.hoverBackground};
    background: ${props => (props.primary ? '#897CCF' : null)};
    background: ${props => (props.secondary ? '#89DC7B' : null)};

  }
`;

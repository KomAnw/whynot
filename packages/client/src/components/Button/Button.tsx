import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  signInButton?: boolean;
  mainButton?: boolean;
  signUpButton?: boolean;
  playButton?: boolean;
  xxsmall?: boolean;
  xsmall?: boolean;
  small?: boolean;
  medium?: boolean;
  normal?: boolean;
  large?: boolean;
  xlarge?: boolean;
  xxlarge?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    type,
    signInButton,
    mainButton,
    signUpButton,
    playButton,
    xxsmall,
    xsmall,
    small,
    medium,
    normal,
    large,
    xlarge,
    xxlarge,
    onSubmit,
    onClick,
  } = props;

  return (
    <StyledButton
      type={type}
      signInButton={signInButton}
      mainButton={mainButton}
      signUpButton={signUpButton}
      playButton={playButton}
      xxsmall={xxsmall}
      xsmall={xsmall}
      small={small}
      medium={medium}
      normal={normal}
      large={large}
      xlarge={xlarge}
      xxlarge={xxlarge}
      onSubmit={onSubmit}
      onClick={onClick}>
      Кнопка
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  background: ${props => (props.signInButton ? '#6C5BC3' : null)};
  background: ${props => (props.mainButton ? '#6AADD6' : null)};
  background: ${props => (props.signUpButton ? '#5BCDC9' : null)};
  background: ${props => (props.playButton ? '#6BD35A' : null)};
  font-size: '20px';
  font-size: ${props => (props.xxsmall ? '20px' : null)};
  font-size: ${props => (props.xsmall ? '25px' : null)};
  font-size: ${props => (props.small ? '28px' : null)};
  font-size: ${props => (props.medium ? '20px' : null)};
  font-size: ${props => (props.normal ? '32px' : null)};
  font-size: ${props => (props.large ? '35px' : null)};
  font-size: ${props => (props.xlarge ? '40px' : null)};
  font-size: ${props => (props.xxlarge ? '64px' : null)};
  height: '45px';
  height: ${props => (props.xxsmall ? '45px' : null)};
  height: ${props => (props.xsmall ? '60px' : null)};
  height: ${props => (props.small ? '60px' : null)};
  height: ${props => (props.medium ? '60px' : null)};
  height: ${props => (props.normal ? '80px' : null)};
  height: ${props => (props.large ? '100px' : null)};
  height: ${props => (props.xlarge ? '94px' : null)};
  height: ${props => (props.xxlarge ? '200px' : null)};
  width: '130px';
  width: ${props => (props.xxsmall ? '130px' : null)};
  width: ${props => (props.xsmall ? '150px' : null)};
  width: ${props => (props.small ? '200px' : null)};
  width: ${props => (props.normal ? '200px' : null)};
  width: ${props => (props.medium ? '173px' : null)};
  width: ${props => (props.large ? '200px' : null)};
  width: ${props => (props.xlarge ? '220px' : null)};
  width: ${props => (props.xxlarge ? '400px' : null)};
  border-radius: '10px';
  border-radius: ${props => (props.xxsmall ? '20px' : null)};
  border-radius: ${props => (props.xsmall ? '20px' : null)};
  border-radius: ${props => (props.small ? '10px' : null)};
  border-radius: ${props => (props.normal ? '10px' : null)};
  border-radius: ${props => (props.medium ? '30px' : null)};
  border-radius: ${props => (props.large ? '40px' : null)};
  border-radius: ${props => (props.xlarge ? '30px' : null)};
  border-radius: ${props => (props.xxlarge ? '80px' : null)};
  text-shadow: ${props => (props.playButton ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none')};
  font-family: 'Arial';
  font-style: 'normal';
  font-weight: '700';
  line-height: '24px';
  border: medium none;
  cursor: pointer;
  transition: 0.5s;
  &:hover,
  &:focus,
  &:active {
    background: ${props => props.theme.hoverBackground};
    background: ${props => (props.signInButton ? '#5947af' : null)};
    background: ${props => (props.mainButton ? '#4a8fbb' : null)};
    background: ${props => (props.signUpButton ? '#45b6b2' : null)};
    background: ${props => (props.playButton ? '#53c042' : null)};
  }
`;

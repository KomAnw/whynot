import { useDispatch } from 'react-redux';
import { changeTheme } from 'src/hoc/ThemeWrapper/themeSlice';
import styled from 'styled-components';

const Switch = () => {
  const dispatch = useDispatch();
  const themeHandler = () => dispatch(changeTheme());

  return (
    <Toggle>
      <Input type="checkbox" onChange={themeHandler} />
      <Label />
    </Toggle>
  );
};

const Toggle = styled('label')`
  position: relative;
  display: block;
  width: max-content;
  margin: 0 auto;
  padding-top: 40px;
`;

const Label = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    width: 84px;
    height: 42px;
    background: #ef5350;
    position: relative;
    display: inline-block;
    box-shadow: inset 0 0.1em 0.03em rgb(0 0 0 / 20%), inset 0 0.1em 0.3em rgb(0 0 0 / 30%),
      0 0 2em rgb(255 255 255 / 60%), inset 0 0 #66bb6a;
    transition: 0.2s ease-in;
  }

  &::after {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    left: 3px;
    top: 3px;
    z-index: 2;
    background: #fefefe;
    box-shadow: 0 2px 5px #0002;
    transition: 0.2s ease-in;
  }
`;

const Input = styled('input')`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;

  &:hover + ${Label}::after {
    box-shadow: 0 2px 15px 0 #0002, 0 3px 8px 0 #0001;
  }

  &:checked + ${Label} {
    &::before {
      box-shadow: inset 0 0.1em 0.03em rgb(0 0 0 / 20%), inset 0 0.1em 0.3em rgb(0 0 0 / 30%),
        0 0 2em rgb(255 255 255 / 60%), inset 84px 0 #66bb6a;
    }
    &::after {
      transform: translatex(42px);
    }
  }
`;

export default Switch;

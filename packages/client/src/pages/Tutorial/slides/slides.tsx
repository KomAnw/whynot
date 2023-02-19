import { Link } from 'react-router-dom';
import { paths } from 'src/App/constants';
import { Button } from 'src/components/Button';
import Slide from 'src/components/Slide';
import styled from 'styled-components';
import { slidesData } from './constants';

const PlayButton = () => (
  <StyledLink to={paths.game.index}>
    <Button variant="secondary">Let's play</Button>
  </StyledLink>
);

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 400px;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const slides = [
  ...slidesData.map((props, id) => <Slide {...props} id={id} key={props.text} />),
  <PlayButton key="button" />,
];

export default slides;

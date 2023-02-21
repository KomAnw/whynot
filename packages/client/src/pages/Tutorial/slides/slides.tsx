import { Link } from 'react-router-dom';
import { paths } from 'src/App/constants';
import { Button } from 'src/components/Button';
import { SlideHistory, SlideTutorial } from 'src/components/Slide';
import styled from 'styled-components';
import { Story, Tutorial } from './constants';

const PlayButton = () => (
  <Container>
    <StyledLink to={paths.game.index}>
      <Button variant="secondary">Let's play</Button>
    </StyledLink>
  </Container>
);

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const slides = [
  ...Story.map((props, id) => <SlideHistory {...props} id={id} key={props.text} />),
  ...Tutorial.map(props => <SlideTutorial {...props} key={props.text} />),
  <PlayButton key="button" />,
];

export default slides;

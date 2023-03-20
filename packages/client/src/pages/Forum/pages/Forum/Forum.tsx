import styled from 'styled-components';
import ForumPosts from 'components/Forum/ForumPosts';

const Forum = () => {
  return (
    <Container>
      <ForumPosts />
    </Container>
  );
};

export default Forum;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

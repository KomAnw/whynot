import styled from 'styled-components';
import ForumPost from 'components/Forum/ForumPost';

const Post = () => {
  return (
    <Container>
      <ForumPost />
    </Container>
  );
};

export default Post;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

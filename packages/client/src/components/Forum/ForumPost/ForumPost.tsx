import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import ForumMessageInput from 'components/Forum/ForumPost/ForumMessageInput';
import { useParams } from 'react-router-dom';

const { forum } = paths;
const ForumPost = () => {
  const { id } = useParams();

  return (
    <Containers>
      <H1Style>Forum post</H1Style>
      <Main>{id}</Main>
      <Footer>
        <InputForm>
          <ForumMessageInput />
        </InputForm>
        <Link to={forum.index} variant="size30">
          back
        </Link>
      </Footer>
    </Containers>
  );
};

export default ForumPost;

const Containers = styled('div')`
  display: grid;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  padding: 12px 24px;
`;

const H1Style = styled(H1)`
  height: 40px;
  text-align: center;
  margin: 14px 0 0 0;
`;

const Main = styled('div')``;

const InputForm = styled('div')``;

const Footer = styled('div')`
  display: grid;
  margin: 10px 0 12px 0;
  justify-items: center;
`;

import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import { breakpoints } from 'src/components/App/constants';
import ForumMessageInput from 'components/Forum/ForumPost/ForumMessageInput';
import { demoMessage, demoPost } from 'components/Forum/ForumPost/demoData';
import MessageElement from 'components/Forum/ForumPost/MessageElement';
import { SortMessage } from 'components/Forum/ForumPost/utils/SortMessage';
import { IconPost } from 'components/Forum/components/IconPost';

const { forum } = paths;

const ForumPost = () => {
  return (
    <Containers>
      <H1Style>Forum</H1Style>
      <Post>
        <IconPost />
        <Title>{demoPost.title}</Title>
      </Post>
      <Main>
        {SortMessage(demoMessage).map((item: any) => (
          <MessageElement {...item} key={item.id} />
        ))}
      </Main>
      <Footer>
        <ForumMessageInput />
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
  grid-template-rows: max-content max-content auto max-content;
  align-items: start;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  width: 600px;
  height: 700px;
  @media (max-width: ${breakpoints.mobileM}) {
    width: 354px;
    height: 636px;
  }
`;

const H1Style = styled(H1)`
  display: grid;
  text-align: center;
  margin: 14px 0 0 0;
  height: 45px;
`;

const Post = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: start;
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.core.text.primary};
  margin: 27px 12px 0 12px;
  padding: 5px 0;
  path {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
`;

const Title = styled(H1)`
  font-size: 22px;
  line-height: 25px;
`;

const Main = styled('div')`
  display: grid;
  margin: 12px 12px 0 12px;
  overflow-y: auto;
  height: 450px;
  align-content: start;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar {
    background-color: #a29f9f;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6457b8;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    height: 386px;
  }
`;

const Footer = styled('div')`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 56px 34px;
  grid-row-gap: 10px;
  padding: 0 12px 10px 12px;
  justify-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
`;

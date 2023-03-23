import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import { breakpoints } from 'src/components/App/constants';
import ForumPostsInput from 'components/Forum/ForumPosts/ForumPostsInput';
import PostElement from 'components/Forum/ForumPosts/PostElement';
import { demoData } from 'components/Forum/ForumPosts/demoData';
import { TPost } from 'components/Forum/types';

const { menu } = paths;

const ForumPosts = () => {
  return (
    <Containers>
      <H1Style>Forum</H1Style>
      <Main>
        {demoData.map((item: TPost) => (
          <PostElement {...item} key={item.id} />
        ))}
      </Main>
      <Footer>
        <ForumPostsInput />
        <Link to={menu} variant="size30">
          back
        </Link>
      </Footer>
    </Containers>
  );
};

export default ForumPosts;

const Containers = styled('div')`
  display: grid;
  grid-template-rows: max-content auto max-content;
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
  text-align: center;
  margin: 14px 0 0 0;
  height: 45px;
`;

const Main = styled('div')`
  display: grid;
  margin: 27px 12px 0 12px;
  overflow-y: auto;
  height: 502px;
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
    height: 438px;
  }
`;

const Footer = styled('div')`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 36px 34px;
  grid-row-gap: 10px;
  margin: 0;
  padding: 20px 12px 10px 12px;
  justify-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
`;

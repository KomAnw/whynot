import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import { breakpoints } from 'components/App/constants';
import ForumPostsInput from 'pages/Forum/pages/ForumPosts/components/ForumPostsInput';
import PostElement from 'pages/Forum/pages/ForumPosts/components/PostElement';
import { demoData } from 'pages/Forum/pages/ForumPosts/demoData';
import type { TPost } from 'pages/Forum/pages/types';

const { menu } = paths;

const ForumPosts = () => {
  return (
    <PageContainer>
      <Component>
        <Title>Forum</Title>
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
      </Component>
    </PageContainer>
  );
};

export default ForumPosts;

export const PageContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Component = styled('div')`
  display: grid;
  grid-template-rows: max-content auto max-content;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  width: 600px;
  height: 700px;
  @media (max-width: ${breakpoints.mobileM}) {
    width: 354px;
    height: 636px;
  }
`;

const Title = styled(H1)`
  text-align: center;
  margin-top: 14px;
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
    background-color: ${({ theme }) => theme.colors.core.divider};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.core.text.primary};
  }
  @media (max-width: ${breakpoints.mobileM}) {
    height: 438px;
  }
`;

const Footer = styled('div')`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 10px;
  padding: 20px 12px 10px;
  justify-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
`;

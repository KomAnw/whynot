import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import { breakpoints } from 'components/App/constants';
import ForumMessageInput from 'pages/Forum/pages/ForumMessages/components/ForumMessageInput';
import { demoMessage, demoPost } from 'pages/Forum/pages/ForumMessages/demoData';
import MessageElement from 'pages/Forum/pages/ForumMessages/components/MessageElement';
import { SortMessage } from 'pages/Forum/pages/ForumMessages/utils/sortMessage';
import { IconPost } from 'pages/Forum/components/IconPost';
import type { TMessage } from 'pages/Forum/pages/types';

const { forum } = paths;

const ForumMessages = () => {
  return (
    <PageContainer>
      <Component>
        <Title>Forum</Title>
        <TitlePost>
          <IconPost />
          <NamePost>{demoPost.title}</NamePost>
        </TitlePost>
        <Main>
          {SortMessage(demoMessage).map((item: TMessage) => (
            <MessageElement {...item} key={item.id} />
          ))}
        </Main>
        <Footer>
          <ForumMessageInput />
          <Link to={forum.index} variant="size30">
            back
          </Link>
        </Footer>
      </Component>
    </PageContainer>
  );
};

export default ForumMessages;

export const PageContainer = styled('div')`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Component = styled('div')`
  display: grid;
  grid-template-rows: max-content max-content auto max-content;
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
  display: grid;
  text-align: center;
  margin-top: 14px;
`;

const TitlePost = styled('div')`
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

const NamePost = styled(H1)`
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
    background-color: ${({ theme }) => theme.colors.core.divider};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.core.text.primary};
  }
  @media (max-width: ${breakpoints.mobileM}) {
    height: 386px;
  }
`;

const Footer = styled('div')`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 10px;
  padding: 0 12px 10px 12px;
  justify-items: center;
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
`;

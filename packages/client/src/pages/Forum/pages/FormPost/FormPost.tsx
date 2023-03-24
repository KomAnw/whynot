import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import { breakpoints } from 'components/App/constants';
import MessageInput from 'pages/Forum/pages/FormPost/components/MessageInput';
import { demoMessage, demoPost } from 'pages/Forum/pages/FormPost/demoData';
import MessageElement from 'pages/Forum/pages/FormPost/components/MessageElement';
import { sortMessage } from 'pages/Forum/pages/FormPost/utils/sortMessage';
import { IconPost } from 'pages/Forum/components/IconPost';
import { TMessage } from 'pages/Forum/pages/types';
import { Text } from 'src/design/Text';

const { forum } = paths;

const FormPost = () => {
  return (
    <PageContainer>
      <Component>
        <Title>Forum</Title>
        <TitlePost>
          <IconPost />
          <NamePost>{demoPost.title}</NamePost>
        </TitlePost>
        <Main>
          {sortMessage(demoMessage).map((item: TMessage) => (
            <MessageElement {...item} key={item.id} />
          ))}
        </Main>
        <Footer>
          <MessageInput />
          <Link to={forum.index} variant="size30">
            back
          </Link>
        </Footer>
      </Component>
    </PageContainer>
  );
};

export default FormPost;

export const PageContainer = styled('div')`
  height: 100vh;
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

const NamePost = styled(Text)`
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
`;

const Main = styled('div')`
  display: grid;
  margin: 12px;
  overflow-y: auto;
  height: auto;
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
    height: auto;
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

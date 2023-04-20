import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import { Text } from 'src/design/Text';
import { breakpoints } from 'components/App/constants';
import { Link } from 'components/Link';
import { paths } from 'components/App/constants';
import type { TPost } from 'src/api/forum/posts/models';
import { IconPost } from 'pages/Forum/components/IconPost';

const { forum } = paths;

const PostElement = ({ id, text, login }: TPost) => {
  return (
    <Container>
      <Title>
        <IconPost />
        <Link to={`${forum.index}/${id}`}>{text}</Link>
      </Title>
      <ContainerAuthor>
        <NameAuthor>Author:</NameAuthor>
        <Author>{login}</Author>
      </ContainerAuthor>
    </Container>
  );
};

export default PostElement;

const Container = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
  padding: 8px 6px;
  @media (max-width: ${breakpoints.mobileM}) {
    grid-template-columns: auto;
  }
`;

const Title = styled(H1)`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  font-size: 22px;
  line-height: 25px;
  text-align: left;
  path {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
`;

const ContainerAuthor = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  @media (max-width: ${breakpoints.mobileM}) {
    grid-template-columns: auto auto;
  }
`;

const NameAuthor = styled(Text)`
  display: none;
  font-size: 20px;
  line-height: 22px;
  text-align: left;
  @media (max-width: ${breakpoints.mobileM}) {
    display: block;
  }
`;

const Author = styled(Text)`
  font-size: 20px;
  line-height: 22px;
  text-align: left;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

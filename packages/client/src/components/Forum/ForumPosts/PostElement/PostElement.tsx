import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import iconMessage from 'images/forum/icon2.svg';
import { Text } from 'src/design/Text';
import { breakpoints } from 'src/components/App/constants';
import { Link } from 'src/components/Link';
import { paths } from 'components/App/constants';
import { TPost } from 'components/Forum/types';

const { forum } = paths;

const PostElement = ({ id, author, title }: TPost) => {
  return (
    <Containers>
      <Title>
        <Icon src={iconMessage} alt="icon message" />
        <Link to={`${forum.index}/${id}`}>{title}</Link>
      </Title>
      <ContainerAuthor>
        <NameAuthor>Author:</NameAuthor>
        <Author>
          {author.first_name} {author.second_name}
        </Author>
      </ContainerAuthor>
    </Containers>
  );
};

export default PostElement;

const Containers = styled('div')`
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-top: 2px solid ${({ theme }) => theme.colors.core.text.primary};
  padding: 8px 6px;
  @media (max-width: ${breakpoints.mobileM}) {
    grid-template-columns: auto;
  }
`;

const Icon = styled.img`
  margin: 0 10px 0 0;
`;

const Title = styled(H1)`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  padding: 0;
  font-size: 22px;
  line-height: 25px;
  text-align: left;
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

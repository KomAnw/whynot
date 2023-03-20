import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import iconMessage from 'images/forum/icon2.svg';
import { Text } from 'src/design/Text';
import { breakpoints } from 'src/components/App/constants';

const PostElement = () => {
  return (
    <Containers>
      <Icon src={iconMessage} alt="icon message" />
      <NamePost>
        ddddddd ddddddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd ddddd
        ddddd ddddd ddddd ddddd ddddd
      </NamePost>
      <NameAuthor>Author:</NameAuthor>
      <Author>Карлсон</Author>
    </Containers>
  );
};

export default PostElement;

const Containers = styled('div')`
  display: grid;
  grid-template-areas:
    'Icon Title'
    'NameAuthor Author';
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-top: 2px solid #6457b8;
  padding: 8px 6px;
  @media (max-width: ${breakpoints.mobileM}) {
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-template-areas: 'Icon Title Author';
  }
`;

const Icon = styled.img`
  grid-area: Icon;
`;

const NamePost = styled(H1)`
  padding-left: 10px;
  font-size: 22px;
  line-height: 25px;
  text-align: left;
  grid-area: Title;
`;

const NameAuthor = styled(Text)`
  font-size: 20px;
  line-height: 22px;
  text-align: left;
  grid-area: NameAuthor;
  @media (max-width: ${breakpoints.mobileM}) {
    display: none;
  }
`;

const Author = styled(Text)`
  font-size: 20px;
  line-height: 22px;
  text-align: left;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
  grid-area: Author;
`;

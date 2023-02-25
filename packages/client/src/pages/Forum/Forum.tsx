import { paths } from 'src/components/App/constants';
import { Link } from 'src/components/Link';
import { H1 } from 'src/design/H1';
import { ListText } from 'src/design/ListText';
import { Text } from 'src/design/Text';
import styled from 'styled-components';

const Forum = () => {
  return (
    <Container>
      <StyledH1>В скором времени здесь появится форум... (или ваша реклама &#128521;)</StyledH1>
      <StyledText>На форуме можно будет:</StyledText>
      <Ul>
        <Element>Создать/Удалить/Редактировать тему</Element>
        <Element>Писать комментарии к теме</Element>
        <Element>Редактировать и удалять свои комментарии</Element>
      </Ul>
      <StyledLink to={paths.menu} variant="size30">
        Назад в меню
      </StyledLink>
    </Container>
  );
};

export default Forum;

const Container = styled('div')`
  width: max-content;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  align-content: center;
  gap: 10px;
`;

const Ul = styled('ul')`
  margin-left: 25px;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.core.text.secondary};
`;

const StyledH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.core.text.secondary};
`;

const Element = styled(ListText)`
  color: ${({ theme }) => theme.colors.core.text.secondary};
`;

const StyledLink = styled(Link)`
  margin-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.secondary};
  &:hover {
    color: ${({ theme }) => theme.colors.core.text.quaternary};
    text-decoration: underline;
  }
`;

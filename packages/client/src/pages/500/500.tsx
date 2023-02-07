import styled from 'styled-components';
import { paths } from '../../components/App/constants';
import { H1 } from '../../design/H1';
import { H3 } from '../../design/H3';

const { welcome } = paths;

const Page500 = () => {
  return (
    <Container>
      <H1>500</H1>
      <H3>Ошибка сервера</H3>
      <a href={welcome}>Вернутся на главную страницу</a>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
  height: 100vw;
  background: ${({ theme }) => theme.colors.core.background.primary};
`;

export default Page500;

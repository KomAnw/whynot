import styled from 'styled-components';
import { paths } from '../../components/App/constants';

const { welcome } = paths;

const Page500 = () => {
  return (
    <Container>
      <h2>500</h2>
      <h4>Ошибка сервера</h4>
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

/*
 * Заготовка страницы 500 без стилей и нужных компонентов
 * Необходимы компоненты: H2, H4 и Link
 *  <H2>500</H2>
 *  <H4>Ошибка сервера</H4>
 *  <Link to={welcome}>Вернутся на главную страницу</Link>
 * Вверху реализована минимальная стилизация
 */

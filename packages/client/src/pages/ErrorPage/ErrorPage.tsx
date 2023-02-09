import styled from 'styled-components';
import { breakpoints, paths } from '../../components/App/constants';
import { H3 } from '../../design/H3';

const { welcome } = paths;
const { mobileM } = breakpoints;

const ErrorPage = () => {
  return (
    <Page>
      <Container>
        <H3>
          Что то пошло не так,
          <br />
          не переживай
        </H3>
        <Wrapper>
          <ImageHomer src="/gomer500.png" alt="Angry Gomer" />
          <BigText>500</BigText>
        </Wrapper>
        <Link href={welcome}>
          <H3>в меню</H3>
        </Link>
      </Container>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 620px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.core.background.primary};

  @media (max-width: ${mobileM}) {
    width: 354px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.core.background.primary};

  @media (max-width: ${mobileM}) {
    flex-direction: column;
    height: 360px;
  }
`;

const BigText = styled.div`
  font-size: 224px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.core.link.link};

  @media (max-width: ${mobileM}) {
    font-size: 100px;
    line-height: 0px;
    margin-top: 60px;
  }
`;

const ImageHomer = styled.img`
  width: 300px;
  height: 278px;
  margin-left: 12px;
`;

const Link = styled.a`
  padding: 50px 0 10px 0;

  @media (max-width: ${mobileM}) {
    padding: 0 0 10px 0;
  }
`;

export default ErrorPage;

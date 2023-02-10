import styled from 'styled-components';
import { breakpoints, paths } from 'components/App/constants';
import { Label } from 'src/design/Label';
import { H3 } from 'src/design/H3';
import { Link } from 'components/Link';
import gomer from 'assets/images/gomer500.svg';

const { welcome } = paths;
const { mobileM } = breakpoints;

const ErrorPage = () => {
  return (
    <Page>
      <Container>
        <TitleText>Что то пошло не так,</TitleText>
        <TitleText>не переживай</TitleText>
        <Wrapper>
          <ImageHomer src={gomer} alt="Angry Gomer" />
          <BigText>500</BigText>
        </Wrapper>
        <Link to={welcome} variant="size30">
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
  padding-top: 20px;
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
  margin-top: 40px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.core.background.primary};

  @media (max-width: ${mobileM}) {
    flex-direction: column;
    height: 360px;
  }
`;

const TitleText = styled(H3).attrs({ as: 'h3' })`
  line-height: 40px;
  margin: 10px 0 0 0;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const BigText = styled(Label).attrs({ as: 'div' })`
  font-size: 224px;

  @media (max-width: ${mobileM}) {
    font-size: 100px;
    line-height: 0;
    margin-top: 60px;
  }
`;

const ImageHomer = styled.img`
  width: 300px;
  height: 278px;
  margin-left: 12px;
`;

export default ErrorPage;

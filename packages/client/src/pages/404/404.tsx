import styled from 'styled-components';
import { H1 } from 'src/design/H1';
import { breakpoints } from 'components/App/constants';
import img from '../../../public/gomer404.png';

const { mobileM } = breakpoints;

const Page404 = () => {
  return <Container>
    <PageStyle>
      <TextH1>Что то пошло не так, не переживай</TextH1>
      <ImgDiv/>
      <TextH2>404</TextH2>
      <TextH4>в меню</TextH4>
    </PageStyle>
  </Container>;
};

export default Page404;

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
  @media (max-width: ${mobileM}) {
  }
`;

const PageStyle = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  justify-items: center;
  width: 600px;
  height: 720px;
  background: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-column-gap: 26px;
  grid-template-areas: 
    "h1 h1"
    "img h2"
    "h4 h4";
  @media (max-width: ${mobileM}) {
    width: 354px;
    height: 636px;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
    grid-column-gap: 0px;
    grid-row-gap: 6px;
    grid-template-areas: 
    "h1"
    "img"
    "h2"
    "h4";
  }
`;

const TextH1 = styled(H1)`
  margin: 24px 0 75px 0;
  padding: 0px;
  width: 282px;
  display: grid;
  text-align: center;
  grid-area: h1;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.core.text.primary};
  @media (max-width: ${mobileM}) {
    margin: 12px 0 6px 0;
  }
`;

const ImgDiv = styled.div`
  margin: 0 0 0 12px;
  padding: 0px;
  height: 342px;
  width: 300px;
  display: grid;
  grid-area: img;
  background-image: url(${img});
  @media (max-width: ${mobileM}) {
    margin: 0;
  }
`;

const TextH2 = styled(H1)`
  margin: 0 14px 0 0;
  padding: 0px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-area: h2;
  font-size: 200px;
  line-height: 224px;
  color: ${({ theme }) => theme.colors.core.text.primary};
  @media (max-width: ${mobileM}) {
    font-size: 100px;
    line-height: 112px;
    margin: 0;
  }
`;

const TextH4 = styled(H1)`
  margin: 107px 0 48px 0;
  padding: 0px;
  display: grid;
  grid-area: h4;
  font-size: 30px;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.core.text.primary};
  @media (max-width: ${mobileM}) {
    margin: 6px 0 16px 0;
  }
`;

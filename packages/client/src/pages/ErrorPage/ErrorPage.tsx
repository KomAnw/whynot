import styled from 'styled-components';
import { breakpoints, paths } from 'src/components/App/constants';
import { Label } from 'src/design/Label';
import { H3 } from 'src/design/H3';

const { menu } = paths;
const { mobileM } = breakpoints;
const homer = '/images/common/homer500.svg';

const ErrorPage = () => {
  const onclickHandler = () => {
    window.location.replace(menu);
  };

  return (
    <Page>
      <Container>
        <TitleText>Что то пошло не так,</TitleText>
        <TitleText>не переживай</TitleText>
        <Wrapper>
          <ImageHomer src={homer} alt="Angry Homer" />
          <BigText>500</BigText>
        </Wrapper>
        <StyledH3 onClick={onclickHandler}>в меню</StyledH3>
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

const StyledH3 = styled(H3)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
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

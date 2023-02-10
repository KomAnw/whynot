import styled from 'styled-components';
import { breakpoints } from 'components/App/constants';
import { H1 } from 'src/design/H1';
import Link from 'src/components/Link'
import { LinkText } from 'src/design/LinkText';
import { Button } from 'src/components/Button';

const { mobileM } = breakpoints;

const ProfileEditData = () => {

  return (
    <Container>
      <PageStyle>
        <TextH1>Редактирование данных</TextH1>
        <Data>
          wwd
        </Data>
        <ButtonStyle>
          <Button type="button" variant="primary">СОХРАНИТЬ</Button>
        </ButtonStyle>
        <LinkStyle>
          <Link url='/profile' variant='size30'>назад</Link>
        </LinkStyle>
      </PageStyle>
    </Container>
  );
};

export default ProfileEditData;

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const PageStyle = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  justify-items: center;
  width: 402px;
  height: 636px;
  background: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  grid-template-columns: auto;
  grid-column-gap: 26px;
  @media (max-width: ${mobileM}) {
    width: 354px;
  }
`;

const TextH1 = styled(H1)`
  margin: 14px 0 0 0;
  padding: 0;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Data = styled.div`
  margin: 68px 0 0 0;
  padding: 0;
  display: grid;
  text-align: center;
  grid-row-gap: 24px;

`;

const ButtonStyle = styled.div`
  margin: 48px 0 0 0;
  padding: 0;
  display: grid;
  line-height: 37px;
  font-size: 32px;
`;

const LinkStyle = styled(LinkText)`
  margin: 8px 0 12px 0;
  padding: 0;
  height: 22px;
  display: grid;
`;

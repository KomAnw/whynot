import styled from 'styled-components';
import { breakpoints, paths } from 'src/components/App/constants';
import { H1 } from 'src/design/H1';
import { H3 } from 'src/design/H3';
import { Link } from 'src/components/Link';
import { Label } from 'src/design/Label';
import { LinkText } from 'src/design/LinkText';
import defaultAvatar from 'src/assets/defaultAvatar.svg';
import { CenterDivContainer } from 'src/design/CenterDivContainer';
import { MiniDivForm } from 'src/design/MiniDivForm';

const { mobileM } = breakpoints;
const { menu } = paths;
const { updateData, updatePassword } = paths.profile;

const Profile = () => {
  return (
    <Container>
      <PageStyle>
        <TextH1>Профиль</TextH1>
        <Avatar src={defaultAvatar} />
        <Data>
          <DataRow>
            <DataLabel>First Name:</DataLabel>
            <DataValue>Иван</DataValue>
          </DataRow>
          <DataRow>
            <DataLabel>Second Name:</DataLabel>
            <DataValue>Иванов</DataValue>
          </DataRow>
          <DataRow>
            <DataLabel>Nickname:</DataLabel>
            <DataValue>Ivan2002</DataValue>
          </DataRow>
          <DataRow>
            <DataLabel>Login:</DataLabel>
            <DataValue>Ivan2002</DataValue>
          </DataRow>
          <DataRow>
            <DataLabel>Email:</DataLabel>
            <DataValue>ivan2002@mail.ru</DataValue>
          </DataRow>
          <DataRow>
            <DataLabel>Phone:</DataLabel>
            <DataValue>+79053333333</DataValue>
          </DataRow>
        </Data>
        <TextH3>
          <Link to={updateData} variant="size24">
            Редактировать данные
          </Link>
        </TextH3>
        <TextH3>
          <Link to={updatePassword} variant="size24">
            Изменить пароль
          </Link>
        </TextH3>
        <TextH4>
          <Link to={menu} variant="size20">
            Назад в меню
          </Link>
        </TextH4>
      </PageStyle>
    </Container>
  );
};

export default Profile;

const Container = styled(CenterDivContainer)``;

const PageStyle = styled(MiniDivForm)`
  display: grid;
  justify-items: center;
  grid-template-columns: auto;
  grid-column-gap: 26px;
`;

const TextH1 = styled(H1)`
  margin: 14px 0 0 0;
  padding: 0;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Avatar = styled.img`
  margin: 22px 0 0 0;
  padding: 0;
  left: 138px;
  top: 138px;
  border-radius: 50%;
`;

const Data = styled.div`
  margin: 20px 0 19px 0;
  padding: 0;
  display: grid;
  text-align: center;
  grid-row-gap: 10px;
`;

const DataRow = styled.div`
  margin: 0;
  padding: 0;
  width: 354px;
  height: 32px;
  display: grid;
  grid-template-columns: 100px 254px;
  align-items: center;
  justify-items: start;
  border-bottom: solid 1px ${({ theme }) => theme.colors.core.text.primary};
  @media (max-width: ${mobileM}) {
    width: 330px;
    grid-template-columns: 100px 230px;
  }
`;

const DataLabel = styled(Label)`
  margin: 0;
  padding: 0;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const DataValue = styled(LinkText)`
  margin: 0;
  padding: 0;
  display: grid;
  color: ${({ theme }) => theme.colors.core.text.tertiary};
  font-weight: 400;
`;

const TextH3 = styled(LinkText)`
  margin: 12px 0 0 0;
  padding: 0;
  display: grid;
`;

const TextH4 = styled(H3)`
  margin: 30px 0 18px 0;
  padding: 0;
  height: 22px;
  display: grid;
`;
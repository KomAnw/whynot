import styled from 'styled-components';
import { breakpoints } from 'components/App/constants';
import { H1 } from 'src/design/H1';
import { H3 } from 'src/design/H3';
import Link from 'src/components/Link'
import React from 'react';
import { Label } from 'src/design/Label';
import { LinkText } from 'src/design/LinkText';
import defaultAvatar from 'src/assets/defaultAvatar.svg'

const { mobileM } = breakpoints;

const ProfileEditPassword = () => {
  return (
    <Container>
      <PageStyle>
        <TextH1>Профиль</TextH1>
        <Avatar src={defaultAvatar}/>
        <Data>
          <DataRow>
            <DataLabel>Nickname:</DataLabel>
            <DataValue>Ivan2002</DataValue>
          </DataRow>
          <DataRow>
            <DataLabel>First Name:</DataLabel>
            <DataValue>Иван</DataValue>
          </DataRow>
          <DataRow>
            <DataLabel>Last Name:</DataLabel>
            <DataValue>Иванов</DataValue>
          </DataRow>
          <DataRow>
            <DataLabel>Email:</DataLabel>
            <DataValue>ivan2002@mail.ru</DataValue>
          </DataRow>
        </Data>
        <TextH3>Редактировать данные</TextH3>
        <TextH3>Изменить пароль</TextH3>
        <TextH4>
          <Link url='/' variant='size20'>Назад в меню</Link>
        </TextH4>
      </PageStyle>
    </Container>
  );
};

export default ProfileEditPassword;

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

const Avatar = styled.img`
  margin: 22px 0 0 0;
  padding: 0;
  left: 138px;
  top: 138px;
  border-radius: 50%;
`;

const Data = styled.div`
  margin: 41px 0 28px 0;
  padding: 0;
  display: grid;
  text-align: center;
  grid-row-gap: 24px;

`;

const DataRow = styled(H3).attrs({ as: 'div' })<React.HTMLProps<HTMLDivElement>>`
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

import styled from 'styled-components';
import { CenterDivContainer } from 'src/design/CenterDivContainer';
import ProfileForm from 'src/components/Forms/ProfileForm/ProfileForm';
import { TypeDataProfile } from 'src/pages/Profile/types';
import Portal from 'src/components/Portal';
import { useState } from 'react';
import ProfileUpdateAvatar from 'pages/Profile/pages/ProfileUpdateAvatar';

const valueData: TypeDataProfile = {
  firstName: 'Иван',
  secondName: 'Иванов',
  login: 'Ivan2002',
  email: 'Ivan2002',
  phone: '+79053333333',
};

const Profile = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <Container>
      <ProfileForm data={valueData} />
      {isOpenPopup ? (
        <Portal>
          <ProfileUpdateAvatar onClose={setIsOpenPopup} />
        </Portal>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Profile;

const Container = styled(CenterDivContainer)``;

import styled from 'styled-components';
import { CenterDivContainer } from 'src/design/CenterDivContainer';
import ProfileForm from 'src/components/Forms/ProfileForm/ProfileForm';
import { typeDataProfile } from 'src/pages/Profile/type';

const valueData: typeDataProfile = {
  firstName: 'Иван',
  secondName: 'Иванов',
  login: 'Ivan2002',
  email: 'Ivan2002',
  phone: '+79053333333',
};

const Profile = () => {
  return (
    <Container>
      <ProfileForm data={valueData} />
    </Container>
  );
};

export default Profile;

const Container = styled(CenterDivContainer)``;

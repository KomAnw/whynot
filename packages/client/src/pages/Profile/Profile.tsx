import styled from 'styled-components';
import { CenterDivContainer } from 'src/design/CenterDivContainer';
import ProfileForm from 'src/components/Forms/ProfileForm/ProfileForm';

const Profile = () => {
  return (
    <Container>
      <ProfileForm />
    </Container>
  );
};

export default Profile;

const Container = styled(CenterDivContainer)``;

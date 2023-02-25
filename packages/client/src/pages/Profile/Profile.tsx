import styled from 'styled-components';
import ProfileForm from 'src/components/Forms/ProfileForm/ProfileForm';

const Profile = () => {
  return (
    <Container>
      <ProfileForm />
    </Container>
  );
};

export default Profile;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: center;
  justify-items: center;
`;

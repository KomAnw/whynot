import styled from 'styled-components';
import { CenterDivContainer } from 'src/design/CenterDivContainer';
import ProfileForm from 'src/components/Forms/ProfileForm/ProfileForm';
import { useGetUserQuery } from 'src/api/auth/auth';

const Profile = () => {
  const { data } = useGetUserQuery();
  let dataUser = {};

  if (data) {
    dataUser = data;
  }

  return (
    <Container>
      <ProfileForm data={dataUser} />
    </Container>
  );
};

export default Profile;

const Container = styled(CenterDivContainer)``;

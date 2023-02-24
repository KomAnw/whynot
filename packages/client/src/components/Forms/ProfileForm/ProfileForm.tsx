import { Link } from 'src/components/Link';
import defaultAvatar from 'src/assets/defaultAvatar.svg';
import { useGetUserQuery } from 'src/api/auth/auth';
import { apiSettings } from 'src/api';
import { Avatar, Data, DataLabel, DataRow, DataValue, PageStyle, TextH1 } from './styles';
import { dataRowData, links } from './constants';

const baseUrlAvatar = `${apiSettings.baseUrl}/resources`;

const Profile = () => {
  const { data: userData } = useGetUserQuery();
  const userAvatar = userData?.avatar && baseUrlAvatar + userData.avatar;

  return (
    <PageStyle>
      <TextH1>Profile</TextH1>
      <Avatar src={userAvatar || defaultAvatar} />
      <Data>
        {dataRowData.map(({ name, label }) => {
          const value = (userData && userData[name]) || '';

          return (
            <DataRow key={name}>
              <DataLabel>{label} :</DataLabel>
              <DataValue>{value}</DataValue>
            </DataRow>
          );
        })}
      </Data>
      {links.map(({ Wrapper, id, ...props }) => (
        <Wrapper key={id}>
          <Link {...props} />
        </Wrapper>
      ))}
    </PageStyle>
  );
};

export default Profile;

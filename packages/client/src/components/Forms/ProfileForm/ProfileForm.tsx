import { Link } from 'src/components/Link';
import { useState } from 'react';
import { useGetUserQuery } from 'src/api/auth/auth';
import { YANDEX_API_URL } from 'src/api/common/consts/apiConsts';
import { Avatar, Data, DataLabel, DataRow, DataValue, PageStyle, TextH1 } from './styles';
import { dataRowData, links } from './constants';
import ProfileAvatar from '../ProfileAvatar';

const baseUrlAvatar = `${YANDEX_API_URL}/resources`;
const defaultAvatar = '/images/common/defaultAvatar.svg';

const Profile = () => {
  const { data: userData } = useGetUserQuery();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const userAvatar = userData?.avatar && baseUrlAvatar + userData.avatar;

  return (
    <>
      <PageStyle>
        <TextH1>Profile</TextH1>
        <Avatar src={userAvatar || defaultAvatar} onClick={() => setIsPopupOpen(true)} />
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
        {links.map(({ Wrapper, id, to, variant, children }) => (
          <Wrapper key={id}>
            <Link to={to} variant={variant}>
              {children}
            </Link>
          </Wrapper>
        ))}
      </PageStyle>
      {isPopupOpen && <ProfileAvatar setIsPopupOpen={setIsPopupOpen} />}
    </>
  );
};

export default Profile;

import { Link } from 'src/components/Link';
import defaultAvatar from 'images/common/defaultAvatar.svg';
import Portal from 'components/Portal';
import { useCallback, useMemo, useState } from 'react';
import { useGetUserQuery } from 'src/api/auth/auth';
import { apiSettings } from 'src/api';
import { Avatar, Data, DataLabel, DataRow, DataValue, PageStyle, TextH1 } from './styles';
import { dataRowData, links, ProfilePopupContext } from './constants';
import ProfileAvatar from '../ProfileAvatar';

const baseUrlAvatar = `${apiSettings.baseUrl}/resources`;

const Profile = () => {
  const { data: userData } = useGetUserQuery();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const userAvatar = userData?.avatar && baseUrlAvatar + userData.avatar;
  const openPopup = useCallback(() => setIsOpenPopup(!isOpenPopup), [isOpenPopup]);
  const contextValue = useMemo(() => ({ changeState: openPopup }), [openPopup]);

  return (
    <>
      <PageStyle>
        <TextH1>Profile</TextH1>
        <Avatar src={userAvatar || defaultAvatar} onClick={() => openPopup()} />
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
      {isOpenPopup && (
        <Portal>
          <ProfilePopupContext.Provider value={contextValue}>
            <ProfileAvatar />
          </ProfilePopupContext.Provider>
        </Portal>
      )}
    </>
  );
};

export default Profile;

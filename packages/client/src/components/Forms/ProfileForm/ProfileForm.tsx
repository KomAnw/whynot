import styled from 'styled-components';
import { breakpoints, paths } from 'src/App/constants';
import { H1 } from 'src/design/H1';
import { H3 } from 'src/design/H3';
import { Link } from 'src/components/Link';
import { Label } from 'src/design/Label';
import { LinkText } from 'src/design/LinkText';
import defaultAvatar from 'src/assets/defaultAvatar.svg';
import { MiniDivForm } from 'src/design/MiniDivForm';
import { formsConsts } from 'src/components/Forms/consts/formsConsts';
import { baseUrlAvatar } from 'src/api';
import { useGetUserQuery } from 'src/api/auth/auth';

const DataRowData = [
  { name: formsConsts.firstName.name, label: formsConsts.firstName.label },
  { name: formsConsts.secondName.name, label: formsConsts.secondName.label },
  { name: formsConsts.displayName.name, label: formsConsts.displayName.label },
  { name: formsConsts.login.name, label: formsConsts.login.label },
  { name: formsConsts.email.name, label: formsConsts.email.label },
  { name: formsConsts.phone.name, label: formsConsts.phone.label },
];

const { mobileM } = breakpoints;
const { menu } = paths;
const { updateData, updatePassword } = paths.profile;

const Profile = () => {
  const { data } = useGetUserQuery();

  const dataUpdate = DataRowData.map(item => {
    return { ...item, value: data && item.name ? data[item.name] : '' };
  });

  return (
    <PageStyle>
      <TextH1>Profile</TextH1>
      <Avatar src={data && data.avatar ? baseUrlAvatar + data.avatar : defaultAvatar} />
      <Data>
        {dataUpdate.map(item => (
          <DataRow key={item.name}>
            <DataLabel>{item.label} :</DataLabel>
            <DataValue>{item.value}</DataValue>
          </DataRow>
        ))}
      </Data>
      <TextLink>
        <Link to={updateData} variant="size24">
          Edit data
        </Link>
      </TextLink>
      <TextLink>
        <Link to={updatePassword} variant="size24">
          Edit password
        </Link>
      </TextLink>
      <TextLinkBack>
        <Link to={menu} variant="size20">
          back
        </Link>
      </TextLinkBack>
    </PageStyle>
  );
};

export default Profile;

const PageStyle = styled(MiniDivForm)`
  display: grid;
  justify-items: center;
`;

const TextH1 = styled(H1)`
  height: 45px;
  margin: 14px 0 0 0;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Avatar = styled.img`
  margin: 22px 0 0 0;
  height: 138px;
  width: 138px;
  border-radius: 50%;
`;

const Data = styled.div`
  margin: 20px 0 19px 0;
  height: 242px;
  padding: 0;
  display: grid;
  text-align: center;
  grid-row-gap: 10px;
`;

const DataRow = styled.div`
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
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const DataValue = styled(LinkText)`
  display: grid;
  color: ${({ theme }) => theme.colors.core.text.tertiary};
  font-weight: 400;
`;

const TextLink = styled(LinkText)`
  height: 27px;
  margin: 12px 0 0 0;
  padding: 0;
  display: grid;
`;

const TextLinkBack = styled(H3)`
  margin: 20px 0 0 0;
  padding: 0;
  height: 22px;
  display: grid;
`;

import { TypeAvatarProps } from 'src/pages/Profile/types';

const ProfileUpdateAvatar = (props: TypeAvatarProps) => {
  const onClick = () => {
    props.onClose(false);
  };

  return (
    <div>
      <button onClick={onClick}>Close</button>
    </div>
  );
};

export default ProfileUpdateAvatar;

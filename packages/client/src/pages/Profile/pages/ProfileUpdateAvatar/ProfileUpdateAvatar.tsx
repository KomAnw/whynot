import { TypeAvatarProps } from 'src/pages/Profile/types';
import styled from 'styled-components';
import { MiniDivForm } from 'src/design/MiniDivForm';
import { H1 } from 'src/design/H1';
import { Button } from 'components/Button';

const ProfileUpdateAvatar = (props: TypeAvatarProps) => {
  const onClick = () => {
    props.setIsOpenPopup(false);
  };

  const submitForm = () => {
    // eslint-disable-next-line no-console
    console.log('yes');
  };

  return (
    <ModalStyle>
      <PageStyle>
        <Form onSubmit={submitForm}>
          <TextH1>Edit Avatar</TextH1>
          <Input type="file" />
          <Button variant="primary" type="submit">
            Apply
          </Button>
        </Form>
        <ButtonX onClick={onClick}>x</ButtonX>
      </PageStyle>
    </ModalStyle>
  );
};

export default ProfileUpdateAvatar;

const ModalStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
`;

const ButtonX = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-family: Arial, serif;
  color: ${({ theme }) => theme.colors.core.text.primary};
  font-size: 20px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

const PageStyle = styled(MiniDivForm)`
  position: relative;
  display: grid;
  justify-items: center;
  width: 354px;
  height: 372px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  padding: 12px 24px;
`;

const TextH1 = styled(H1)`
  height: 45px;
  margin: 14px 0 0 0;
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Form = styled.form`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Input = styled.input`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  background-color: deepskyblue;
  color: ${({ theme }) => theme.colors.core.text.primary};
  &
`;

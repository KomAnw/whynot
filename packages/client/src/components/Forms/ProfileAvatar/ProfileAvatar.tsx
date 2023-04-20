import styled from 'styled-components';
import { useChangeAvatarMutation } from 'src/api/user/user';
import { H1 } from 'src/design/H1';
import { LinkText } from 'src/design/LinkText';
import { Button } from 'src/components/Button';
import Portal from 'components/Portal';
import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { breakpoints } from 'src/components/App/constants';
import { useDispatch } from 'react-redux';
import { authApi } from 'src/api/auth/auth';
import { logger } from 'src/utils/logger';
import type { AvatarData, ProfileAvatarProps } from './types';

const ProfileAvatar = ({ setIsPopupOpen }: ProfileAvatarProps) => {
  const [avatar] = useChangeAvatarMutation();
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState('');
  const { register, handleSubmit, getValues } = useForm<AvatarData>();

  const onChangeFile = () => {
    setFileName(getValues().file[0].name);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const submitForm: SubmitHandler<AvatarData> = async ({ file }) => {
    try {
      const formData: FormData = new FormData();

      formData.append('avatar', file[0]);
      const response = await avatar(formData);

      dispatch(authApi.util.invalidateTags(['User']));
      response && closePopup();
    } catch (error) {
      logger(error, 'error');
    }
  };

  return (
    <Portal>
      <ModalStyle>
        <PageStyle>
          <Form onSubmit={handleSubmit(submitForm)} onChange={onChangeFile}>
            <TextH1>Edit Avatar</TextH1>
            <InputWrapper>
              <LabelForm>
                <Input type="file" {...register('file')} />
                choose file...
              </LabelForm>
              <FileName>{fileName}</FileName>
            </InputWrapper>
            <Button variant="primary" type="submit">
              Apply
            </Button>
          </Form>
          <ButtonX onClick={closePopup}>x</ButtonX>
        </PageStyle>
      </ModalStyle>
    </Portal>
  );
};

export default ProfileAvatar;

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

const PageStyle = styled('div')`
  position: relative;
  display: grid;
  justify-items: center;
  width: 354px;
  height: 372px;
  padding: 24px 24px;
  margin: 0;
  background: ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  @media (max-width: ${breakpoints.mobileM}) {
    width: 354px;
  }
`;

const TextH1 = styled(H1)`
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Form = styled('form')`
  display: grid;
  justify-items: center;
  align-content: space-between;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 98px auto;
`;

const Input = styled(LinkText).attrs({ as: 'input' })<InputHTMLAttributes<HTMLInputElement>>`
  &[type='file'] {
    display: none;
  }
`;

const LabelForm = styled(LinkText).attrs({ as: 'label' })`
  display: grid;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const FileName = styled(LinkText).attrs({ as: 'div' })`
  display: grid;
  height: 48px;
  width: 220px;
  padding: 0 5px;
  border-radius: 5px;
  justify-items: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.control.input.background};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

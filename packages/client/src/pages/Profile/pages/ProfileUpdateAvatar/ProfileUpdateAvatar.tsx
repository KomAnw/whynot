import { TypeAvatarProps } from 'src/pages/Profile/types';
import styled from 'styled-components';
import { MiniDivForm } from 'src/design/MiniDivForm';
import { useChangeAvatarMutation } from 'src/api/user/user'
import { H1 } from 'src/design/H1';
import { LinkText } from 'src/design/LinkText';
import { Button } from 'src/components/Button';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { InputProps, onChangeProps } from 'src/pages/Profile/pages/ProfileUpdateAvatar/types';
import { TAvatarRequest } from 'src/api/user/models';

const ProfileUpdateAvatar = (props: TypeAvatarProps) => {
  const [fileName, setFileName] = useState('');

  const { register, handleSubmit } = useForm({ mode: 'all' });

  const onChangeFile = (event: onChangeProps) => {
    const { files } = event.target;

    if (files) {
      const { name } = files[0];

      setFileName(name);
    }
  };

  const onClick = () => {
    props.setIsOpenPopup(false);
  };

  const [avatar] = useChangeAvatarMutation();

  const submitForm = async (data: TAvatarRequest) => {
    try {
      await avatar(data);

      onClick();
    } catch (error) {
      console.log(error);
      onClick();
    }
  };

  return (
    <ModalStyle>
      <PageStyle>
        <Form onSubmit={handleSubmit(submitForm as SubmitHandler<FieldValues>)}>
          <TextH1>Edit Avatar</TextH1>
          <DivInput>
            <LabelForm>
              <Input type="file" register={register} onChange={onChangeFile} />
              choose file...
            </LabelForm>
            <FileName>{fileName}</FileName>
          </DivInput>
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
  padding: 24px 24px;
`;

const TextH1 = styled(H1)`
  display: grid;
  text-align: center;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Form = styled.form`
  display: grid;
  justify-items: center;
  align-content: space-between;
`;

const DivInput = styled.div`
  display: grid;
  grid-template-columns: 98px auto;
`;

const Input = styled.input<InputProps>`
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

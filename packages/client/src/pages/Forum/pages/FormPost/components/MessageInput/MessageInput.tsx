import styled from 'styled-components';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
/*
 * import type { InputHTMLAttributes } from 'react';
 * import { LinkText } from 'src/design/LinkText';
 */
import { IconButtonSend } from 'pages/Forum/components/IconButtonSend';
import { Text } from 'src/design/Text';
import { Input } from 'src/components/Input';
import { InputStyled } from 'src/components/Input/Input';

export type TInputPost = {
  inputPosts: string;
};

const MessageInput = () => {
  const { resetField, register, handleSubmit } = useForm<TInputPost>({
    mode: 'all',
  });

  const submitForm: SubmitHandler<TInputPost> = async data => {
    try {
      resetField('inputPosts');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Header>
        <Title>Кому:</Title>
        <Direction>Всем</Direction>
      </Header>
      <Footer>
        <RestyledInput
          label=""
          name="input"
          placeholder="Создать новую тему"
          register={register}
          type=""
          validationRules={{}}
        />
        {/* <InputStyled type="text" placeholder="Создать новую тему" {...register('inputPosts')} /> */}
        <Button type="submit">
          <IconButtonSend />
        </Button>
      </Footer>
    </Form>
  );
};

export default MessageInput;

const Form = styled('form')`
  display: grid;
  width: 100%;
  grid-template-rows: auto auto;
`;

const Header = styled('div')`
  display: flex;
`;

const Title = styled(Text)`
  margin-left: 32px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

const Direction = styled(Text)`
  margin-left: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.core.text.quaternary};
`;

const Footer = styled('div')`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 36px;
  align-items: center;
`;

const RestyledInput = styled(Input)`
  /* export any styled component inside input from input */
  ${InputStyled} {
    background: red;
  }
`;

/*
 * const InputStyled = styled(LinkText).attrs({ as: 'input' })<InputHTMLAttributes<HTMLInputElement>>`
 *   box-sizing: border-box;
 *   border-radius: 18px;
 *   padding-left: 26px;
 *   width: 100%;
 *   height: 100%;
 *   outline: none;
 *   background-color: ${({ theme }) => theme.colors.control.input.backgroundSecondary};
 *   border: none;
 *   color: ${({ theme }) => theme.colors.control.input.color};
 *   font-weight: 700;
 *   &::placeholder {
 *     color: ${({ theme }) => theme.colors.control.input.placeHolderSecondary};
 *     font-weight: 400;
 *   }
 * `;
 */

const Button = styled('button')`
  border: 0;
  width: 26px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  cursor: pointer;
  path {
    stroke: ${({ theme }) => theme.colors.core.text.primary};
  }
  &:hover {
    opacity: 0.7;
  }
`;

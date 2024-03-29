import { paths } from 'src/components/App/constants';
import { formsConsts } from '../consts/formsConsts';
import { TextLink, TextLinkBack } from './styles';

const {
  menu,
  profile: { updateData, updatePassword },
} = paths;

export const dataRowData = [
  { name: formsConsts.firstName.name, label: formsConsts.firstName.label },
  { name: formsConsts.secondName.name, label: formsConsts.secondName.label },
  { name: formsConsts.displayName.name, label: formsConsts.displayName.label },
  { name: formsConsts.login.name, label: formsConsts.login.label },
  { name: formsConsts.email.name, label: formsConsts.email.label },
  { name: formsConsts.phone.name, label: formsConsts.phone.label },
];
export const links = [
  { id: 1, to: updateData, variant: 'size24' as const, children: 'Edit data', Wrapper: TextLink },
  { id: 2, to: updatePassword, variant: 'size24' as const, children: 'Edit password', Wrapper: TextLink },
  { id: 3, to: menu, variant: 'size24' as const, children: 'Back to menu', Wrapper: TextLinkBack },
];

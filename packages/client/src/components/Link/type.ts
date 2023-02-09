import { ReactNode } from 'react';

export type sizeType = 'size20' | 'size24' | 'size30' | 'size40';

export type propsLink = {
  variant: sizeType;
  url: string;
  children: ReactNode;
};

export type propsLinkStyle = Pick<propsLink, 'variant'>;

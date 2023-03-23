import type { ReactNode } from 'react';

export type sizeType = 'size20' | 'size24' | 'size30' | 'size40';

export type propsLink = {
  to: string;
  children: ReactNode;
  variant?: sizeType;
  className?: string;
};

export type propsLinkStyle = Pick<propsLink, 'variant'>;

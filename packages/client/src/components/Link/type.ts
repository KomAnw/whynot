export type sizeType = 'small' | 'regular' | 'large';

export type propsLink = {
  variant: sizeType;
  url: string;
  children: string
}

export type propsLinkStyle = {
  fontSize: string;
  lineHeight: string;
}

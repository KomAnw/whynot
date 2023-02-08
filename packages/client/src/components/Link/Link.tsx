import styled from 'styled-components';
import { Link as LinkReact} from 'react-router-dom';
import { Typography } from 'src/design/Typography';
import React from 'react';
import { sizeType, propsLink, propsLinkStyle } from 'components/Link/type';

function creatStyleProps (variant: sizeType):propsLinkStyle  {
  switch(variant) {
    case 'small':
      return {fontSize: '20px', lineHeight: '27px'}
    case 'regular':
      return {fontSize: '40px', lineHeight: '47px'}
    case 'large':
      return {fontSize: '50px', lineHeight: '57px'}
    default:
      return {fontSize: '20px', lineHeight: '27px'};
  }
}

const Link = ({children, url, variant}: propsLink) => {
  const styleProps = creatStyleProps(variant);

  return (
    <LinkStyle to={url} {...styleProps}>{children}</LinkStyle>
  );
};

export default Link;

const LinkStyle = styled(Typography).attrs({ as: LinkReact })<propsLinkStyle
  & React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>>>`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`;

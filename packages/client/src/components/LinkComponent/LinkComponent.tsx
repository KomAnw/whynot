import styled, {css} from 'styled-components';
import { LinkText } from 'src/design/LinkText';
import { LinkProps, LinkStyleProps } from 'components/LinkComponent/type';
import { Link } from 'react-router-dom';

const LinkComponent = ({linkToValue, linkToText, style}: LinkProps) => {
  return (
    <LinkContainer {...style}>
      <Link to={linkToValue}>{linkToText}</Link>
    </LinkContainer>
  );
};

export default LinkComponent;

const LinkContainer = styled(LinkText)<LinkStyleProps>`
  cursor: pointer;
  text-decoration: none;
  ${props => props.fontSizeText && css`font-size: ${(props:LinkStyleProps)  => props.fontSizeText};`}
  ${props => props.lineHeightText && css`line-height: ${(props:LinkStyleProps) => props.lineHeightText};`}
  &:hover {
    opacity: 0.8;
  }
`;

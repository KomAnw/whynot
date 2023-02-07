import styled, {css} from 'styled-components';
import { LinkText } from 'src/design/LinkText';
import { LinkProps } from 'components/LinkComponent/type';
import { Link } from 'react-router-dom';

const LinkComponent = (props: LinkProps) => {
  return (
    <LinkContainer {...props}>
      <Link to={props.linkToValue}>{props.linkToText}</Link>
    </LinkContainer>
  );
};

export default LinkComponent;

const LinkContainer = styled(LinkText)`
  cursor: pointer;
  ${props => props.fontSizeText && css`font-size: ${props => props.fontSizeText};`}
  ${props => props.lineHeightText && css`line-height: ${props => props.lineHeightText};`}
  &:hover {
    opacity: 0.8;
  }
`;

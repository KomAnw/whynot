import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import { sizeType, propsLink, propsLinkStyle } from 'components/Link/type';

function creatStyleProps(variant: sizeType): propsLinkStyle {
  switch (variant) {
    case 'small':
      return { fontSize: '20px', lineHeight: '27px' };
    case 'regular':
      return { fontSize: '40px', lineHeight: '47px' };
    case 'large':
      return { fontSize: '50px', lineHeight: '57px' };
    default:
      return { fontSize: '20px', lineHeight: '27px' };
  }
}

function Link({ children, url, variant }: propsLink) {
  const styleProps = creatStyleProps(variant);

  return (
    <StyledLink {...styleProps} to={url}>
      {children}
    </StyledLink>
  );
}

export default Link;

const StyledLink = styled(ReactLink)<propsLinkStyle>`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.core.text.primary};
`;

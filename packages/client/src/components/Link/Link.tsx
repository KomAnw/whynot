import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import { propsLink, propsLinkStyle } from 'components/Link/type';

const styleProps = {
  size20: { fontSize: '20px', lineHeight: '22px' },
  size24: { fontSize: '24px', lineHeight: '27px' },
  size30: { fontSize: '30px', lineHeight: '34px' },
  size40: { fontSize: '40px', lineHeight: '45px' },
};

function Link({ children, url, variant = 'size20' }: propsLink) {

  return (
    <StyledLink {...styleProps[variant]} to={url}>
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

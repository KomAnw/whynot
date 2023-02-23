import styled, { css } from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import { propsLink, propsLinkStyle } from 'components/Link/type';

const styleProps = {
  size20: { fontSize: '20px', lineHeight: '22px' },
  size24: { fontSize: '24px', lineHeight: '27px' },
  size30: { fontSize: '30px', lineHeight: '34px' },
  size40: { fontSize: '40px', lineHeight: '45px' },
};

export const Link = styled(({ children, to, variant = 'size20', className }: propsLink) => {
  return (
    <StyledLink variant={variant} to={to} className={className}>
      {children}
    </StyledLink>
  );
})``;

const StyledLink = styled(ReactLink)<propsLinkStyle>`
  cursor: pointer;
  text-decoration: none;

  ${({ theme, variant }) => {
    const { fontSize, lineHeight } = styleProps[variant!];

    return css`
      &:hover {
        color: ${theme.colors.core.link.linkHover};
      }
      font-size: ${fontSize};
      line-height: ${lineHeight};
      font-family: ${theme.fonts.main};
      color: ${theme.colors.core.text.primary};
      &:hover {
        color: ${theme.colors.core.text.primary};
      }
    `;
  }}
`;

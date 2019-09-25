import * as React from 'react';
import { StyledLink } from './Link.style';

export interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
  children?: React.ReactText;
}

export const Link: React.FC<LinkProps> = (
  props: LinkProps
): React.ReactElement => {
  const { children, href, target } = props;

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.onClick) {
      e.preventDefault();
      props.onClick();
    }
  };

  return (
    <StyledLink
      href={href}
      target={target}
      onClick={onClick}
      rel={`noreferrer noopener`}
    >
      {children}
    </StyledLink>
  );
};

Link.displayName = `Link`;

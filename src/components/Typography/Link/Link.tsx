import * as React from 'react';
import { useEventHandlers } from '../../../hooks/useEventHandlers';
import { StyledLink } from './Link.style';

export interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
  /** custom className */
  className?: string;
}

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = (
  props: React.PropsWithChildren<LinkProps>
): React.ReactElement => {
  const { children, href, target, className } = props;
  const { onClick } = useEventHandlers({});

  return (
    <StyledLink
      href={href}
      target={target}
      onClick={onClick}
      rel={`noreferrer noopener`}
      className={className}
    >
      {children}
    </StyledLink>
  );
};

Link.displayName = `Link`;

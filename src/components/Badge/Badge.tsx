import React, { FC, ReactText } from 'react';
import { Size, Type } from '../../types';
import { StyledBadge, StyledIndicator } from './Badge.style';

export interface BadgeProps {
  children?: ReactText;
  /** primary | success | warning | error */
  type?: Type;
  /** small | medium | large */
  size?: Size;
  /** custom className */
  className?: string;
}

export const Badge: FC<BadgeProps> = props => {
  const { children, className, type, size } = props;

  if (!children) {
    return (
      <StyledIndicator
        className={className}
        type={type as Type}
        size={size as Size}
      />
    );
  }

  return (
    <StyledBadge className={className} type={type as Type} size={size as Size}>
      {children}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  type: 'default',
  size: 'small'
};

Badge.displayName = `Badge`;

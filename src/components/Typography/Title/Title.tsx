import React, { FC, PropsWithChildren, ReactElement, ReactText } from 'react';
import {
  StyledTitle1,
  StyledTitle2,
  StyledTitle3,
  StyledTitle4,
  StyledTitle5
} from './Title.style';

export type TitleLevel = 1 | 2 | 3 | 4 | 5;

export interface TitleProps {
  level?: TitleLevel;
  children: ReactText;
  /** custom className */
  className?: string;
}

export const Title: FC<PropsWithChildren<TitleProps>> = (
  props: PropsWithChildren<TitleProps>
): ReactElement => {
  const { children, level, className } = props;

  switch (level) {
    case 5:
      return (
        <StyledTitle5 key={children} className={className}>
          {children}
        </StyledTitle5>
      );
    case 4:
      return (
        <StyledTitle4 key={children} className={className}>
          {children}
        </StyledTitle4>
      );
    case 3:
      return (
        <StyledTitle3 key={children} className={className}>
          {children}
        </StyledTitle3>
      );
    case 2:
      return (
        <StyledTitle2 key={children} className={className}>
          {children}
        </StyledTitle2>
      );
    case 1:
    default:
      return (
        <StyledTitle1 key={children} className={className}>
          {children}
        </StyledTitle1>
      );
  }
};

Title.defaultProps = {
  level: 1
};

Title.displayName = `Title`;

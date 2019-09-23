import * as React from 'react';
import * as Icons from '../../Icons';
import { StyledIcon } from './Icon.style';

export type IconName =
  | 'arrowUp'
  | 'arrowDoubleUp'
  | 'arrowRight'
  | 'arrowDoubleRight'
  | 'arrowDown'
  | 'arrowDoubleDown'
  | 'arrowLeft'
  | 'arrowDoubleLeft'
  | 'hamburger';

export interface IconProps {
  name: IconName;
}

export const Icon: React.FC<IconProps> = (
  props: IconProps
): React.ReactElement => {
  const { name } = props;

  switch (name) {
    case 'arrowUp':
      return (
        <StyledIcon>
          <Icons.ArrowUp />
        </StyledIcon>
      );
    case 'arrowDoubleUp':
      return (
        <StyledIcon>
          <Icons.ArrowDoubleUp />
        </StyledIcon>
      );
    case 'arrowRight':
      return (
        <StyledIcon>
          <Icons.ArrowRight />
        </StyledIcon>
      );
    case 'arrowDoubleRight':
      return (
        <StyledIcon>
          <Icons.ArrowDoubleRight />
        </StyledIcon>
      );
    case 'arrowDown':
      return (
        <StyledIcon>
          <Icons.ArrowDown />
        </StyledIcon>
      );
    case 'arrowDoubleDown':
      return (
        <StyledIcon>
          <Icons.ArrowDoubleDown />
        </StyledIcon>
      );
    case 'arrowLeft':
      return (
        <StyledIcon>
          <Icons.ArrowLeft />
        </StyledIcon>
      );
    case 'arrowDoubleLeft':
      return (
        <StyledIcon>
          <Icons.ArrowDoubleLeft />
        </StyledIcon>
      );
    case 'hamburger':
      return (
        <StyledIcon>
          <Icons.Hamburger />
        </StyledIcon>
      );
  }

  return <i />;
};

export type Icon = typeof Icon;

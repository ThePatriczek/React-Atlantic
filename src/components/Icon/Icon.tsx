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
  | 'hamburger'
  | 'loading'
  | 'edit'
  | 'copy';

export interface IconProps {
  name: IconName;
  isRotating?: boolean;
}

export const Icon: React.FC<IconProps> = (
  props: IconProps
): React.ReactElement => {
  const { name, isRotating } = props;

  switch (name) {
    case 'arrowUp':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.ArrowUp />
        </StyledIcon>
      );
    case 'arrowDoubleUp':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.ArrowDoubleUp />
        </StyledIcon>
      );
    case 'arrowRight':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.ArrowRight />
        </StyledIcon>
      );
    case 'arrowDoubleRight':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.ArrowDoubleRight />
        </StyledIcon>
      );
    case 'arrowDown':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.ArrowDown />
        </StyledIcon>
      );
    case 'arrowDoubleDown':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.ArrowDoubleDown />
        </StyledIcon>
      );
    case 'arrowLeft':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.ArrowLeft />
        </StyledIcon>
      );
    case 'arrowDoubleLeft':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.ArrowDoubleLeft />
        </StyledIcon>
      );
    case 'hamburger':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.Hamburger />
        </StyledIcon>
      );
    case 'loading':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.Loading />
        </StyledIcon>
      );
    case 'edit':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.Edit />
        </StyledIcon>
      );
    case 'copy':
      return (
        <StyledIcon isRotating={isRotating}>
          <Icons.Copy />
        </StyledIcon>
      );
  }

  return <i />;
};

export type Icon = typeof Icon;

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
  /** custom className */
  className?: string;
}

export const Icon: React.FC<IconProps> = (
  props: IconProps
): React.ReactElement => {
  const { name, isRotating, className } = props;

  let Component = <i className={className} />;

  switch (name) {
    case 'arrowUp':
      Component = <Icons.ArrowUp />;
      break;
    case 'arrowDoubleUp':
      Component = <Icons.ArrowDoubleUp />;
      break;
    case 'arrowRight':
      Component = <Icons.ArrowRight />;
      break;
    case 'arrowDoubleRight':
      Component = <Icons.ArrowDoubleRight />;
      break;
    case 'arrowDown':
      Component = <Icons.ArrowDown />;
      break;
    case 'arrowDoubleDown':
      Component = <Icons.ArrowDoubleDown />;
      break;
    case 'arrowLeft':
      Component = <Icons.ArrowLeft />;
      break;
    case 'arrowDoubleLeft':
      Component = <Icons.ArrowDoubleLeft />;
      break;
    case 'hamburger':
      Component = <Icons.Hamburger />;
      break;
    case 'loading':
      Component = <Icons.Loading />;
      break;
    case 'edit':
      Component = <Icons.Edit />;
      break;
    case 'copy':
      Component = <Icons.Copy />;
      break;
  }

  return (
    <StyledIcon isRotating={isRotating} className={className}>
      {Component}
    </StyledIcon>
  );
};

export type Icon = typeof Icon;

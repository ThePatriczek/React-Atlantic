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
  | 'copy'
  | 'check'
  | 'users'
  | 'user'
  | 'upload'
  | 'trash'
  | 'search'
  | 'plus'
  | 'logout'
  | 'license'
  | 'key'
  | 'info'
  | 'import'
  | 'export'
  | 'eye'
  | 'eyeSlash'
  | 'close'
  | 'clear'
  | 'enter'
  | 'error'
  | 'warning'
  | 'checkCircle';

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
    case 'check':
      Component = <Icons.Check />;
      break;
    case 'clear':
      Component = <Icons.Clear />;
      break;
    case 'close':
      Component = <Icons.Close />;
      break;
    case 'export':
      Component = <Icons.Export />;
      break;
    case 'eye':
      Component = <Icons.Eye />;
      break;
    case 'eyeSlash':
      Component = <Icons.EyeSlash />;
      break;
    case 'import':
      Component = <Icons.Import />;
      break;
    case 'info':
      Component = <Icons.Info />;
      break;
    case 'key':
      Component = <Icons.Key />;
      break;
    case 'license':
      Component = <Icons.License />;
      break;
    case 'logout':
      Component = <Icons.Logout />;
      break;
    case 'plus':
      Component = <Icons.Plus />;
      break;
    case 'search':
      Component = <Icons.Search />;
      break;
    case 'trash':
      Component = <Icons.Trash />;
      break;
    case 'upload':
      Component = <Icons.Upload />;
      break;
    case 'user':
      Component = <Icons.User />;
      break;
    case 'users':
      Component = <Icons.Users />;
      break;
    case 'enter':
      Component = <Icons.Enter />;
      break;
    case 'error':
      Component = <Icons.Error />;
      break;
    case 'warning':
      Component = <Icons.Warning />;
      break;
    case 'checkCircle':
      Component = <Icons.CheckCircle />;
      break;
  }

  return (
    <StyledIcon isRotating={isRotating} className={className} name={name}>
      {Component}
    </StyledIcon>
  );
};

export type Icon = typeof Icon;

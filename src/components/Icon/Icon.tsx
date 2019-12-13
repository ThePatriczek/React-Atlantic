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
  | 'checkCircle'
  | 'calendar'
  | 'calendarAlt'
  | 'question'
  | 'profile'
  | 'zoom'
  | 'home'
  | 'bookmarks'
  | 'tags'
  | 'star'
  | 'note'
  | 'monitor'
  | 'list'
  | 'listAlt'
  | 'history'
  | 'folder'
  | 'file'
  | 'fileAlt'
  | 'comment'
  | 'calculator'
  | 'book'
  | 'bookOpened'
  | 'citex'
  | 'zoomIn'
  | 'flagParagraph'
  | 'flagCzech'
  | 'flagComments'
  | 'flagEU'
  | 'flagLawCzech'
  | 'flagLawEU'
  | 'flagLiterature'
  | 'flagSlovakia';

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
    case 'calendar':
      Component = <Icons.Calendar />;
      break;
    case 'calendarAlt':
      Component = <Icons.CalendarAlt />;
      break;
    case 'question':
      Component = <Icons.Question />;
      break;
    case 'profile':
      Component = <Icons.Profile />;
      break;
    case 'zoom':
      Component = <Icons.Zoom />;
      break;
    case 'home':
      Component = <Icons.Home />;
      break;
    case 'bookmarks':
      Component = <Icons.Bookmarks />;
      break;
    case 'tags':
      Component = <Icons.Tags />;
      break;
    case 'star':
      Component = <Icons.Star />;
      break;
    case 'note':
      Component = <Icons.Note />;
      break;
    case 'monitor':
      Component = <Icons.Monitor />;
      break;
    case 'list':
      Component = <Icons.List />;
      break;
    case 'listAlt':
      Component = <Icons.ListAlt />;
      break;
    case 'history':
      Component = <Icons.History />;
      break;
    case 'folder':
      Component = <Icons.Folder />;
      break;
    case 'file':
      Component = <Icons.File />;
      break;
    case 'fileAlt':
      Component = <Icons.FileAlt />;
      break;
    case 'comment':
      Component = <Icons.Comment />;
      break;
    case 'calculator':
      Component = <Icons.Calculator />;
      break;
    case 'book':
      Component = <Icons.Book />;
      break;
    case 'bookOpened':
      Component = <Icons.BookOpened />;
      break;
    case 'citex':
      Component = <Icons.Citex />;
      break;
    case 'flagParagraph':
      Component = <Icons.FlagParagraph />;
      break;
    case 'flagCzech':
      Component = <Icons.FlagCzech />;
      break;
    case 'flagComments':
      Component = <Icons.FlagComments />;
      break;
    case 'flagEU':
      Component = <Icons.FlagEU />;
      break;
    case 'flagLawCzech':
      Component = <Icons.FlagLawCzech />;
      break;
    case 'flagLawEU':
      Component = <Icons.FlagLawEU />;
      break;
    case 'flagLiterature':
      Component = <Icons.FlagLiterature />;
      break;
    case 'flagSlovakia':
      Component = <Icons.FlagSlovakia />;
      break;
  }

  return (
    <StyledIcon isRotating={isRotating} className={className} name={name}>
      {Component}
    </StyledIcon>
  );
};

export type Icon = typeof Icon;

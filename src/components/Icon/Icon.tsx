import * as React from 'react';
import * as Icons from '../../Icons';
import { StyledIcon } from './Icon.style';

export type IconName =
  | 'arrowsVertical'
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
  | 'checkSimple'
  | 'users'
  | 'user'
  | 'upload'
  | 'trash'
  | 'search'
  | 'table'
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
  | 'play'
  | 'flagParagraph'
  | 'flagCzech'
  | 'flagComments'
  | 'flagEU'
  | 'flagLawCzech'
  | 'flagLawEU'
  | 'flagLiterature'
  | 'flagSlovakia'
  | 'threeDots'
  | 'filter'
  | 'diff'
  | 'news'
  | 'folderOpen'
  | 'fileCsv'
  | 'fileDoc'
  | 'fileJpg'
  | 'filePdf'
  | 'filePng'
  | 'filePpt'
  | 'fileRtf'
  | 'fileTxt'
  | 'fileXls'
  | 'fileXml'
  | 'fileZip'
  | 'virus'
  | 'facebook'
  | 'google'
  | 'fileWithoutContent'
  | 'notification'
  | 'creditCard'
  | 'attachment'
  | 'inProgress'
  | 'phone'
  | 'video'
  | 'crossedPhone'
  | 'crossedCamera'
  | 'microphone'
  | 'crossedMicrophone'
  | 'emoji'
  | 'facebookFilled'
  | 'envelope'
  | 'login'
  | 'plusSquare'
  | 'send'
  | 'cog'
  | 'hash'
  | 'robot'
  | 'switch'
  | 'send'
  | 'userAdd';

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
    case 'arrowsVertical':
      Component = <Icons.ArrowsVertical />;
      break;
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
    case 'checkSimple':
      Component = <Icons.CheckSimple />;
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
    case 'table':
      Component = <Icons.Table />;
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
    case 'play':
      Component = <Icons.Play />;
      break;
    case 'zoomIn':
      Component = <Icons.ZoomIn />;
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
    case 'threeDots':
      Component = <Icons.ThreeDots />;
      break;
    case 'filter':
      Component = <Icons.Filter />;
      break;
    case 'diff':
      Component = <Icons.Diff />;
      break;
    case 'news':
      Component = <Icons.News />;
      break;
    case 'folderOpen':
      Component = <Icons.FolderOpen />;
      break;
    case 'fileCsv':
      Component = <Icons.FileCsv />;
      break;
    case 'fileDoc':
      Component = <Icons.FileDoc />;
      break;
    case 'fileJpg':
      Component = <Icons.FileJpg />;
      break;
    case 'filePdf':
      Component = <Icons.FilePdf />;
      break;
    case 'filePng':
      Component = <Icons.FilePng />;
      break;
    case 'filePpt':
      Component = <Icons.FilePpt />;
      break;
    case 'fileRtf':
      Component = <Icons.FileRtf />;
      break;
    case 'fileTxt':
      Component = <Icons.FileTxt />;
      break;
    case 'fileXls':
      Component = <Icons.FileXls />;
      break;
    case 'fileXml':
      Component = <Icons.FileXml />;
      break;
    case 'fileZip':
      Component = <Icons.FileZip />;
      break;
    case 'virus':
      Component = <Icons.Virus />;
      break;
    case 'facebook':
      Component = <Icons.Facebook />;
      break;
    case 'google':
      Component = <Icons.Google />;
      break;
    case 'fileWithoutContent':
      Component = <Icons.FileWithoutContent />;
      break;
    case 'notification':
      Component = <Icons.Notification />;
      break;
    case 'creditCard':
      Component = <Icons.CreditCard />;
      break;
    case 'attachment':
      Component = <Icons.Attachment />;
      break;
    case 'inProgress':
      Component = <Icons.InProgress />;
      break;
    case 'phone':
      Component = <Icons.Phone />;
      break;
    case 'video':
      Component = <Icons.Video />;
      break;
    case 'crossedPhone':
      Component = <Icons.CrossedPhone />;
      break;
    case 'crossedCamera':
      Component = <Icons.CrossedCamera />;
      break;
    case 'microphone':
      Component = <Icons.Microphone />;
      break;
    case 'crossedMicrophone':
      Component = <Icons.CrossedMicrophone />;
      break;
    case 'emoji':
      Component = <Icons.Emoji />;
      break;
    case 'facebookFilled':
      Component = <Icons.FacebookFilled />;
      break;
    case 'envelope':
      Component = <Icons.Envelope />;
      break;
    case 'login':
      Component = <Icons.Login />;
      break;
    case 'plusSquare':
      Component = <Icons.PlusSquare />;
      break;
    case 'send':
      Component = <Icons.Send />;
      break;
    case 'cog':
      Component = <Icons.Cog />;
      break;
    case 'hash':
      Component = <Icons.Hash />;
      break;
    case 'robot':
      Component = <Icons.Robot />;
      break;
    case 'switch':
      Component = <Icons.Switch />;
      break;
    case 'userAdd':
      Component = <Icons.UserAdd />;
      break;
  }

  return (
    <StyledIcon isRotating={isRotating} className={className} name={name}>
      {Component}
    </StyledIcon>
  );
};

export type Icon = typeof Icon;

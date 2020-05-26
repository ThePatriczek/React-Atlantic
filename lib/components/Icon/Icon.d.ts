import React from 'react';
export declare type IconName = 'arrowsVertical' | 'arrowUp' | 'arrowDoubleUp' | 'arrowRight' | 'arrowDoubleRight' | 'arrowDown' | 'arrowDoubleDown' | 'arrowLeft' | 'arrowDoubleLeft' | 'hamburger' | 'loading' | 'edit' | 'copy' | 'check' | 'checkSimple' | 'users' | 'user' | 'upload' | 'trash' | 'search' | 'table' | 'plus' | 'logout' | 'license' | 'key' | 'info' | 'import' | 'export' | 'eye' | 'eyeSlash' | 'close' | 'clear' | 'enter' | 'error' | 'warning' | 'checkCircle' | 'calendar' | 'calendarAlt' | 'question' | 'profile' | 'zoom' | 'home' | 'bookmarks' | 'tags' | 'star' | 'note' | 'monitor' | 'list' | 'listAlt' | 'history' | 'folder' | 'file' | 'fileAlt' | 'comment' | 'calculator' | 'book' | 'bookOpened' | 'citex' | 'zoomIn' | 'play' | 'flagParagraph' | 'flagCzech' | 'flagComments' | 'flagEU' | 'flagLawCzech' | 'flagLawEU' | 'flagLiterature' | 'flagSlovakia' | 'threeDots' | 'filter' | 'diff' | 'news' | 'folderOpen' | 'fileCsv' | 'fileDoc' | 'fileJpg' | 'filePdf' | 'filePng' | 'filePpt' | 'fileRtf' | 'fileTxt' | 'fileXls' | 'fileXml' | 'fileZip' | 'virus' | 'facebook' | 'google' | 'fileWithoutContent' | 'notification' | 'creditCard' | 'attachment' | 'inProgress' | 'phone' | 'video' | 'crossedPhone' | 'crossedCamera' | 'microphone' | 'crossedMicrophone' | 'emoji' | 'facebookFilled' | 'envelope' | 'login' | 'plusSquare' | 'send' | 'cog' | 'hash' | 'robot' | 'switch' | 'userAdd' | 'building' | 'offer' | 'prev' | 'next' | 'external' | 'change' | 'print' | 'squaresGrid' | 'tag' | 'timeline' | 'brush' | 'fontSize';
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    name: IconName;
    isRotating?: boolean;
}
export declare const Icon: React.FC<IconProps>;
export declare type Icon = typeof Icon;

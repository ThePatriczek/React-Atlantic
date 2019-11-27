import * as React from 'react';

export declare type IconName = 'arrowUp' | 'arrowDoubleUp' | 'arrowRight' | 'arrowDoubleRight' | 'arrowDown' | 'arrowDoubleDown' | 'arrowLeft' | 'arrowDoubleLeft' | 'hamburger' | 'loading' | 'edit' | 'copy' | 'check' | 'users' | 'user' | 'upload' | 'trash' | 'search' | 'plus' | 'logout' | 'license' | 'key' | 'info' | 'import' | 'export' | 'eye' | 'eyeSlash' | 'close' | 'clear' | 'enter' | 'error' | 'warning' | 'checkCircle' | 'calendar' | 'calendarAlt' | 'question' | 'profile' | 'zoom' | 'home' | 'bookmarks' | 'tags' | 'star' | 'note' | 'monitor' | 'list' | 'listAlt' | 'history' | 'folder' | 'file' | 'fileAlt' | 'comment' | 'calculator' | 'book' | 'bookOpened';
export interface IconProps {
    name: IconName;
    isRotating?: boolean;
    /** custom className */
    className?: string;
}
export declare const Icon: React.FC<IconProps>;
export declare type Icon = typeof Icon;

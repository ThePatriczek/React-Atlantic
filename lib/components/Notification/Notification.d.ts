import { FC, PropsWithChildren } from 'react';
import { Size, Type } from '../../types';
export interface NotificationProps {
    title?: string;
    className?: string;
    size?: Size;
    type?: Type;
    onClose?: () => void;
    footer?: JSX.Element;
}
export declare const Notification: FC<PropsWithChildren<NotificationProps>>;

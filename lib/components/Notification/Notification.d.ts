import { FC, PropsWithChildren } from 'react';
import { Size, Type } from '../../types';
import { IconName } from '../Icon';
export interface NotificationProps {
    title?: string;
    className?: string;
    size?: Size;
    type?: Type;
    isPrimaryButtonFullWidth?: boolean;
    primaryButtonIcon?: IconName;
    primaryButton?: string;
    secondaryButton?: string;
}
export declare const Notification: FC<PropsWithChildren<NotificationProps>>;

import * as React from 'react';
import { HorizontalPosition, Size } from '../../types';
import { IconName } from '../Icon';

export declare type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'dashed' | 'transparent';
export interface ButtonProps {
    onClick?: () => void;
    isDisabled?: boolean;
    isRound?: boolean;
    isFullWidth?: boolean;
    /** primary | success | warning | error | dashed | transparent */
    type?: ButtonType;
    htmlType?: 'submit' | 'button';
    /** small | medium | large */
    size?: Size;
    icon?: IconName;
    iconPosition?: HorizontalPosition;
    children?: React.ReactText;
}
export declare const Button: React.FC<ButtonProps>;

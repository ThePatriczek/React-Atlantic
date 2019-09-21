import * as React from 'react';
import { HorizontalPosition, Size } from '../../types';
export declare type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'dashed' | 'transparent';
export interface ButtonProps {
    onClick?: () => void;
    isDisabled?: boolean;
    isRounded?: boolean;
    isFullWide?: boolean;
    children?: React.ReactText;
    /** primary | success | warning | error | dashed | transparent */
    type?: ButtonType;
    icon?: string;
    /** right | left */
    iconPosition?: HorizontalPosition;
    /** small | medium | large */
    size?: Size;
}
export declare const Button: React.FC<ButtonProps>;

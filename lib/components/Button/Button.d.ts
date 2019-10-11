import * as React from 'react';
import { Size, Type } from '../../types';
export declare type ButtonType = Type | 'dashed' | 'transparent';
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
    /** custom className */
    className?: string;
}
export declare const Button: React.FC<React.PropsWithChildren<ButtonProps>>;

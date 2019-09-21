import * as React from 'react';
export interface ButtonProps {
    onClick?: () => void;
    isDisabled?: boolean;
    children?: React.ReactText;
    icon?: string;
    iconPosition?: 'left' | 'right';
    /** Test description */
    type?: 'submit' | 'button';
}
export declare const Button: React.FC<ButtonProps>;

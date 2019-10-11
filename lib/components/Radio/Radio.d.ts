import * as React from 'react';
import { HorizontalPosition } from '../../types';
import { ButtonProps } from './Button';
import { GroupProps } from './Group';
export interface RadioProps {
    isChecked?: boolean;
    isDefaultChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (isChecked: boolean) => void;
    position?: HorizontalPosition;
    /** custom className */
    className?: string;
    value?: any;
}
export declare const Radio: React.FC<React.PropsWithChildren<RadioProps>> & {
    Button: React.FC<ButtonProps>;
    Group: React.FC<GroupProps>;
};

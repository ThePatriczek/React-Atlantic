import * as React from 'react';
import { HorizontalPosition } from '../../types';

export interface CheckboxProps {
    isChecked?: boolean;
    isDefaultChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (isChecked: boolean) => void;
    position?: HorizontalPosition;
    /** custom className */
    className?: string;
}
export declare const Checkbox: React.FC<React.PropsWithChildren<CheckboxProps>>;

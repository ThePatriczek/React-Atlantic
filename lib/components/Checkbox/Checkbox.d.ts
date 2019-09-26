import * as React from 'react';
import { HorizontalPosition } from '../../types';

export interface CheckboxProps {
    isChecked?: boolean;
    isDefaultChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (isChecked: boolean) => void;
    text?: string;
    textPosition?: HorizontalPosition;
}
export declare const Checkbox: React.FC<CheckboxProps>;

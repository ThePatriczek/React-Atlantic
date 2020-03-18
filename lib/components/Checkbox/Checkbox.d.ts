import * as React from 'react';
import { ChangeEvent } from 'react';
import { HorizontalPosition } from '../../types';
export interface CheckboxProps {
    isChecked?: boolean;
    isDefaultChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (isChecked: boolean | ChangeEvent<HTMLInputElement>) => void;
    position?: HorizontalPosition;
    /** custom className */
    className?: string;
    handlersWithEvent?: boolean;
}
export declare const Checkbox: React.FC<React.PropsWithChildren<CheckboxProps>>;

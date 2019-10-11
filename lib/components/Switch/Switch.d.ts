import * as React from 'react';
import { Size, Type } from '../../types';
export interface SwitchProps {
    isChecked?: boolean;
    isDefaultChecked?: boolean;
    isDisabled?: boolean;
    onChange?: (isChecked: boolean) => void;
    textOn?: string;
    textOff?: string;
    className?: string;
    size?: Size;
    type?: Type;
}
export declare const Switch: React.FC<SwitchProps>;

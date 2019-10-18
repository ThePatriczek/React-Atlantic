import * as React from 'react';
import { Size } from '../../types';
import { OptionProps } from './Option';
export interface SelectProps {
    onChange?: (value?: any) => void;
    value?: any;
    defaultValue?: any;
    options?: OptionType[];
    isMulti?: boolean;
    isFullWidth?: boolean;
    placeholder?: string;
    isDisabled?: boolean;
    size?: Size;
    className?: string;
}
export interface OptionType {
    value: any;
    label: string;
}
export declare const Select: React.FC<React.PropsWithChildren<SelectProps>> & {
    Option: React.FC<OptionProps>;
};

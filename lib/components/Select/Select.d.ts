import * as React from 'react';
import { Size } from '../../types';
import { OptionProps } from './Option';
export interface SelectProps {
    onChange?: (value?: OptionType | OptionType[] | string) => void;
    value?: OptionType | OptionType[] | string;
    defaultValue?: OptionType | OptionType[] | string;
    options?: OptionType[];
    isMulti?: boolean;
    isFullWidth?: boolean;
    placeholder?: string;
    isDisabled?: boolean;
    size: Size;
    className?: string;
}
export interface OptionType {
    value: unknown;
    label: string;
    className?: string;
}
export declare const Select: React.FC<React.PropsWithChildren<SelectProps>> & {
    Option: React.FC<OptionProps>;
};

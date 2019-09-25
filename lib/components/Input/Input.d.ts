import * as React from 'react';
import { Size } from '../../types';
import { IconName } from '../Icon';
import { TextAreaProps } from './TextArea';

export interface InputProps {
    value?: React.ReactText;
    defaultValue?: React.ReactText;
    isDisabled?: boolean;
    autoFocus?: boolean;
    placeholder?: string;
    id?: string;
    onEnterPress?: (value: React.ReactText) => void;
    onChange?: (value: React.ReactText) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    iconLeft?: IconName;
    iconRight?: IconName;
    isAlternative?: boolean;
    size?: Size;
    isLoading?: boolean;
}
export declare const Input: React.FC<InputProps> & {
    TextArea: React.FC<TextAreaProps>;
};

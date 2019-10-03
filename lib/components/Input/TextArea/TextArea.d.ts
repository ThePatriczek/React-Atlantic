import * as React from 'react';
import { IconName } from '../../Icon';

export interface TextAreaProps {
    isDisabled?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onEnterPress?: (value: string) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    iconLeft?: IconName;
    iconRight?: IconName;
}
export declare const TextArea: React.FC<TextAreaProps>;

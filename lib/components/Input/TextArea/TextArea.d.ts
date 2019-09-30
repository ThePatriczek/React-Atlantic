import * as React from 'react';
export interface TextAreaProps {
    isDisabled?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    value?: React.ReactText;
    defaultValue?: React.ReactText;
    onChange?: (value: React.ReactText) => void;
    onEnterPress?: (value: React.ReactText) => void;
    onBlur?: () => void;
    onFocus?: () => void;
}
export declare const TextArea: React.FC<TextAreaProps>;

import * as React from 'react';

export interface TextProps {
    children: React.ReactText;
    isStrong?: boolean;
    isCopyable?: boolean;
    isEditable?: boolean;
    onEditConfirm?: (value: React.ReactText) => void;
}
export declare const Text: React.FC<TextProps>;

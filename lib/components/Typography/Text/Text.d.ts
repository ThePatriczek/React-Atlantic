import * as React from 'react';
import { Type } from '../../../types';
export declare type TextElement = 'span' | 'strong' | 'code' | 'del' | 'ins' | 'mark';
export interface TextProps {
    children: React.ReactText;
    /** default | primary | success | warning | error */
    type?: Type;
    /** span | strong | code | del | ins | mark */
    element?: TextElement;
    isCopyable?: boolean;
    isEditable?: boolean;
    onEditConfirm?: (value: React.ReactText) => void;
    /** custom className */
    className?: string;
}
export declare const Text: React.FC<TextProps>;

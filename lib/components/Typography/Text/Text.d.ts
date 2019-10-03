import * as React from 'react';
import { Type } from '../../../types';
export declare type TextElement = 'span' | 'strong' | 'code' | 'del' | 'ins' | 'mark';
export interface TextProps {
    children: string;
    /** default | primary | success | warning | error */
    type?: Type;
    /** span | strong | code | del | ins | mark */
    element?: TextElement;
    isCopyable?: boolean;
    isEditable?: boolean;
    onEditConfirm?: (value: string) => void;
    /** custom className */
    className?: string;
    /** text in copy tooltip */
    copyText?: string;
    /** text after click on copy tooltip */
    copiedText?: string;
    /** text in edit tooltip */
    editText?: string;
}
export declare const Text: React.FC<TextProps>;

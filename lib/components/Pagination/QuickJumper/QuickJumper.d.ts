import { FC } from 'react';
import { Size } from '../../../types';
interface QuickJumperProps {
    isDisabled: boolean;
    count: number;
    setPage: (value: number) => void;
    text?: string;
    onChange: (value: number) => void;
    size: Size;
}
export declare const QuickJumper: FC<QuickJumperProps>;
export {};

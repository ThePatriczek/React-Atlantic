import { FC } from 'react';
interface QuickJumperProps {
    isDisabled: boolean;
    count: number;
    setPage: (value: number) => void;
    text: string;
    onChange: (value: number) => void;
}
export declare const QuickJumper: FC<QuickJumperProps>;
export {};

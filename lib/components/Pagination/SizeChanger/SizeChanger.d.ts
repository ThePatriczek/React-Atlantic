import { FC } from 'react';
import { Size } from '../../../types';
interface SelectProps {
    isDisabled: boolean;
    pageSizeOptions?: number[];
    pageSize: number;
    setPageSize: (value: number) => void;
    text?: string;
    onSizeChange: (value: number) => void;
    size: Size;
}
export declare const SizeChanger: FC<SelectProps>;
export {};

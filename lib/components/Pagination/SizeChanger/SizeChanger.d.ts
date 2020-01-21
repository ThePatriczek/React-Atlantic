import { FC } from 'react';
interface SelectProps {
    isDisabled: boolean;
    pageSizeOptions?: number[];
    pageSize: number;
    setPageSize: (value: number) => void;
    text: string;
    onSizeChange: (value: number) => void;
}
export declare const SizeChanger: FC<SelectProps>;
export {};

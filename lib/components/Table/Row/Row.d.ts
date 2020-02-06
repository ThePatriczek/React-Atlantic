import { FC, PropsWithChildren } from 'react';
import { ColumnProps } from '../Column';
export interface RowProps {
    onClick?: () => void;
}
export declare const Row: FC<PropsWithChildren<RowProps>> & {
    Column: FC<ColumnProps>;
};

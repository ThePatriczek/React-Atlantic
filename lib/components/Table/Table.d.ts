import { FC, PropsWithChildren } from 'react';
import { BodyProps } from './Body';
import { ColumnProps } from './Column';
import { SortOrder } from './Context';
import { HeadProps } from './Head';
import { RowProps } from './Row';
interface TableProps {
    onSort?: (sortBy: Readonly<string>, order: Readonly<SortOrder>) => void;
    sortBy?: string;
    order?: Readonly<SortOrder>;
}
export declare const Table: FC<PropsWithChildren<TableProps>> & {
    Row: FC<Readonly<RowProps>>;
    Column: FC<Readonly<ColumnProps>>;
    Head: FC<Readonly<HeadProps>>;
    Body: FC<Readonly<BodyProps>>;
};
export {};

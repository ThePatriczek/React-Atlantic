import React, { FC, PropsWithChildren } from 'react';
export declare type SortOrder = 'asc' | 'desc';
export interface TableContextState {
    sortBy: Readonly<string>;
    onSort: (sortBy: Readonly<string>) => void;
    order?: Readonly<SortOrder>;
}
export declare const TableContext: React.Context<TableContextState>;
export declare const useTable: () => TableContextState;
interface TableContextProps {
    onSort?: (sortBy?: string, order?: SortOrder) => void;
    order?: Readonly<SortOrder>;
    sortBy?: Readonly<string>;
}
export declare const TableContextProvider: FC<Readonly<PropsWithChildren<Readonly<TableContextProps>>>>;
export {};

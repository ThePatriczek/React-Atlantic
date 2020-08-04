import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../hooks/useComposition';
import { Body, BodyProps } from './Body';
import { Column, ColumnProps } from './Column';
import { SortOrder, TableContextProvider } from './Context';
import { Head, HeadProps } from './Head';
import { Row, RowProps } from './Row';
import { StyledTable } from './Table.style';

interface TableProps {
  onSort?: (sortBy: Readonly<string>, order: Readonly<SortOrder>) => void;
  sortBy?: string;
  order?: Readonly<SortOrder>;
  /** custom className */
  className?: string;
}

export const Table: FC<PropsWithChildren<TableProps>> & {
  Row: FC<Readonly<RowProps>>;
  Column: FC<Readonly<ColumnProps>>;
  Head: FC<Readonly<HeadProps>>;
  Body: FC<Readonly<BodyProps>>;
} = (props): Readonly<ReactElement> => {
  const { children, onSort, order, sortBy, className } = props;
  const { getFilteredChildren } = useComposition();
  const row = getFilteredChildren(children, Table.Row.displayName);
  const thead = getFilteredChildren(children, Table.Head.displayName);
  const tbody = getFilteredChildren(children, Table.Body.displayName);
  const items: JSX.Element[] = [...thead, ...tbody, ...row];

  return (
    <TableContextProvider onSort={onSort} order={order} sortBy={sortBy}>
      <StyledTable className={className}>{items}</StyledTable>
    </TableContextProvider>
  );
};

Table.Row = Row;
Table.Column = Column;
Table.Head = Head;
Table.Body = Body;

Table.displayName = `Table`;

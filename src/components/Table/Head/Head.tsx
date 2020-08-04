import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../../hooks';
import { Table } from '../Table';
import { StyledHead } from './Head.style';

export interface HeadProps {
  /** custom className */
  className?: string;
}

export const Head: FC<PropsWithChildren<HeadProps>> = (props): ReactElement => {
  const { children, className } = props;
  const { getFilteredChildren } = useComposition();

  const getHeaderColumns = (
    columns: Array<Readonly<JSX.Element>> | Readonly<JSX.Element>
  ): ReadonlyArray<Readonly<JSX.Element>> => {
    const items: JSX.Element[] = [];

    if (Array.isArray(columns)) {
      columns.map((item: Readonly<JSX.Element>) =>
        items.push({ ...item, props: { ...item.props, isHeader: true } })
      );
    } else {
      items.push({ ...columns, props: { ...columns.props, isHeader: true } });
    }

    return items;
  };

  const rows: ReadonlyArray<Readonly<JSX.Element>> = getFilteredChildren(
    children,
    Table.Row.displayName
  ).map(row => {
    const items = getHeaderColumns(row.props.children);
    return <Table.Row>{items}</Table.Row>;
  });

  return <StyledHead className={className}>{rows}</StyledHead>;
};

Head.displayName = `Head`;

import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Sorting } from '../components';
import { useTable } from '../Context';
import {
  StyledColumn,
  StyledColumnHeader,
  StyledColumnHeaderBox
} from './Column.style';

export interface ColumnProps {
  onClick?: () => void;
  onDoubleClick?: () => void;
  className?: Readonly<string>;
  name?: string;
}

export interface HiddenColumnProps extends ColumnProps {
  isHeader?: Readonly<boolean>;
}

export const Column: FC<Readonly<PropsWithChildren<HiddenColumnProps>>> = (
  props
): ReactElement => {
  const { children, isHeader, className, name } = props;
  const { onSort, sortBy, order } = useTable();

  const hasName: Readonly<boolean> = typeof name !== 'undefined';
  const hasSortBy: Readonly<boolean> = typeof sortBy !== 'undefined';
  const isActive: Readonly<boolean> = hasName && hasSortBy && name === sortBy;

  const onClick = () => {
    props.onClick?.();

    if (typeof name !== 'undefined') {
      onSort(name);
    }
  };

  const onDoubleClick = () => {
    props.onDoubleClick?.();
  };

  if (isHeader) {
    return (
      <StyledColumnHeader
        isClickable={!!props.onClick || hasName}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        className={className}
        isActive={isActive}
      >
        <StyledColumnHeaderBox>
          {children}
          {hasName && <Sorting order={isActive ? order : undefined} />}
        </StyledColumnHeaderBox>
      </StyledColumnHeader>
    );
  }

  return (
    <StyledColumn
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={className}
    >
      {children}
    </StyledColumn>
  );
};

Column.defaultProps = {
  isHeader: false
};

Column.displayName = `Column`;

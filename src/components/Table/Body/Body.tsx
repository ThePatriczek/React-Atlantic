import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../../hooks/useComposition';
import { Table } from '../Table';
import { StyledBody } from './Body.style';

export interface BodyProps {
  /** custom className */
  className?: string;
}

export const Body: FC<PropsWithChildren<BodyProps>> = (props): ReactElement => {
  const { children, className } = props;
  const { getFilteredChildren } = useComposition();
  const items = getFilteredChildren(children, Table.Row.displayName);

  return <StyledBody className={className}>{items}</StyledBody>;
};

Body.displayName = `Body`;

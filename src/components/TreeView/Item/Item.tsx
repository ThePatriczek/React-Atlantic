import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { StyledTreeViewItem } from './Item.style';

export interface ItemProps {}

export const Item: FC<PropsWithChildren<ItemProps>> = (props): ReactElement => {
  const { children } = props;

  return <StyledTreeViewItem>{children}</StyledTreeViewItem>;
};

Item.displayName = `Item`;

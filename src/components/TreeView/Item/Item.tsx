import React, { FC, PropsWithChildren, ReactElement } from 'react';
import {
  StyledTreeViewButton,
  StyledTreeViewIcon,
  StyledTreeViewItem
} from './Item.style';

export interface ItemProps {}

export const Item: FC<PropsWithChildren<ItemProps>> = (props): ReactElement => {
  const { children } = props;
  let icon: JSX.Element = <></>;

  const hasChildren: Readonly<boolean> = true;

  if (hasChildren) {
    icon = (
      <StyledTreeViewButton size={'small'}>
        <StyledTreeViewIcon name={'arrowRight'} />
      </StyledTreeViewButton>
    );
  }

  return (
    <StyledTreeViewItem>
      {icon}
      {children}
    </StyledTreeViewItem>
  );
};

Item.displayName = `Item`;

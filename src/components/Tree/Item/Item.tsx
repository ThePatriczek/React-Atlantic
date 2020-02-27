import React, { FC, PropsWithChildren, ReactElement } from 'react';

export interface ItemProps {}

export const Item: FC<PropsWithChildren<ItemProps>> = (props): ReactElement => {
  const { children } = props;

  return (
    <></>
  );
};

Item.displayName = `Item`;

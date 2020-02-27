import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../hooks/useComposition';
import { Item, ItemProps } from './Item';
import { StyledTree } from './style/Tree.style';

export interface TreeProps {}

export const Tree: React.FC<PropsWithChildren<TreeProps>> & {
  Item: FC<Readonly<ItemProps>>;
} = (props): Readonly<ReactElement> => {
  const { children } = props;
  const { getFilteredChildren } = useComposition();
  const TreeItems = getFilteredChildren(
    children,
    Tree.Item.displayName
  );

  return (
    <>
      {TreeItems.map(
        (item: Readonly<JSX.Element>, index: Readonly<number>) => (
          <Tree.Item key={index}>{item.props?.children}</Tree.Item>
        )
      )}
    </>
  );
};

Tree.Item = Item;
Tree.displayName = `Tree`;

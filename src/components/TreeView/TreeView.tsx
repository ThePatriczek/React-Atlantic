import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../hooks/useComposition';
import { Item, ItemProps } from './Item';
import { StyledTreeView } from './style/TreeView.style';

export interface TreeViewProps {}

export const TreeView: React.FC<PropsWithChildren<TreeViewProps>> & {
  Item: FC<Readonly<ItemProps>>;
} = (props): Readonly<ReactElement> => {
  const { children } = props;
  const { getFilteredChildren } = useComposition();
  const treeViewItems = getFilteredChildren(
    children,
    TreeView.Item.displayName
  );

  return (
    <>
      {treeViewItems.map(
        (item: Readonly<JSX.Element>, index: Readonly<number>) => (
          <TreeView.Item key={index}>{item.props?.children}</TreeView.Item>
        )
      )}
    </>
  );
};

TreeView.Item = Item;
TreeView.displayName = `TreeView`;

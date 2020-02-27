import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../hooks/useComposition';
import { Node, NodeProps } from './Node';
import { StyledTree } from './style/Tree.style';

export interface TreeProps {
  readonly isAlternative?: Readonly<boolean>;
}

export const Tree: React.FC<PropsWithChildren<TreeProps>> & {
  Node: FC<Readonly<NodeProps>>;
} = (props): Readonly<ReactElement> => {
  const { children } = props;
  const { getFilteredChildren } = useComposition();
  const TreeNodes = getFilteredChildren(children, Tree.Node.displayName);

  return (
    <>
      {TreeNodes.map((Node: Readonly<JSX.Element>, index: Readonly<number>) => (
        <Tree.Node key={index}>{Node.props?.children}</Tree.Node>
      ))}
    </>
  );
};

Tree.Node = Node;
Tree.displayName = `Tree`;

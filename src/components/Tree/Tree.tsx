import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { useComposition } from '../../hooks/useComposition';
import { Size } from '../../types';
import { Node, NodeProps } from './Node';
import { StyledTree } from './style';

export interface TreeProps {
  readonly isAlternative?: Readonly<boolean>;
  readonly size?: Readonly<Size>;
  readonly nodes?: ReadonlyArray<Readonly<JSX.Element>>;
}

export const Tree: React.FC<PropsWithChildren<TreeProps>> & {
  Node: FC<Readonly<NodeProps>>;
} = (props): Readonly<ReactElement> => {
  const { children, isAlternative, size } = props;
  const { getFilteredChildren } = useComposition();

  let nodes = getFilteredChildren(props.nodes, Tree.Node.displayName);
  nodes = [...nodes, ...getFilteredChildren(children, Tree.Node.displayName)];

  return (
    <StyledTree size={size}>
      {nodes.map((node, key) => (
        <Tree.Node
          key={key}
          {...node.props}
          size={size}
          isAlternative={isAlternative}
        />
      ))}
    </StyledTree>
  );
};

Tree.defaultProps = {
  isAlternative: false,
  size: 'medium'
};

Tree.Node = Node;
Tree.displayName = `Tree`;

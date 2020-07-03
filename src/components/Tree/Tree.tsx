import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState
} from 'react';
import SortableTree, { NodeRendererProps, TreeItem } from 'react-sortable-tree';
import { Props as TooltipProps } from 'react-tooltip';
import { AutoSizer, Index } from 'react-virtualized';
import { theme } from '../../theme';
import { Size } from '../../types';
import { Tooltip } from '../Tooltip';
import { Node, NodeProps } from './Node';
import { StyledTree, StyledTreeAlt } from './style';

type NodeContentRendererType = FC<Readonly<NodeContentRendererProps>>;

interface NodeContentRendererProps extends NodeRendererProps {}

export interface TreeProps {
  readonly nodes: Array<Readonly<NodeProps>>;
  readonly onChange?: (nodes: Array<Readonly<NodeProps>>) => void;
  readonly isAlternative?: Readonly<boolean>;
  readonly size?: Readonly<Size>;
  readonly rowHeight?: ((info: Index) => number) | number;
  readonly withTooltips?: boolean;
  readonly TooltipProps?: TooltipProps;
}

export const Tree: FC<TreeProps> & {
  Node: FC<Readonly<NodeProps>>;
} = (props): Readonly<ReactElement> => {
  const { isAlternative, size, nodes, withTooltips, TooltipProps } = props;
  const TreeComponent = isAlternative ? StyledTreeAlt : StyledTree;

  const [treeData, setTreeData] = useState<Array<Readonly<TreeItem>>>(nodes);

  useEffect(() => {
    setTreeData(nodes);
    Tooltip.rebuild();
  }, [nodes]);

  const onChange = treeData => {
    setTreeData(treeData);
    props.onChange?.(treeData);
  };

  const NodeContentRenderer: NodeContentRendererType = useCallback(
    props => {
      const { node, treeIndex, toggleChildrenVisibility, path } = props;

      return (
        <Tree.Node
          key={treeIndex}
          children={node.children}
          isAlternative={isAlternative}
          onClick={() => toggleChildrenVisibility?.({ node, path, treeIndex })}
          title={node.title}
          expanded={node.expanded}
          size={size}
          level={path.length}
          iconOpen={node.iconOpen}
          iconClose={node.iconClose}
          tooltip={node.tooltip}
        />
      );
    },
    [isAlternative, size]
  );

  let rowHeight: string = theme.height.md;

  if (size === 'small') {
    rowHeight = theme.height.sm;
  } else if (size === 'large') {
    rowHeight = theme.height.lg;
  }

  return (
    <TreeComponent size={size}>
      {withTooltips && (
        <Tooltip id="tree-tooltip" place="top" {...TooltipProps} />
      )}
      <AutoSizer disableWidth>
        {({ width, height }) => (
          <SortableTree
            style={{ height, width }}
            treeData={treeData}
            onChange={onChange}
            canDrag={false}
            rowHeight={props.rowHeight || parseInt(rowHeight, 0)}
            nodeContentRenderer={NodeContentRenderer}
            reactVirtualizedListProps={{
              onScroll: () => Tooltip.rebuild(),
              onRowsRendered: () => Tooltip.rebuild()
            }}
          />
        )}
      </AutoSizer>
    </TreeComponent>
  );
};

Tree.defaultProps = {
  isAlternative: false,
  size: 'medium'
};

Tree.Node = Node;
Tree.displayName = `Tree`;

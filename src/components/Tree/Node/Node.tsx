import { type } from 'os';
import React, { FC, ReactElement } from 'react';
import { TreeItem } from 'react-sortable-tree';
import { Size } from '../../../types';
import { IconName } from '../../Icon';
import {
  StyledTreeButton,
  StyledTreeButtonAlt,
  StyledTreeIcon,
  StyledTreeIconAlt,
  StyledTreeNode,
  StyledTreeNodeAlt,
  StyledTreeNodeContent,
  StyledTreeNodeContentAlt
} from './style';

export interface NodeProps extends TreeItem {
  readonly onClick?: () => void;
  readonly iconOpen?: Readonly<IconName>;
  readonly iconClose?: Readonly<IconName>;
  readonly tooltip?: string;
}

export interface NodePropsIntern extends NodeProps {
  readonly isAlternative?: Readonly<boolean>;
  readonly size?: Readonly<Size>;
  readonly level: Readonly<number>;
}

export const Node: FC<Readonly<NodePropsIntern>> = (
  props
): Readonly<ReactElement> => {
  const {
    size,
    isAlternative,
    iconOpen,
    iconClose,
    title,
    expanded,
    children,
    tooltip
  } = props;

  let TreeNode = StyledTreeNode;
  let TreeNodeContent = StyledTreeNodeContent;
  let TreeButton = StyledTreeButton;
  let TreeIcon = StyledTreeIcon;

  if (isAlternative) {
    TreeNode = StyledTreeNodeAlt;
    TreeNodeContent = StyledTreeNodeContentAlt;
    TreeButton = StyledTreeButtonAlt;
    TreeIcon = StyledTreeIconAlt;
  }

  const onClick = () => {
    props.onClick?.();
  };

  return (
    <TreeNode size={size} isOpened={expanded}>
      <TreeNodeContent data-for="tree-tooltip" data-tip={tooltip}>
        {children && children.length > 0 && (
          <TreeButton onClick={onClick} size={size}>
            <TreeIcon name={(expanded ? iconClose : iconOpen) as IconName} />
          </TreeButton>
        )}
        {title}
      </TreeNodeContent>
    </TreeNode>
  );
};

Node.defaultProps = {
  isAlternative: false,
  iconOpen: 'arrowRight',
  iconClose: 'arrowDown'
};

Node.displayName = `Node`;

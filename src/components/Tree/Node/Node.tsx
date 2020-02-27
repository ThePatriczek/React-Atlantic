import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  ReactText,
  useEffect,
  useState
} from 'react';
import { useComposition } from '../../../hooks/useComposition';
import { Size } from '../../../types';
import { IconName } from '../../Icon';
import { Tree } from '../Tree';
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

export interface INode<T = unknown> {
  readonly isOpen?: Readonly<boolean>;
  readonly id?: Readonly<ReactText>;
  readonly data?: Readonly<T>;
}

export interface NodeProps extends INode {
  readonly isDefaultOpen?: Readonly<boolean>;
  readonly onChange?: (node: Readonly<INode>) => void;
  readonly iconOpen?: Readonly<IconName>;
  readonly iconClose?: Readonly<IconName>;
}

export interface NodePropsIntern extends NodeProps {
  readonly size?: Readonly<Size>;
  readonly isAlternative?: Readonly<boolean>;
}

export const Node: FC<Readonly<
  PropsWithChildren<Readonly<NodePropsIntern>>
>> = (props): Readonly<ReactElement> => {
  const {
    children,
    size,
    isAlternative,
    data,
    id,
    isDefaultOpen,
    iconOpen,
    iconClose
  } = props;
  const [isOpen, setOpen] = useState<Readonly<boolean>>(!!isDefaultOpen);

  useEffect(() => {
    if (typeof props.isOpen !== 'undefined') {
      setOpen(props.isOpen);
    }
  }, [props.isOpen]);

  const { getFilteredChildren } = useComposition();
  const nodes = getFilteredChildren(children, Node.displayName);
  const hasChildren: Readonly<boolean> = nodes.length > 0;
  const content = getFilteredChildren(children, Tree.Node.displayName, true);

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
    setOpen(prev => {
      const isOpen: Readonly<boolean> =
        typeof props.isOpen !== 'undefined' ? props.isOpen : !prev;

      props.onChange?.({ isOpen, data, id });
      return isOpen;
    });
  };

  return (
    <>
      <TreeNode size={size} isOpened={isOpen}>
          <TreeNodeContent isLeftShift={!hasChildren}>
          {hasChildren && (
            <TreeButton onClick={onClick} size={size}>
              <TreeIcon name={(isOpen ? iconClose : iconOpen) as IconName} />
            </TreeButton>
          )}

          {content}
        </TreeNodeContent>

        {isOpen && hasChildren && (
          <Tree size={size} isAlternative={isAlternative}>
            {nodes.map((node, key) => (
              <Tree.Node key={key} {...node.props} />
            ))}
          </Tree>
        )}
      </TreeNode>
    </>
  );
};

Node.defaultProps = {
  isAlternative: false,
  iconOpen: 'arrowRight',
  iconClose: 'arrowDown'
};

Node.displayName = `Node`;

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect, useState } from 'react';
import { useComposition } from '../../../hooks/useComposition';
import { Tree } from '../Tree';
import { StyledTreeButton, StyledTreeButtonAlt, StyledTreeIcon, StyledTreeIconAlt, StyledTreeNode, StyledTreeNodeAlt, StyledTreeNodeContent, StyledTreeNodeContentAlt } from './style';
export var Node = function (props) {
    var children = props.children, size = props.size, isAlternative = props.isAlternative, data = props.data, id = props.id, isDefaultOpen = props.isDefaultOpen, iconOpen = props.iconOpen, iconClose = props.iconClose;
    var _a = useState(!!isDefaultOpen), isOpen = _a[0], setOpen = _a[1];
    useEffect(function () {
        if (typeof props.isOpen !== 'undefined') {
            setOpen(props.isOpen);
        }
    }, [props.isOpen]);
    var getFilteredChildren = useComposition().getFilteredChildren;
    var nodes = getFilteredChildren(children, Node.displayName);
    var hasChildren = nodes.length > 0;
    var content = getFilteredChildren(children, Node.displayName, true);
    var TreeNode = StyledTreeNode;
    var TreeNodeContent = StyledTreeNodeContent;
    var TreeButton = StyledTreeButton;
    var TreeIcon = StyledTreeIcon;
    if (isAlternative) {
        TreeNode = StyledTreeNodeAlt;
        TreeNodeContent = StyledTreeNodeContentAlt;
        TreeButton = StyledTreeButtonAlt;
        TreeIcon = StyledTreeIconAlt;
    }
    var onClick = function () {
        setOpen(function (prev) {
            var _a, _b, _c, _d;
            var isOpen = !prev;
            if (typeof props.isOpen !== 'undefined') {
                (_b = (_a = props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, { isOpen: !props.isOpen, data: data, id: id });
                return props.isOpen;
            }
            (_d = (_c = props).onChange) === null || _d === void 0 ? void 0 : _d.call(_c, { isOpen: isOpen, data: data, id: id });
            return isOpen;
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(TreeNode, { size: size, isOpened: isOpen },
            React.createElement(TreeNodeContent, { isLeftShift: !hasChildren },
                hasChildren && (React.createElement(TreeButton, { onClick: onClick, size: size },
                    React.createElement(TreeIcon, { name: (isOpen ? iconClose : iconOpen) }))),
                content),
            isOpen && hasChildren && (React.createElement(Tree, { size: size, isAlternative: isAlternative }, nodes.map(function (node, key) { return (React.createElement(Tree.Node, __assign({ key: key }, node.props))); }))))));
};
Node.defaultProps = {
    isAlternative: false,
    iconOpen: 'arrowRight',
    iconClose: 'arrowDown'
};
Node.displayName = "Node";
//# sourceMappingURL=Node.js.map
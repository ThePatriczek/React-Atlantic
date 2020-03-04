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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from 'react';
import { useComposition } from '../../hooks/useComposition';
import { Node } from './Node';
import { StyledTree, StyledTreeAlt } from './style';
export var Tree = function (props) {
    var children = props.children, isAlternative = props.isAlternative, size = props.size;
    var getFilteredChildren = useComposition().getFilteredChildren;
    var nodes = getFilteredChildren(props.nodes, Tree.Node.displayName);
    nodes = __spreadArrays(nodes, getFilteredChildren(children, Tree.Node.displayName));
    var TreeComponent = isAlternative ? StyledTreeAlt : StyledTree;
    return (React.createElement(TreeComponent, { size: size }, nodes.map(function (node, key) { return (React.createElement(Tree.Node, __assign({ key: key }, node.props, { size: size, isAlternative: isAlternative }))); })));
};
Tree.defaultProps = {
    isAlternative: false,
    size: 'medium',
};
Tree.Node = Node;
Tree.displayName = "Tree";
//# sourceMappingURL=Tree.js.map
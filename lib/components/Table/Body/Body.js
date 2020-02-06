import React from 'react';
import { useComposition } from '../../../hooks/useComposition';
import { Table } from '../Table';
import { StyledBody } from './Body.style';
export var Body = function (props) {
    var children = props.children;
    var getFilteredChildren = useComposition().getFilteredChildren;
    var items = getFilteredChildren(children, Table.Row.displayName);
    return React.createElement(StyledBody, null, items);
};
Body.displayName = "Body";
//# sourceMappingURL=Body.js.map
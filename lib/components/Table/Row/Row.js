import React from 'react';
import { useComposition } from '../../../hooks/useComposition';
import { Column } from '../Column';
import { Table } from '../Table';
import { StyledRow } from './Row.style';
export var Row = function (props) {
    var children = props.children, onClick = props.onClick;
    var getFilteredChildren = useComposition().getFilteredChildren;
    var items = getFilteredChildren(children, Table.Column.displayName);
    return React.createElement(StyledRow, { onClick: function () { var _a; return (_a = onClick) === null || _a === void 0 ? void 0 : _a(); } }, items);
};
Row.Column = Column;
Row.displayName = "Row";
//# sourceMappingURL=Row.js.map
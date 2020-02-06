var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from 'react';
import { useComposition } from '../../hooks/useComposition';
import { Body } from './Body';
import { Column } from './Column';
import { TableContextProvider } from './Context';
import { Head } from './Head';
import { Row } from './Row';
import { StyledTable } from './Table.style';
export var Table = function (props) {
    var children = props.children, onSort = props.onSort, order = props.order, sortBy = props.sortBy;
    var getFilteredChildren = useComposition().getFilteredChildren;
    var row = getFilteredChildren(children, Table.Row.displayName);
    var thead = getFilteredChildren(children, Table.Head.displayName);
    var tbody = getFilteredChildren(children, Table.Body.displayName);
    var items = __spreadArrays(thead, tbody, row);
    return (React.createElement(TableContextProvider, { onSort: onSort, order: order, sortBy: sortBy },
        React.createElement(StyledTable, null, items)));
};
Table.Row = Row;
Table.Column = Column;
Table.Head = Head;
Table.Body = Body;
Table.displayName = "Table";
//# sourceMappingURL=Table.js.map
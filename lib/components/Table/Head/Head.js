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
import React from 'react';
import { useComposition } from '../../../hooks';
import { Table } from '../Table';
import { StyledHead } from './Head.style';
export var Head = function (props) {
    var children = props.children;
    var getFilteredChildren = useComposition().getFilteredChildren;
    var getHeaderColumns = function (columns) {
        var items = [];
        if (Array.isArray(columns)) {
            columns.map(function (item) {
                return items.push(__assign(__assign({}, item), { props: __assign(__assign({}, item.props), { isHeader: true }) }));
            });
        }
        else {
            items.push(__assign(__assign({}, columns), { props: __assign(__assign({}, columns.props), { isHeader: true }) }));
        }
        return items;
    };
    var rows = getFilteredChildren(children, Table.Row.displayName).map(function (row) {
        var items = getHeaderColumns(row.props.children);
        return React.createElement(Table.Row, null, items);
    });
    return React.createElement(StyledHead, null, rows);
};
Head.displayName = "Head";
//# sourceMappingURL=Head.js.map
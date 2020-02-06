import React from 'react';
import { Sorting } from '../components';
import { useTable } from '../Context';
import { StyledColumn, StyledColumnHeader, StyledColumnHeaderBox } from './Column.style';
export var Column = function (props) {
    var children = props.children, isHeader = props.isHeader, className = props.className, name = props.name;
    var _a = useTable(), onSort = _a.onSort, sortBy = _a.sortBy, order = _a.order;
    var hasName = typeof name !== 'undefined';
    var hasSortBy = typeof sortBy !== 'undefined';
    var isActive = hasName && hasSortBy && name === sortBy;
    console.log(sortBy);
    var onClick = function () {
        var _a, _b;
        (_b = (_a = props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (typeof name !== 'undefined') {
            onSort(name);
        }
    };
    if (isHeader) {
        return (React.createElement(StyledColumnHeader, { isClickable: !!props.onClick || hasName, onClick: onClick, className: className, isActive: isActive },
            React.createElement(StyledColumnHeaderBox, null,
                children,
                hasName && React.createElement(Sorting, { order: isActive ? order : undefined }))));
    }
    return (React.createElement(StyledColumn, { onClick: onClick, className: className }, children));
};
Column.defaultProps = {
    isHeader: false
};
Column.displayName = "Column";
//# sourceMappingURL=Column.js.map
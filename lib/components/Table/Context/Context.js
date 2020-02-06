import React, { createContext, useContext, useState } from 'react';
var defaultValue = {
    sortBy: "",
    onSort: function () { return null; }
};
export var TableContext = createContext(defaultValue);
export var useTable = function () { return useContext(TableContext); };
export var TableContextProvider = function (props) {
    var children = props.children;
    var _a = useState(defaultValue.sortBy), sortBy = _a[0], setSortBy = _a[1];
    var _b = useState(), order = _b[0], setOrder = _b[1];
    var onSort = function (sortBy) {
        var _a, _b;
        setSortBy(sortBy);
        if (props.order) {
            setOrder(undefined);
            (_b = (_a = props).onSort) === null || _b === void 0 ? void 0 : _b.call(_a, sortBy, props.order);
        }
        else {
            setOrder(function (prevOrder) {
                var _a, _b;
                var order;
                if (prevOrder === 'asc') {
                    order = 'desc';
                }
                else if (!prevOrder) {
                    order = 'asc';
                }
                (_b = (_a = props).onSort) === null || _b === void 0 ? void 0 : _b.call(_a, sortBy, order);
                return order;
            });
        }
    };
    return (React.createElement(TableContext.Provider, { value: {
            sortBy: props.sortBy || sortBy,
            onSort: onSort,
            order: props.order || order
        } }, children));
};
//# sourceMappingURL=Context.js.map
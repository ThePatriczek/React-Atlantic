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
export var getMergedItems = function (items, checkedItems) {
    var map = new Map();
    var arr = [];
    items.forEach(function (item) {
        if (!map.has(item.value)) {
            map.set(item.value, __assign(__assign({}, item), { isChecked: false }));
        }
    });
    checkedItems.forEach(function (item) {
        return map.set(item.value, __assign(__assign({}, item), { isChecked: true }));
    });
    map.forEach(function (item) { return arr.push(item); });
    return arr;
};
export var distinguishTypeAndReturnLabel = function (item) {
    var _a;
    if (item.label && typeof item.label === 'string') {
        return item.label;
    }
    else if (item.label &&
        typeof item.label === 'object' &&
        'props' in item.label) {
        return (_a = item.label) === null || _a === void 0 ? void 0 : _a.props.children;
    }
    else {
        return null;
    }
};
export var transferItemsRender = function (item, isCheckbox) {
    var _a, _b;
    if (typeof item.label === 'string' && !isCheckbox) {
        return React.createElement("span", null, item.label);
    }
    else if (typeof item.label === 'string' && isCheckbox) {
        return React.createElement(React.Fragment, null, item.label);
    }
    else if (item.label &&
        typeof item.label === 'object' &&
        'props' in item.label &&
        !isCheckbox) {
        return React.createElement("span", null, (_a = item.label) === null || _a === void 0 ? void 0 : _a.props.children);
    }
    else if (item.label &&
        typeof item.label === 'object' &&
        'props' in item.label &&
        isCheckbox) {
        return React.createElement(React.Fragment, null, (_b = item.label) === null || _b === void 0 ? void 0 : _b.props.children);
    }
    else {
        return null;
    }
};
//# sourceMappingURL=Transfer.utils.js.map
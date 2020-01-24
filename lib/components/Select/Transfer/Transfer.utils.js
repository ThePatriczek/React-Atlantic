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
//# sourceMappingURL=Transfer.utils.js.map
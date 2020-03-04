export var useComposition = function () {
    var getFilteredChildren = function (children, displayName, negation) {
        if (negation === void 0) { negation = false; }
        var items = [];
        if (!displayName) {
            throw new Error("You have to fill displayName of the Component!");
        }
        var filter = function (item) {
            var _a, _b, _c, _d;
            var condition = negation
                ? ((_b = (_a = item) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.displayName) !== displayName
                : ((_d = (_c = item) === null || _c === void 0 ? void 0 : _c.type) === null || _d === void 0 ? void 0 : _d.displayName) === displayName;
            if (condition && !Array.isArray(item)) {
                items.push(item);
            }
        };
        if (Array.isArray(children)) {
            children.forEach(function (item) {
                filter(item);
                if (Array.isArray(item)) {
                    item.map(filter);
                }
            });
        }
        else {
            var item = children;
            filter(item);
        }
        return items;
    };
    return { getFilteredChildren: getFilteredChildren };
};
//# sourceMappingURL=useComposition.js.map
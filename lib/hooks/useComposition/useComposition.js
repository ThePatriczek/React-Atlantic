export var useComposition = function () {
    var getFilteredChildren = function (children, displayName) {
        var _a, _b;
        var items = [];
        if (!displayName) {
            throw new Error("You have to fill displayName of the Component!");
        }
        if (Array.isArray(children)) {
            children.forEach(function (item) {
                var _a, _b;
                if (((_b = (_a = item) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.displayName) === displayName) {
                    items.push(item);
                }
            });
        }
        else {
            var item = children;
            if (((_b = (_a = item) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.displayName) === displayName) {
                items.push(item);
            }
        }
        return items;
    };
    return { getFilteredChildren: getFilteredChildren };
};
//# sourceMappingURL=useComposition.js.map
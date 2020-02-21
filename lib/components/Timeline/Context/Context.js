import React, { createContext, useContext, useEffect, useState } from 'react';
var defaultValue = {
    onChange: function () { return null; }
};
export var TimelineContext = createContext(defaultValue);
export var useTimeline = function () {
    return useContext(TimelineContext);
};
export var TimelineContextProvider = function (props) {
    var children = props.children, defaultActiveIndex = props.defaultActiveIndex;
    var _a = useState(defaultActiveIndex), activeIndex = _a[0], setActiveIndex = _a[1];
    useEffect(function () {
        if (typeof props.activeIndex !== 'undefined') {
            setActiveIndex(props.activeIndex);
        }
    }, [props.activeIndex]);
    var onChange = function (index) {
        var _a, _b, _c;
        setActiveIndex((_a = props.activeIndex, (_a !== null && _a !== void 0 ? _a : index)));
        (_c = (_b = props).onChange) === null || _c === void 0 ? void 0 : _c.call(_b, index);
    };
    return (React.createElement(TimelineContext.Provider, { value: { onChange: onChange, activeIndex: activeIndex } }, children));
};
//# sourceMappingURL=Context.js.map
import React, { createContext, useContext, useState } from 'react';
var defaultValue = {
    value: undefined,
    setValue: function () { return null; }
};
export var RadioGroupContext = createContext(defaultValue);
export var useRadioGroup = function () {
    return useContext(RadioGroupContext);
};
export var RadioGroupContextProvider = function (props) {
    var children = props.children, onChange = props.onChange;
    var _a = useState(defaultValue.value), value = _a[0], setVal = _a[1];
    var setValue = function (value) {
        var _a;
        setVal(value);
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(value);
    };
    return (React.createElement(RadioGroupContext.Provider, { value: { value: value, setValue: setValue } }, children));
};
//# sourceMappingURL=Context.js.map
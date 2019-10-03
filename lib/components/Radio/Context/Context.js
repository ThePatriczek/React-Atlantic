import * as React from 'react';
var defaultValue = {
    value: undefined,
    setValue: function () { return null; }
};
export var RadioGroupContext = React.createContext(defaultValue);
export var useRadioGroup = function () {
    return React.useContext(RadioGroupContext);
};
export var RadioGroupContextProvider = function (props) {
    var children = props.children, onChange = props.onChange;
    var _a = React.useState(defaultValue.value), value = _a[0], setVal = _a[1];
    var setValue = function (value) {
        setVal(value);
        if (onChange) {
            onChange(value);
        }
    };
    return (React.createElement(RadioGroupContext.Provider, { value: { value: value, setValue: setValue } }, children));
};
//# sourceMappingURL=Context.js.map
import * as React from 'react';
export var TextArea = function (props) {
    var isDisabled = props.isDisabled, placeholder = props.placeholder, defaultValue = props.defaultValue, onEnterPress = props.onEnterPress, autoFocus = props.autoFocus;
    var _a = React.useState(defaultValue || ""), value = _a[0], setValue = _a[1];
    var onChange = function (e) {
        var val = e.target.value;
        if (!isDisabled) {
            if (props.value === undefined) {
                setValue(val);
                if (props.onChange) {
                    props.onChange(val);
                }
            }
            else {
                if (props.onChange) {
                    props.onChange(val);
                }
            }
        }
    };
    var onKeyDown = function (e) {
        if (onEnterPress) {
            if (e.key === "Enter") {
                e.preventDefault();
                onEnterPress(e.currentTarget.value);
            }
        }
    };
    var onBlur = function (e) {
        if (props.onBlur) {
            props.onBlur();
        }
    };
    var onFocus = function (e) {
        if (props.onFocus) {
            props.onFocus();
        }
    };
    return (React.createElement("textarea", { placeholder: placeholder, value: props.value !== undefined ? props.value : value, onChange: onChange, disabled: isDisabled, onKeyDown: onKeyDown, onBlur: onBlur, onFocus: onFocus, autoFocus: autoFocus }));
};
//# sourceMappingURL=TextArea.js.map
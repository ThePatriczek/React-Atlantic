import { useState } from 'react';
export var useEventHandlers = function (props) {
    var _a, _b, _c, _d, _e;
    var _f = useState(((_b = (_a = props) === null || _a === void 0 ? void 0 : _a.others) === null || _b === void 0 ? void 0 : _b.isDefaultChecked) && ((_d = (_c = props) === null || _c === void 0 ? void 0 : _c.others) === null || _d === void 0 ? void 0 : _d.isDefaultChecked)), isChecked = _f[0], setChecked = _f[1];
    var _g = useState(((_e = props) === null || _e === void 0 ? void 0 : _e.defaultValue) || ""), value = _g[0], setValue = _g[1];
    var _h = useState(false), isFocused = _h[0], setFocused = _h[1];
    var onChangeClick = function (e, isPartiallyChecked) {
        var _a;
        if (e.type === 'click') {
            e.preventDefault();
        }
        if (!props.isDisabled) {
            if (props.others.isChecked === undefined) {
                if (!isPartiallyChecked) {
                    setChecked(e.type === 'click' ? !isChecked : (_a = e) === null || _a === void 0 ? void 0 : _a.target.checked);
                }
                if (props.others.onChange) {
                    props.others.onChange(!isChecked);
                }
            }
            else {
                if (props.others.onChange) {
                    props.others.onChange(!props.others.isChecked);
                }
            }
        }
    };
    var onChangeInput = function (e, handlersWithEvent) {
        var value = e.target.value;
        if (!props.isDisabled) {
            if (props.others.value === undefined) {
                setValue(value);
                if (props.others.onChange) {
                    props.others.onChange(handlersWithEvent ? e : value);
                }
            }
            else {
                if (props.others.onChange) {
                    props.others.onChange(handlersWithEvent ? e : value);
                }
            }
        }
    };
    var onKeyDown = function (e, onEnterPress, handlersWithEvent) {
        if (onEnterPress) {
            if (e.key === "Enter") {
                if (props.others.value || value) {
                    props.others.value
                        ? onEnterPress(props.others.value)
                        : onEnterPress(value);
                }
            }
        }
        if (handlersWithEvent && props.others.onKeyDown) {
            props.others.onKeyDown(e);
        }
    };
    var onKeyDownTextArea = function (e, onEnterPress) {
        if (onEnterPress) {
            if (e.key === "Enter") {
                e.preventDefault();
                onEnterPress(e.currentTarget.value);
            }
        }
    };
    var onFocus = function (e, onFocus) {
        setFocused(true);
        if (onFocus) {
            onFocus();
        }
    };
    var onBlur = function (e, onBlur) {
        setFocused(false);
        if (onBlur) {
            onBlur();
        }
    };
    var onClick = function (e) {
        if (props.others.onClick) {
            if (e) {
                e.preventDefault();
            }
            props.others.onClick();
        }
    };
    return {
        onChangeClick: onChangeClick,
        onChangeInput: onChangeInput,
        onKeyDown: onKeyDown,
        onKeyDownTextArea: onKeyDownTextArea,
        onFocus: onFocus,
        onBlur: onBlur,
        onClick: onClick,
        isChecked: isChecked,
        isFocused: isFocused,
        value: value
    };
};
//# sourceMappingURL=useEventHandlers.js.map
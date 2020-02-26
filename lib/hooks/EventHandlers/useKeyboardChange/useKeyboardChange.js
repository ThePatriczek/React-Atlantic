import { useCallback, useState } from 'react';
export var useKeyboardChange = function (props) {
    var _a;
    var _b = useState((_a = props.defaultValue, (_a !== null && _a !== void 0 ? _a : ""))), value = _b[0], setValue = _b[1];
    var onChangeInput = useCallback(function (e, handlersWithEvent) {
        var value = e.target.value;
        if (!props.isDisabled) {
            if (props.value === undefined) {
                setValue(value);
                if (props.onChange) {
                    props.onChange(handlersWithEvent ? e : value);
                }
            }
            else {
                if (props.onChange) {
                    props.onChange(handlersWithEvent ? e : value);
                }
            }
        }
    }, [value, props.deps]);
    var onKeyDown = useCallback(function (e, onEnterPress, handlersWithEvent) {
        if (!props.isDisabled) {
            if (onEnterPress) {
                if (e.key === "Enter") {
                    if (props.value || value) {
                        props.value ? onEnterPress(props.value) : onEnterPress(value);
                    }
                }
            }
            if (handlersWithEvent && props.onKeyDown) {
                props.onKeyDown(e);
            }
        }
    }, [value, props.deps]);
    var onKeyDownTextArea = useCallback(function (e, onEnterPress) {
        if (!props.isDisabled) {
            if (onEnterPress) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    onEnterPress(e.currentTarget.value);
                }
            }
            if (props.onKeyDown) {
                props.onKeyDown(e);
            }
        }
    }, [value, props.deps]);
    return {
        onChangeInput: onChangeInput,
        onKeyDown: onKeyDown,
        onKeyDownTextArea: onKeyDownTextArea,
        value: value
    };
};
//# sourceMappingURL=useKeyboardChange.js.map
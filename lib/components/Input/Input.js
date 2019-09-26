import * as React from 'react';
import { Icon } from '../Icon';
import { StyledInput, StyledInputWrapper, StyledInputWrapperAlt } from './Input.style';
import { TextArea } from './TextArea';

export var Input = function (props) {
    var defaultValue = props.defaultValue, isDisabled = props.isDisabled, placeholder = props.placeholder, id = props.id, onEnterPress = props.onEnterPress, iconLeft = props.iconLeft, iconRight = props.iconRight, autoFocus = props.autoFocus, isAlternative = props.isAlternative, size = props.size, isLoading = props.isLoading, className = props.className;
    var ref = React.createRef();
    var _a = React.useState(defaultValue || ""), value = _a[0], setValue = _a[1];
    var _b = React.useState(false), isFocused = _b[0], setFocused = _b[1];
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
                if (value) {
                    onEnterPress(value);
                }
            }
        }
    };
    var onBlur = function (e) {
        setFocused(false);
        if (props.onBlur) {
            props.onBlur();
        }
    };
    var onFocus = function (e) {
        setFocused(true);
        if (props.onFocus) {
            props.onFocus();
        }
    };
    if (isAlternative && !isDisabled) {
        return (React.createElement(StyledInputWrapperAlt, { size: size, isFocused: isFocused, iconLeft: !!iconLeft, iconRight: !!(iconRight || isLoading), hasValue: !!value, isDisabled: isDisabled, onClick: function () {
                if (ref.current) {
                    ref.current.focus();
                }
            }, className: className }, iconLeft || iconRight ? (React.createElement(StyledInputWrapper, { size: size, isFocused: isFocused, iconLeft: !!iconLeft, iconRight: !!(iconRight || isLoading), isDisabled: isDisabled, onClick: function () {
                if (ref.current) {
                    ref.current.focus();
                }
            } },
            iconLeft && React.createElement(Icon, { name: iconLeft }),
            React.createElement(StyledInput, { id: id, value: props.value !== undefined ? props.value : value, onChange: onChange, disabled: isDisabled, onKeyDown: onKeyDown, autoFocus: autoFocus, onBlur: onBlur, onFocus: onFocus, ref: ref, size: size }),
            React.createElement("label", null, placeholder),
            isLoading && React.createElement(Icon, { name: 'loading', isRotating: true }),
            iconRight && !isLoading && React.createElement(Icon, { name: iconRight }))) : (React.createElement(React.Fragment, null,
            React.createElement(StyledInput, { id: id, value: props.value !== undefined ? props.value : value, onChange: onChange, disabled: isDisabled, onKeyDown: onKeyDown, autoFocus: autoFocus, onBlur: onBlur, onFocus: onFocus, ref: ref, size: size }),
            React.createElement("label", null, placeholder)))));
    }
    return (React.createElement(StyledInputWrapper, { isFocused: isFocused, iconLeft: !!iconLeft, iconRight: !!(iconRight || isLoading), isDisabled: isDisabled, size: size, onClick: function () {
            if (ref.current) {
                ref.current.focus();
            }
        }, className: className },
        iconLeft && React.createElement(Icon, { name: iconLeft }),
        React.createElement(StyledInput, { id: id, value: props.value !== undefined ? props.value : value, onChange: onChange, disabled: isDisabled, placeholder: placeholder, onKeyDown: onKeyDown, autoFocus: autoFocus, onBlur: onBlur, onFocus: onFocus, ref: ref, size: size }),
        isLoading && React.createElement(Icon, { name: 'loading', isRotating: true }),
        iconRight && !isLoading && React.createElement(Icon, { name: iconRight })));
};
Input.defaultProps = {
    size: 'medium'
};
Input.TextArea = TextArea;
//# sourceMappingURL=Input.js.map
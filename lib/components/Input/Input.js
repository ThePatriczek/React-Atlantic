import * as React from 'react';
import { Icon } from '../Icon';
import { StyledInput, StyledInputWrapper, StyledInputWrapperAlt } from './Input.style';
import { TextArea } from './TextArea';
export var Input = function (props) {
    var transferFocus = props.transferFocus, defaultValue = props.defaultValue, isDisabled = props.isDisabled, placeholder = props.placeholder, id = props.id, onEnterPress = props.onEnterPress, iconLeft = props.iconLeft, iconRight = props.iconRight, autoFocus = props.autoFocus, isAlternative = props.isAlternative, size = props.size, isLoading = props.isLoading, className = props.className, autoComplete = props.autoComplete, htmlType = props.htmlType, isFullWidth = props.isFullWidth, handlersWithEvent = props.handlersWithEvent;
    var ref = React.createRef();
    var _a = React.useState(defaultValue || ""), value = _a[0], setValue = _a[1];
    var _b = React.useState(false), isFocused = _b[0], setFocused = _b[1];
    var onChange = function (e) {
        var val = e.target.value;
        if (!isDisabled) {
            if (props.value === undefined) {
                setValue(val);
                if (props.onChange) {
                    props.onChange(handlersWithEvent ? e : val);
                }
            }
            else {
                if (props.onChange) {
                    props.onChange(handlersWithEvent ? e : val);
                }
            }
        }
    };
    var onKeyDown = function (e) {
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
    var val = props.value !== undefined ? props.value : value;
    var Component = (React.createElement(StyledInput, { id: id, value: val, onChange: onChange, disabled: isDisabled, placeholder: isAlternative ? "" : placeholder, onKeyDown: onKeyDown, autoFocus: autoFocus, onBlur: onBlur, onFocus: onFocus, ref: ref, size: size, autoComplete: autoComplete, type: htmlType, isFullWidth: isFullWidth }));
    var AlternativeComponent = (React.createElement(StyledInputWrapperAlt, { size: size, isFocused: transferFocus, iconLeft: !!iconLeft, iconRight: !!(iconRight || isLoading), hasValue: !!val, isDisabled: isDisabled, onClick: function () {
            if (ref.current) {
                ref.current.focus();
            }
        }, className: className, isFullWidth: isFullWidth }, iconLeft || iconRight ? (React.createElement(StyledInputWrapper, { size: size, isFocused: typeof transferFocus !== 'undefined' ? transferFocus : isFocused, iconLeft: !!iconLeft, iconRight: !!(iconRight || isLoading), isDisabled: isDisabled, onClick: function () {
            if (ref.current) {
                ref.current.focus();
            }
        }, isFullWidth: isFullWidth },
        iconLeft && React.createElement(Icon, { name: iconLeft }),
        Component,
        React.createElement("label", null, placeholder),
        isLoading && React.createElement(Icon, { name: 'loading', isRotating: true }),
        iconRight && !isLoading && React.createElement(Icon, { name: iconRight }))) : (React.createElement(React.Fragment, null,
        Component,
        React.createElement("label", null, placeholder)))));
    if (isAlternative && !isDisabled) {
        return AlternativeComponent;
    }
    return (React.createElement(StyledInputWrapper, { isFocused: isFocused, iconLeft: !!iconLeft, iconRight: !!(iconRight || isLoading), isDisabled: isDisabled, size: size, onClick: function () {
            if (ref.current) {
                ref.current.focus();
            }
        }, className: className, isFullWidth: isFullWidth },
        iconLeft && React.createElement(Icon, { name: iconLeft }),
        Component,
        isLoading && React.createElement(Icon, { name: 'loading', isRotating: true }),
        iconRight && !isLoading && React.createElement(Icon, { name: iconRight })));
};
Input.defaultProps = {
    size: 'medium',
    htmlType: 'text'
};
Input.TextArea = TextArea;
//# sourceMappingURL=Input.js.map
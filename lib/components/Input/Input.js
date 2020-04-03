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
        var _a, _b;
        var val = e.target.value;
        if (!isDisabled) {
            if (typeof props.value === 'undefined') {
                setValue(val);
            }
            (_b = (_a = props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, handlersWithEvent ? e : val);
        }
    };
    var onKeyDown = function (e) {
        var _a, _b, _c;
        if (e.key === "Enter") {
            (_a = onEnterPress) === null || _a === void 0 ? void 0 : _a(value);
        }
        if (handlersWithEvent) {
            (_c = (_b = props).onKeyDown) === null || _c === void 0 ? void 0 : _c.call(_b, e);
        }
    };
    var onBlur = function (e) {
        var _a, _b;
        setFocused(false);
        (_b = (_a = props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    var onFocus = function (e) {
        var _a, _b;
        setFocused(true);
        (_b = (_a = props).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a);
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
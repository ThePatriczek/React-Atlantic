import * as React from 'react';
import { Icon } from '../../Icon';
import { StyledTextArea, StyledTextAreaIcon, StyledTextAreaWrapper } from './TextArea.style';
export var TextArea = function (props) {
    var isDisabled = props.isDisabled, placeholder = props.placeholder, defaultValue = props.defaultValue, onEnterPress = props.onEnterPress, autoFocus = props.autoFocus, iconLeft = props.iconLeft, iconRight = props.iconRight;
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
    var val = props.value !== undefined ? props.value : value;
    return (React.createElement(StyledTextAreaWrapper, { iconLeft: !!iconLeft, iconRight: !!iconRight, isDisabled: !!isDisabled },
        React.createElement(StyledTextArea, { placeholder: placeholder, value: val, onChange: onChange, disabled: isDisabled, onKeyDown: onKeyDown, onBlur: onBlur, onFocus: onFocus, autoFocus: autoFocus }),
        iconLeft && (React.createElement(StyledTextAreaIcon, { iconLeft: !!iconLeft, iconRight: false },
            React.createElement(Icon, { name: iconLeft }))),
        iconRight && (React.createElement(StyledTextAreaIcon, { iconLeft: false, iconRight: !!iconRight },
            React.createElement(Icon, { name: iconRight })))));
};
//# sourceMappingURL=TextArea.js.map
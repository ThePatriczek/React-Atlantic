import * as React from 'react';
import { useFocus } from '../../../hooks/EventHandlers/useFocus';
import { useKeyboardChange } from '../../../hooks/EventHandlers/useKeyboardChange';
import { Icon } from '../../Icon';
import { StyledTextArea, StyledTextAreaIcon, StyledTextAreaWrapper } from './TextArea.style';
export var TextArea = function (props) {
    var isDisabled = props.isDisabled, placeholder = props.placeholder, defaultValue = props.defaultValue, onEnterPress = props.onEnterPress, autoFocus = props.autoFocus, iconLeft = props.iconLeft, iconRight = props.iconRight;
    var _a = useKeyboardChange({
        isDisabled: isDisabled,
        defaultValue: defaultValue,
        deps: [props.value],
        onChange: props.onChange,
        value: props.value
    }), onKeyDownTextArea = _a.onKeyDownTextArea, onChangeInput = _a.onChangeInput, value = _a.value;
    var _b = useFocus(), onFocus = _b.onFocus, onBlur = _b.onBlur;
    var val = props.value !== undefined ? props.value : value;
    return (React.createElement(StyledTextAreaWrapper, { iconLeft: iconLeft, iconRight: iconRight, isDisabled: isDisabled, placeholder: placeholder, value: val, defaultValue: defaultValue, autoFocus: autoFocus },
        React.createElement(StyledTextArea, { placeholder: placeholder, value: val, onChange: onChangeInput, disabled: isDisabled, onKeyDown: function (e) { return onKeyDownTextArea(e, onEnterPress); }, onBlur: function (e) { return onBlur(e, props.onBlur); }, onFocus: function (e) { return onFocus(e, props.onFocus); }, autoFocus: autoFocus }),
        iconLeft && (React.createElement(StyledTextAreaIcon, { iconLeft: !!iconLeft, iconRight: false },
            React.createElement(Icon, { name: iconLeft }))),
        iconRight && (React.createElement(StyledTextAreaIcon, { iconLeft: false, iconRight: !!iconRight },
            React.createElement(Icon, { name: iconRight })))));
};
//# sourceMappingURL=TextArea.js.map
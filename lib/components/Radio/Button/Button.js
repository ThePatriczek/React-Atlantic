import React from 'react';
import { useRadioGroup } from '../Context';
import { useClickChange } from '../../../hooks/EventHandlers/useClickChange';
import { StyledRadioButtonInputHidden, StyledRadioButtonLabel, StyledRadioButtonSpan } from './Button.style';
export var Button = function (props) {
    var isDefaultChecked = props.isDefaultChecked, isDisabled = props.isDisabled, className = props.className, children = props.children, value = props.value, size = props.size;
    var _a = useRadioGroup(), ctxVal = _a.value, setCtxVal = _a.setValue;
    var _b = useClickChange({
        isDisabled: isDisabled,
        isDefaultChecked: isDefaultChecked,
        deps: [props.isChecked],
        isChecked: props.isChecked,
        onChange: props.onChange
    }), hookOnChange = _b.onChangeClick, isChecked = _b.isChecked;
    var onChange = function (e) {
        hookOnChange(e);
        if (!isDisabled) {
            if (value !== undefined) {
                setCtxVal(value);
            }
        }
    };
    var checked = props.isChecked || isChecked;
    if (ctxVal !== undefined) {
        checked = ctxVal === value;
    }
    return (React.createElement(StyledRadioButtonLabel, { isChecked: checked, isDisabled: isDisabled, className: "atlantic--radio_button " + className, size: size },
        React.createElement(StyledRadioButtonInputHidden, { onChange: onChange, checked: checked, disabled: isDisabled, value: value }),
        React.createElement(StyledRadioButtonSpan, { isDisabled: isDisabled, size: size }, children)));
};
Button.defaultProps = {
    size: 'medium'
};
//# sourceMappingURL=Button.js.map
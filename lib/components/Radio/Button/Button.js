import * as React from 'react';
import { useRadioGroup } from '../Context';
import { StyledRadioButtonInputHidden, StyledRadioButtonLabel, StyledRadioButtonSpan } from './Button.style';
export var Button = function (props) {
    var isDefaultChecked = props.isDefaultChecked, isDisabled = props.isDisabled, className = props.className, children = props.children, value = props.value, size = props.size;
    var _a = useRadioGroup(), ctxVal = _a.value, setCtxVal = _a.setValue;
    var _b = React.useState(!!isDefaultChecked), isChecked = _b[0], setChecked = _b[1];
    var onChange = function (e) {
        if (!isDisabled) {
            if (props.isChecked === undefined) {
                setChecked(e.target.checked);
                if (props.onChange) {
                    props.onChange(!isChecked);
                }
            }
            else {
                if (props.onChange) {
                    props.onChange(!props.isChecked);
                }
            }
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
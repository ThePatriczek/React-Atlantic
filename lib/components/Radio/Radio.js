import * as React from 'react';
import { Button } from './Button';
import { useRadioGroup } from './Context';
import { Group } from './Group';
import { StyledRadioInputHidden, StyledRadioInputShown, StyledRadioLabel, StyledRadioMark, StyledRadioSpan } from './Radio.style';
export var Radio = function (props) {
    var isDefaultChecked = props.isDefaultChecked, position = props.position, isDisabled = props.isDisabled, className = props.className, children = props.children, value = props.value;
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
    return (React.createElement(StyledRadioLabel, { isChecked: checked, isDisabled: isDisabled, className: className, position: position, isDefaultChecked: isDefaultChecked },
        position === 'right' && (React.createElement(StyledRadioSpan, { isDisabled: isDisabled }, children)),
        React.createElement(StyledRadioInputShown, { isDisabled: isDisabled },
            React.createElement(StyledRadioMark, { isDisabled: isDisabled, isChecked: checked },
                React.createElement(StyledRadioInputHidden, { onChange: onChange, checked: checked, disabled: isDisabled, value: value }))),
        position === 'left' && (React.createElement(StyledRadioSpan, { isDisabled: isDisabled }, children))));
};
Radio.defaultProps = {
    position: 'left'
};
Radio.Button = Button;
Radio.Group = Group;
//# sourceMappingURL=Radio.js.map
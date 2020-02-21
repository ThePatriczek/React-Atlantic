import * as React from 'react';
import { useClickChange } from '../../hooks/EventHandlers/useClickChange';
import { Button } from './Button';
import { useRadioGroup } from './Context';
import { Group } from './Group';
import { StyledRadioInputHidden, StyledRadioInputShown, StyledRadioLabel, StyledRadioMark, StyledRadioSpan } from './Radio.style';
export var Radio = function (props) {
    var isDefaultChecked = props.isDefaultChecked, position = props.position, isDisabled = props.isDisabled, className = props.className, children = props.children, value = props.value;
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
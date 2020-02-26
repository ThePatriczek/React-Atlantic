import React from 'react';
import { useRadioGroup } from '../../Radio/Context';
import { StyledRadioInputHidden } from '../../Radio/Radio.style';
import { StyledTab } from './Tab.style';
export var Tab = function (props) {
    var value = props.value, label = props.label, isDisabled = props.isDisabled, isAlternative = props.isAlternative;
    var _a = useRadioGroup(), ctxVal = _a.value, setCtxVal = _a.setValue;
    var isChecked = ctxVal === value;
    var onChange = function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopPropagation();
        if (!isDisabled) {
            setCtxVal(value);
        }
    };
    return (React.createElement(StyledTab, { isDisabled: !!isDisabled, isActive: isChecked, isAlternative: isAlternative },
        label,
        React.createElement(StyledRadioInputHidden, { checked: isChecked, onChange: onChange, disabled: isDisabled })));
};
Tab.defaultProps = {
    isDisabled: false
};
Tab.displayName = "Tab";
//# sourceMappingURL=Tab.js.map
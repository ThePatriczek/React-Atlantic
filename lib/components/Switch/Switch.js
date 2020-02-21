import * as React from 'react';
import { useClickChange } from '../../hooks/EventHandlers/useClickChange';
import { HiddenCheckbox } from '../Checkbox/Checkbox.style';
import { StyledSwitcherFalse, StyledSwitcherToggler, StyledSwitcherTrue, StyledSwitcherWrap, StyledSwitchLabel } from './Switch.style';
export var Switch = function (props) {
    var textOn = props.textOn, textOff = props.textOff, className = props.className, isDefaultChecked = props.isDefaultChecked, isDisabled = props.isDisabled, size = props.size, type = props.type;
    var _a = useClickChange({
        isDisabled: isDisabled,
        isDefaultChecked: isDefaultChecked,
        deps: [props.isChecked],
        isChecked: props.isChecked,
        onChange: props.onChange
    }), onChangeClick = _a.onChangeClick, isChecked = _a.isChecked;
    return (React.createElement(StyledSwitchLabel, { size: size, isChecked: props.isChecked || isChecked, htmlType: type, isDisabled: isDisabled, className: className },
        React.createElement(HiddenCheckbox, { onChange: onChangeClick, checked: props.isChecked || isChecked, disabled: isDisabled }),
        React.createElement(StyledSwitcherWrap, { htmlType: type, isChecked: props.isChecked || isChecked, size: size },
            React.createElement(StyledSwitcherTrue, { htmlType: type, size: size, isChecked: props.isChecked || isChecked, isDisabled: isDisabled }, textOn),
            React.createElement(StyledSwitcherToggler, { size: size, isChecked: props.isChecked || isChecked, htmlType: type, isDisabled: isDisabled }),
            React.createElement(StyledSwitcherFalse, { htmlType: type, size: size, isChecked: props.isChecked || isChecked, isDisabled: isDisabled }, textOff))));
};
Switch.defaultProps = {
    type: 'primary'
};
//# sourceMappingURL=Switch.js.map
import * as React from 'react';
import { Check } from '../../Icons';
import { HiddenCheckbox, StyledCheckboxIcon, StyledCheckboxInputShown, StyledCheckboxLabel, StyledCheckboxMark, StyledCheckboxSpan } from './Checkbox.style';
export var Checkbox = function (props) {
    var isPartiallyChecked = props.isPartiallyChecked, isDefaultChecked = props.isDefaultChecked, position = props.position, isDisabled = props.isDisabled, className = props.className, children = props.children;
    var _a = React.useState(!!isDefaultChecked), isChecked = _a[0], setChecked = _a[1];
    var onChange = function (e) {
        if (!isDisabled) {
            if (props.isChecked === undefined) {
                if (!isPartiallyChecked) {
                    setChecked(e.target.checked);
                }
                if (props.onChange) {
                    props.onChange(!isChecked);
                }
            }
            else {
                if (props.onChange) {
                    props.onChange(!props.isChecked);
                }
            }
        }
    };
    return (React.createElement(StyledCheckboxLabel, { isChecked: props.isChecked || isChecked, isDisabled: isDisabled, className: className },
        position === 'right' && (React.createElement(StyledCheckboxSpan, { isDisabled: isDisabled }, children)),
        React.createElement(StyledCheckboxInputShown, { isDisabled: isDisabled },
            React.createElement(StyledCheckboxMark, { isDisabled: isDisabled, isChecked: props.isChecked || isChecked, isPartiallyChecked: isPartiallyChecked },
                React.createElement(HiddenCheckbox, { onChange: onChange, checked: props.isChecked || isChecked, disabled: isDisabled }),
                (props.isChecked || isChecked) && (React.createElement(StyledCheckboxIcon, { isDisabled: isDisabled, isChecked: props.isChecked || isChecked, isPartiallyChecked: isPartiallyChecked },
                    React.createElement(Check, null))))),
        position === 'left' && (React.createElement(StyledCheckboxSpan, { isDisabled: isDisabled }, children))));
};
Checkbox.defaultProps = {
    position: 'left'
};
//# sourceMappingURL=Checkbox.js.map
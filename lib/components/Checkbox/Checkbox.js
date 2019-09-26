import * as React from 'react';
import { Tick } from '../../Icons';
import {
  StyledCheckboxIcon,
  StyledCheckboxInputHidden,
  StyledCheckboxInputShown,
  StyledCheckboxLabel,
  StyledCheckboxMark,
  StyledCheckboxSpan
} from './Checkbox.style';

export var Checkbox = function (props) {
    var isPartiallyChecked = props.isPartiallyChecked, isDefaultChecked = props.isDefaultChecked, textPosition = props.textPosition, text = props.text, isDisabled = props.isDisabled;
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
    return (React.createElement(StyledCheckboxLabel, { isChecked: props.isChecked || isChecked, isDisabled: isDisabled },
        text && textPosition === 'left' && (React.createElement(StyledCheckboxSpan, { isDisabled: isDisabled, textPosition: textPosition }, text)),
        React.createElement(StyledCheckboxInputShown, { isDisabled: isDisabled },
            React.createElement(StyledCheckboxMark, { isDisabled: isDisabled, isChecked: props.isChecked || isChecked, isPartiallyChecked: isPartiallyChecked },
                React.createElement(StyledCheckboxInputHidden, { onChange: onChange, checked: props.isChecked || isChecked, disabled: isDisabled }),
                React.createElement(StyledCheckboxIcon, { isDisabled: isDisabled, isChecked: props.isChecked || isChecked, isPartiallyChecked: isPartiallyChecked },
                    React.createElement(Tick, null)))),
        text && textPosition === 'right' && (React.createElement(StyledCheckboxSpan, { isDisabled: isDisabled, textPosition: textPosition }, text))));
};
Checkbox.defaultProps = {
    textPosition: 'right'
};
//# sourceMappingURL=Checkbox.js.map
import * as React from 'react';
import { RadioGroupContextProvider } from '../Context';
import { StyledRadioGroup } from './Group.style';
export var Group = function (props) {
    var children = props.children, onChange = props.onChange;
    return (React.createElement(StyledRadioGroup, null,
        React.createElement(RadioGroupContextProvider, { onChange: onChange }, children)));
};
//# sourceMappingURL=Group.js.map
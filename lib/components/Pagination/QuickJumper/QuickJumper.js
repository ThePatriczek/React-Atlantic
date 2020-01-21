import React, { useState } from 'react';
import { Typography } from '../../Typography';
import { StyledPaginationInput } from '../Pagination.style';
import { StyledQuickJumper } from './QuickJumper.style';
var Text = Typography.Text;
export var QuickJumper = function (props) {
    var isDisabled = props.isDisabled, count = props.count, text = props.text, onChange = props.onChange;
    var _a = useState(""), val = _a[0], setValue = _a[1];
    var onEnter = function () {
        var num = parseInt(val, 0);
        if (num > 0 && num <= count) {
            onChange(num);
        }
        setValue("");
    };
    return (React.createElement(StyledQuickJumper, null,
        React.createElement(Text, null, text),
        React.createElement(StyledPaginationInput, { value: val, onChange: function (value) { return setValue(value); }, onEnterPress: onEnter, isDisabled: isDisabled })));
};
//# sourceMappingURL=QuickJumper.js.map
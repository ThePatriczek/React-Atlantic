import React from 'react';
import { Option, Select } from '../../Select';
import { Typography } from '../../Typography';
import { StyledSizeChanger } from './SizeChanger.style';
var Text = Typography.Text;
export var SizeChanger = function (props) {
    var pageSizeOptions = props.pageSizeOptions, pageSize = props.pageSize, isDisabled = props.isDisabled, setPageSize = props.setPageSize, text = props.text, onSizeChange = props.onSizeChange;
    var onChange = function (value) {
        setPageSize(value.value);
        onSizeChange(value.value);
    };
    if (!pageSizeOptions) {
        return null;
    }
    return (React.createElement(StyledSizeChanger, null,
        React.createElement(Select, { isDisabled: isDisabled, value: pageSize, onChange: onChange }, pageSizeOptions.map(function (item, key) { return (React.createElement(Option, { value: item, key: key },
            React.createElement(Text, null, item + " / " + text))); }))));
};
//# sourceMappingURL=SizeChanger.js.map
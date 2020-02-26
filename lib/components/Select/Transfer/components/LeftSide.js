import React from 'react';
import { Checkbox } from '../../../Checkbox';
import { Icon } from '../../../Icon';
import { StyledInputHeader, StyledSearchButton, StyledTransferInput, StyledTransferLi, StyledTransferSide, StyledTransferUl } from '../Transfer.style';
import { transferItemsRender } from '../Transfer.utils';
var LeftSide = function (props) {
    var items = props.items, isFocused = props.isFocused, isHalfOpen = props.isHalfOpen, onKeyDown = props.onKeyDown, inputOnChange = props.inputOnChange, isOpen = props.isOpen, searchedValue = props.searchedValue, placeholder = props.placeholder, setSearchedValue = props.setSearchedValue, isAlternative = props.isAlternative, isDisabled = props.isDisabled, resultValue = props.resultValue, setOpen = props.setOpen, setFocus = props.setFocus, size = props.size, onChange = props.onChange, notFoundComponent = props.notFoundComponent, isFullWidth = props.isFullWidth, direction = props.direction;
    var filtration = function (item) {
        if (typeof item.label === 'string') {
            return item.label.toLowerCase().includes(searchedValue.toLowerCase());
        }
        else if (item.label &&
            typeof item.label === 'object' &&
            'props' in item.label) {
            return item.label.props.children
                .toLowerCase()
                .includes(searchedValue.toLowerCase());
        }
        return null;
    };
    var filtered = items.filter(filtration);
    var onFocus = function () {
        if (!isOpen) {
            setOpen(!isOpen);
            setFocus(!isFocused);
        }
    };
    return (React.createElement(StyledTransferSide, { direction: direction, isHalfOpen: isHalfOpen, isOpen: isOpen, isFullWidth: isFullWidth },
        React.createElement(StyledInputHeader, null,
            React.createElement(StyledTransferInput, { transferFocus: isOpen, isAlternative: isAlternative, direction: direction, isHalfOpen: isHalfOpen, onKeyDown: onKeyDown, onChange: inputOnChange, isOpen: isOpen, value: isOpen ? searchedValue : resultValue, placeholder: placeholder, iconRight: isOpen ? 'arrowUp' : 'arrowDown', isFullWidth: true, onFocus: onFocus, size: size }),
            searchedValue && (React.createElement(StyledSearchButton, { onClick: function () { return setSearchedValue(''); }, size: size },
                React.createElement(Icon, { name: 'clear' })))),
        isOpen && (React.createElement(React.Fragment, null,
            filtered.length > 0 && (React.createElement(StyledTransferUl, { isOpen: isOpen }, filtered.map(function (item) { return (React.createElement(StyledTransferLi, { key: item.value, size: size },
                React.createElement(Checkbox, { isChecked: item.isChecked, onChange: function (isChecked) {
                        onChange(item.value, isChecked);
                    } }, transferItemsRender(item, true)))); }))),
            filtered.length === 0 && React.createElement(React.Fragment, null, notFoundComponent)))));
};
export default LeftSide;
//# sourceMappingURL=LeftSide.js.map
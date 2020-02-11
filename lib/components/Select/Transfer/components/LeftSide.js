import React from 'react';
import { Checkbox } from '../../../Checkbox';
import { Icon } from '../../../Icon';
import { StyledInputHeader, StyledInputText, StyledSearchButton, StyledTransferInput, StyledTransferLi, StyledTransferSide, StyledTransferUl } from '../Transfer.style';
var LeftSide = function (props) {
    var items = props.items, isFocused = props.isFocused, isHalfOpen = props.isHalfOpen, onKeyDown = props.onKeyDown, inputOnChange = props.inputOnChange, isOpen = props.isOpen, searchedValue = props.searchedValue, placeholder = props.placeholder, setSearchedValue = props.setSearchedValue, isDisabled = props.isDisabled, resultValue = props.resultValue, setOpen = props.setOpen, setFocus = props.setFocus, size = props.size, savedItems = props.savedItems, onChange = props.onChange, notFoundComponent = props.notFoundComponent, isFullWidth = props.isFullWidth, direction = props.direction;
    var filter = function (item) {
        if (typeof item.label === 'string') {
            return item.label.toLowerCase().includes(searchedValue.toLowerCase());
        }
        else {
            return item.value.toLowerCase().includes(searchedValue.toLowerCase());
        }
    };
    var filtered = items.filter(filter);
    return (React.createElement(StyledTransferSide, { direction: direction, isHalfOpen: isHalfOpen, isOpen: isOpen, isFullWidth: isFullWidth },
        isOpen ? (React.createElement(StyledInputHeader, null,
            React.createElement(StyledTransferInput, { direction: direction, isHalfOpen: isHalfOpen, onKeyDown: onKeyDown, onChange: inputOnChange, isOpen: isOpen, value: searchedValue, placeholder: placeholder, iconRight: 'arrowUp', isFullWidth: true, autoFocus: true, size: size }),
            searchedValue && (React.createElement(StyledSearchButton, { onClick: function () { return setSearchedValue(''); }, size: size },
                React.createElement(Icon, { name: 'clear' }))))) : (React.createElement(React.Fragment, null,
            React.createElement(StyledTransferInput, { onKeyDown: onKeyDown, size: size, isDisabled: isDisabled, isOpen: isOpen, value: resultValue, isFullWidth: isFullWidth, placeholder: placeholder, iconRight: 'arrowDown', onFocus: function () {
                    setOpen(!isOpen);
                    setFocus(!isFocused);
                } }),
            React.createElement(StyledInputText, { size: size },
                React.createElement(React.Fragment, null, items
                    .filter(function (item) { return savedItems.has(item.value); })
                    .map(function (item, index) { return (React.createElement("span", null,
                    item.label,
                    index < savedItems.size - 1 ? ", " : "")); }))))),
        isOpen && (React.createElement(React.Fragment, null,
            filtered.length > 0 && (React.createElement(StyledTransferUl, { isOpen: isOpen }, filtered.map(function (item) { return (React.createElement(StyledTransferLi, { key: item.value, size: size },
                React.createElement(Checkbox, { isChecked: item.isChecked, onChange: function (isChecked) {
                        onChange(item.value, isChecked);
                    } }, item.label))); }))),
            filtered.length === 0 && React.createElement(React.Fragment, null, notFoundComponent)))));
};
export default LeftSide;
//# sourceMappingURL=LeftSide.js.map
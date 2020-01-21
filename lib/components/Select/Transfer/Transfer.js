import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import { Icon } from '../../Icon';
import { NotFound } from '../../NotFound';
import { Option } from '../Option';
import { checkChildrenAndOptions, getPositionOfElementInViewport, isElementInViewport } from '../Select.utils';
import { DeleteAllButton, StyledChosenHeader, StyledInputHeader, StyledSearchButton, StyledTransfer, StyledTransferContainer, StyledTransferDeleteAllButtonIcon, StyledTransferFooter, StyledTransferInput, StyledTransferLi, StyledTransferSide, StyledTransferSpan, StyledTransferUl } from './Transfer.style';
export var Transfer = function (props) {
    var _a;
    var placeholder = props.placeholder, options = props.options, isDisabled = props.isDisabled, children = props.children, closeText = props.closeText, submitText = props.submitText, deleteAllText = props.deleteAllText, notFoundComponent = props.notFoundComponent, size = props.size, chosenComponent = props.chosenComponent;
    var _b = useState(false), isOpen = _b[0], setOpen = _b[1];
    var _c = useState(''), resultValue = _c[0], setResultValue = _c[1];
    var _d = useState(''), searchedValue = _d[0], setSearchedValue = _d[1];
    var _e = useState(new Map()), savedItems = _e[0], setSavedItems = _e[1];
    var _f = useState(false), isFocused = _f[0], setFocus = _f[1];
    var _g = useState(checkChildrenAndOptions(children, options)), items = _g[0], setItems = _g[1];
    var _h = useState('unset'), position = _h[0], setPosition = _h[1];
    var ref = useRef(null);
    var checkedItems = items.filter(function (item) { return item.isChecked; });
    var isHalfOpen = checkedItems.length > 0;
    useEffect(function () {
        if (isOpen) {
            window.onmousedown = onMouseDown;
        }
        ref.current && !isElementInViewport(ref.current)
            ? setPosition(getPositionOfElementInViewport(ref.current))
            : setPosition('unset');
        var map = new Map();
        checkedItems.forEach(function (item) {
            if (!savedItems.has(item.value)) {
                map.set(item.value, false);
            }
        });
        items.forEach(function (item) {
            if (!savedItems.has(item.value)) {
                map.set(item.value, false);
            }
        });
        setItems(function (prevState) {
            return prevState.map(function (item) {
                item.isChecked = !map.has(item.value);
                return item;
            });
        });
        setSearchedValue('');
        return function () {
            window.onmousedown = null;
        };
    }, [isOpen]);
    var onMouseDown = function (e) {
        var _a;
        if (!((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            setOpen(false);
            setFocus(false);
        }
    };
    var onChange = function (value, isChecked) {
        setItems(function (prevState) {
            var _a, _b;
            var arr = prevState.map(function (item) {
                if (item.value === value) {
                    item.isChecked = isChecked;
                }
                return item;
            });
            (_b = (_a = props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, arr
                .filter(function (item) { return item.isChecked; })
                .map(function (item) { return ({
                value: item.value,
                label: item.label,
                className: item.className && item.className
            }); }));
            return arr;
        });
    };
    var uncheckAll = function () {
        setItems(function (prevState) {
            return prevState.map(function (item) {
                item.isChecked = false;
                return item;
            });
        });
    };
    var onClose = function () {
        setOpen(!isOpen);
        if (props.onCancel) {
            var arr_1 = [];
            items.forEach(function (item) {
                var obj = {
                    value: item.value,
                    label: item.label,
                    className: item.className && item.className
                };
                if (savedItems.has(item.value)) {
                    arr_1.push(obj);
                }
            });
            props.onCancel(arr_1);
        }
    };
    var onSubmit = function () {
        if (props.onSubmit) {
            var arr_2 = [];
            checkedItems.forEach(function (item) {
                var obj = {
                    value: item.value,
                    label: item.label,
                    className: item.className && item.className
                };
                arr_2.push(obj);
            });
            props.onSubmit(arr_2);
        }
        var arr = checkedItems.map(function (item) { return item.value; });
        var map = new Map();
        checkedItems.forEach(function (item) {
            map.set(item.value, true);
        });
        setResultValue(arr.join(", "));
        setSavedItems(map);
        setOpen(!isOpen);
        setFocus(!isFocused);
    };
    var inputOnChange = function (value) {
        setSearchedValue(value);
    };
    var LeftSide = (React.createElement(StyledTransferSide, { isHalfOpen: isHalfOpen, isOpen: isOpen },
        isOpen ? (React.createElement(StyledInputHeader, null,
            React.createElement(StyledTransferInput, { onChange: inputOnChange, isOpen: isOpen, value: searchedValue, placeholder: placeholder, iconRight: 'arrowUp', isFullWidth: true, autoFocus: true, size: size }),
            searchedValue && (React.createElement(StyledSearchButton, { onClick: function () { return setSearchedValue(''); }, size: size },
                React.createElement(Icon, { name: 'clear' }))))) : (React.createElement(StyledTransferInput, { size: size, isDisabled: isDisabled, isOpen: isOpen, value: resultValue, placeholder: placeholder, iconRight: 'arrowDown', isFullWidth: true, onFocus: function () {
                setOpen(!isOpen);
                setFocus(!isFocused);
            } })),
        isOpen && (React.createElement(React.Fragment, null,
            items.filter(function (item) {
                return item.value.toLowerCase().includes(searchedValue.toLowerCase());
            }).length !== 0 && (React.createElement(StyledTransferUl, { isOpen: isOpen }, items
                .filter(function (item) {
                return item.value.toLowerCase().includes(searchedValue.toLowerCase());
            })
                .map(function (item) { return (React.createElement(StyledTransferLi, { key: item.value, size: size },
                React.createElement(Checkbox, { isChecked: item.isChecked, onChange: function (isChecked) {
                        onChange(item.value, isChecked);
                    } }, item.label))); }))),
            items.filter(function (item) {
                return item.value.toLowerCase().includes(searchedValue.toLowerCase());
            }).length === 0 && React.createElement(React.Fragment, null, notFoundComponent)))));
    var RightSide = (React.createElement(StyledTransferSide, { isHalfOpen: isHalfOpen, isOpen: isOpen },
        React.createElement(StyledChosenHeader, { size: size },
            React.createElement(StyledTransferSpan, null, (_a = chosenComponent) === null || _a === void 0 ? void 0 : _a(checkedItems.length, items.length)),
            React.createElement(DeleteAllButton, { isTransparent: true, size: 'small', type: 'error', onClick: function () {
                    uncheckAll();
                } },
                React.createElement(StyledTransferDeleteAllButtonIcon, { name: 'trash', size: size }),
                size === 'small' ? null : deleteAllText)),
        React.createElement(StyledTransferUl, null, checkedItems.map(function (item) { return (React.createElement(StyledTransferLi, { size: size, key: item.value, onClick: function () {
                onChange(item.value, false);
            } },
            item.label,
            React.createElement(Icon, { name: 'error' }))); }))));
    var Footer = (React.createElement(StyledTransferFooter, null,
        React.createElement(Button, { size: size, type: 'default', onClick: onClose }, closeText),
        React.createElement(Button, { size: size, type: 'primary', onClick: onSubmit }, submitText)));
    return (React.createElement(StyledTransferContainer, { placeholder: placeholder, deleteAllText: deleteAllText, closeText: closeText, submitText: submitText, isDisabled: isDisabled, options: options, notFoundComponent: notFoundComponent, size: size },
        React.createElement(StyledTransfer, { ref: ref, position: position, isHalfOpen: isHalfOpen, isOpen: isOpen, isFocused: isFocused, isDisabled: isDisabled },
            LeftSide,
            isOpen && isHalfOpen && RightSide,
            isOpen && Footer)));
};
Transfer.defaultProps = {
    isDisabled: false,
    submitText: 'Submit',
    closeText: 'Close',
    deleteAllText: 'Delete all',
    placeholder: 'Select an option',
    size: 'medium',
    notFoundComponent: React.createElement(NotFound, { title: "No items found..." }),
    chosenComponent: function (checked, total) { return (React.createElement(React.Fragment, null,
        React.createElement("strong", null, "Chosen: "), checked + " of " + total)); }
};
Transfer.Option = Option;
//# sourceMappingURL=Transfer.js.map
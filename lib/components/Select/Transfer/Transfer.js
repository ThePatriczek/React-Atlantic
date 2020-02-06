var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useEffect, useRef, useState } from 'react';
import { NotFound } from '../../NotFound';
import { Option } from '../Option';
import { checkChildrenAndOptions, getPositionOfElementInViewport, isElementInViewport } from '../Select.utils';
import Footer from './components/Footer';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import { StyledTransfer, StyledTransferContainer } from './Transfer.style';
import { getMergedItems } from './Transfer.utils';
export var Transfer = function (props) {
    var value = props.value, className = props.className, defaultValue = props.defaultValue, placeholder = props.placeholder, options = props.options, isDisabled = props.isDisabled, children = props.children, closeText = props.closeText, submitText = props.submitText, deleteAllText = props.deleteAllText, notFoundComponent = props.notFoundComponent, size = props.size, chosenComponent = props.chosenComponent, isFullWidth = props.isFullWidth, direction = props.direction;
    var _a = useState(false), isOpen = _a[0], setOpen = _a[1];
    var _b = useState(''), resultValue = _b[0], setResultValue = _b[1];
    var _c = useState(''), searchedValue = _c[0], setSearchedValue = _c[1];
    var _d = useState(false), isFocused = _d[0], setFocus = _d[1];
    var _e = useState(checkChildrenAndOptions(children, options)), items = _e[0], setItems = _e[1];
    var checkedItems = items.filter(function (item) { return item.isChecked; });
    var _f = useState(new Map()), savedItems = _f[0], setSavedItems = _f[1];
    var _g = useState('unset'), position = _g[0], setPosition = _g[1];
    var ref = useRef(null);
    var isHalfOpen = checkedItems.length > 0;
    useEffect(function () {
        if (defaultValue && !value) {
            var map = new Map(defaultValue.map(function (item) { return [item.value, true]; }));
            setResultValue(defaultValue.map(function (item) { return item.label; }).join(", "));
            setSavedItems(map);
            setItems(getMergedItems(checkChildrenAndOptions(children, options), defaultValue));
        }
    }, []);
    useEffect(function () {
        if (value) {
            var map = new Map(value.map(function (item) { return [item.value, true]; }));
            setResultValue(value.map(function (item) { return item.label; }).join(", "));
            setSavedItems(map);
            setItems(function (prevState) {
                return getMergedItems(prevState, value);
            });
        }
    }, [value]);
    useEffect(function () {
        if (isDisabled) {
            setOpen(false);
            setFocus(false);
        }
    }, [isDisabled]);
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('mousedown', onMouseDown);
            window.addEventListener('keydown', onKeyDown);
        }
        ref.current && !isElementInViewport(ref.current)
            ? setPosition(getPositionOfElementInViewport(ref.current))
            : setPosition('unset');
        if (!value) {
            var map_1 = new Map();
            checkedItems.forEach(function (item) {
                if (!savedItems.has(item.value)) {
                    map_1.set(item.value, false);
                }
            });
            items.forEach(function (item) {
                if (!savedItems.has(item.value)) {
                    map_1.set(item.value, false);
                }
            });
            setItems(function (prevState) {
                return prevState.map(function (item) {
                    item.isChecked = !map_1.has(item.value);
                    return item;
                });
            });
            setSearchedValue('');
        }
        return function () {
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);
    var onMouseDown = function (e) {
        var _a;
        if (!((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            setOpen(false);
            setFocus(false);
        }
    };
    var onKeyDown = function (e) {
        if (e.key === 'Escape') {
            setOpen(false);
            setFocus(false);
        }
    };
    var onChange = function (value, isChecked) {
        if (!isDisabled) {
            setItems(function (prevState) {
                var _a, _b;
                var arr = prevState.map(function (oldItem) {
                    var item = __assign({}, oldItem);
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
                return props.value ? __spreadArrays(prevState) : arr;
            });
        }
    };
    var uncheckAll = function () {
        if (!isDisabled) {
            setItems(function (prevState) {
                var _a, _b;
                var arr = prevState.map(function (oldItem) {
                    var item = __assign({}, oldItem);
                    item.isChecked = false;
                    return item;
                });
                (_b = (_a = props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, []);
                return props.value ? __spreadArrays(prevState) : arr;
            });
        }
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
    var formSubmit = function (e) {
        e.preventDefault();
        onSubmit();
    };
    var onSubmit = function () {
        if (!isDisabled) {
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
            var arr = checkedItems.map(function (item) { return item.label; });
            var map_2 = new Map();
            checkedItems.forEach(function (item) {
                map_2.set(item.value, true);
            });
            setResultValue(arr.join(", "));
            setSavedItems(map_2);
            setOpen(!isOpen);
            setFocus(!isFocused);
        }
    };
    var inputOnChange = function (value) {
        setSearchedValue(value);
    };
    return (React.createElement(StyledTransferContainer, { className: className, placeholder: placeholder, deleteAllText: deleteAllText, closeText: closeText, submitText: submitText, isDisabled: isDisabled, options: options, notFoundComponent: notFoundComponent, size: size, isFullWidth: isFullWidth, direction: direction },
        React.createElement(StyledTransfer, { size: size, ref: ref, isFullWidth: isFullWidth, position: position, isHalfOpen: isHalfOpen, isOpen: isOpen, isFocused: isFocused, isDisabled: isDisabled, direction: direction },
            React.createElement("form", { onSubmit: formSubmit },
                React.createElement(LeftSide, { direction: direction, isHalfOpen: isHalfOpen, isOpen: isOpen, onKeyDown: onKeyDown, inputOnChange: inputOnChange, searchedValue: searchedValue, placeholder: placeholder, setSearchedValue: setSearchedValue, isDisabled: isDisabled, resultValue: resultValue, setOpen: setOpen, setFocus: setFocus, size: size, savedItems: savedItems, onChange: onChange, notFoundComponent: notFoundComponent, isFocused: isFocused, items: items, isFullWidth: isFullWidth }),
                isOpen && isHalfOpen && (React.createElement(RightSide, { direction: direction, chosenComponent: chosenComponent, checkedItems: checkedItems, isHalfOpen: isHalfOpen, isOpen: isOpen, isFullWidth: isFullWidth, items: items, uncheckAll: uncheckAll, size: size, deleteAllText: deleteAllText, onChange: onChange }))),
            isOpen && (React.createElement(Footer, { closeText: closeText, size: size, onClose: onClose, onSubmit: onSubmit, submitText: submitText })))));
};
Transfer.defaultProps = {
    isFullWidth: false,
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
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { default as ReactSelect } from 'react-select';
import { Icon } from '../Icon';
import { Option as OptionComponent } from './components';
import { Option } from './Option';
import { useEffect, useRef, useState } from 'react';
import { ClearIndicator, Control, CrossIcon, DropdownIndicator, IndicatorsContainer, Input, Menu, MenuList, MultiValue, MultiValueLabel, MultiValueRemove, NoOptionsMessage, Placeholder, SelectContainer, SelectContainerWrapper, SingleValue, ValueContainer } from './Select.style';
import { checkChildrenAndOptions } from './Select.utils';
export var Select = function (props) {
    var children = props.children, isDisabled = props.isDisabled, placeholder = props.placeholder, className = props.className, options = props.options, isMulti = props.isMulti, isFullWidth = props.isFullWidth, isAlternative = props.isAlternative, size = props.size, defaultValue = props.defaultValue, autoFocus = props.autoFocus;
    var _a = React.useState(defaultValue), value = _a[0], setValue = _a[1];
    var _b = useState(false), isFocused = _b[0], setFocused = _b[1];
    var items = [];
    items = checkChildrenAndOptions(children, options);
    var onChange = function (value) {
        if (!isDisabled) {
            if (props.value === undefined) {
                setValue(value);
            }
            if (props.onChange) {
                props.onChange(value);
            }
        }
    };
    var val = [];
    var fillValue = function (value) {
        if (typeof value === 'string' || typeof value === 'number') {
            items.forEach(function (item) { return item.value === value && val.push(item); });
        }
        else {
            items.forEach(function (item) { return item.value === value.value && val.push(value); });
        }
    };
    var fillValues = function (value) {
        if (Array.isArray(value)) {
            value.forEach(function (item) {
                fillValue(item);
            });
        }
        else {
            fillValue(value);
        }
    };
    if (props.value) {
        fillValues(props.value);
    }
    else if (value) {
        fillValues(value);
    }
    var ref = useRef();
    useEffect(function () {
        window.addEventListener('mousedown', onMouseDown);
        return function () {
            window.removeEventListener('mousedown', onMouseDown);
        };
    }, [isFocused]);
    var onMouseDown = function (e) {
        var _a;
        if (!((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            setFocused(false);
        }
    };
    return (React.createElement(ReactSelect, { menuIsOpen: isFocused, value: val, isFocused: isFocused, size: size, isDisabled: isDisabled, options: items, placeholder: isAlternative ? "" : placeholder, isSearchable: false, className: className || "", onChange: onChange, isMulti: isMulti, isFullWidth: isFullWidth, defaultValue: defaultValue, blurInputOnSelect: true, autoFocus: autoFocus, components: {
            Option: function (props) { return React.createElement(OptionComponent, __assign({}, props, { size: size })); },
            NoOptionsMessage: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(NoOptionsMessage, __assign({}, innerProps), children));
            },
            ClearIndicator: function (_a) {
                var innerProps = _a.innerProps;
                return (React.createElement(ClearIndicator, __assign({}, innerProps),
                    React.createElement(Icon, { name: 'clear' })));
            },
            Control: function (props) { return (React.createElement(Control, __assign({ ref: ref }, props.innerProps, { isMenuOpened: props.menuIsOpen, isFocused: isFocused, isMulti: props.isMulti, hasValue: props.hasValue, isFullWidth: props.isFullWidth, size: size, isDisabled: props.isDisabled }), props.children)); },
            CrossIcon: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(CrossIcon, __assign({}, innerProps),
                    React.createElement("div", null, children)));
            },
            DownChevron: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement("div", __assign({}, innerProps),
                    children,
                    React.createElement(Icon, { name: 'arrowDown' })));
            },
            DropdownIndicator: function (_a) {
                var innerProps = _a.innerProps, selectProps = _a.selectProps;
                return (React.createElement(DropdownIndicator, __assign({ isDisabled: isDisabled }, innerProps),
                    selectProps.menuIsOpen && React.createElement(Icon, { name: 'arrowUp' }),
                    !selectProps.menuIsOpen && React.createElement(Icon, { name: 'arrowDown' })));
            },
            Group: function (_a) {
                var children = _a.children;
                return React.createElement("div", null, children);
            },
            GroupHeading: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement("div", __assign({}, innerProps), children));
            },
            Menu: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(Menu, __assign({}, innerProps), children));
            },
            MenuList: function (_a) {
                var children = _a.children;
                return React.createElement(MenuList, null, children);
            },
            IndicatorsContainer: function (_a) {
                var children = _a.children;
                return (React.createElement(IndicatorsContainer, { size: size }, children));
            },
            Input: function (props) { return (React.createElement("div", null,
                React.createElement(Input, __assign({ placeholder: "Za\u010Dn\u011Bte ps\u00E1t" }, props)))); },
            LoadingIndicator: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement("div", __assign({}, innerProps), children));
            },
            LoadingMessage: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement("div", __assign({}, innerProps), children));
            },
            MenuPortal: function (_a) {
                var children = _a.children;
                return React.createElement("div", null, children);
            },
            MultiValue: function (_a) {
                var children = _a.children, innerProps = _a.innerProps, components = _a.components, removeProps = _a.removeProps;
                return (React.createElement(MultiValue, __assign({ size: size }, innerProps),
                    children,
                    components.Remove(removeProps)));
            },
            MultiValueContainer: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement("div", __assign({}, innerProps), children));
            },
            MultiValueLabel: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(MultiValueLabel, __assign({}, innerProps), children));
            },
            MultiValueRemove: function (_a) {
                var props = __rest(_a, []);
                return (React.createElement(MultiValueRemove, __assign({}, props),
                    React.createElement(Icon, { name: 'close' })));
            },
            Placeholder: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(Placeholder, __assign({}, innerProps), children));
            },
            SelectContainer: function (_a) {
                var children = _a.children, innerProps = _a.innerProps, rest = __rest(_a, ["children", "innerProps"]);
                return isAlternative ? (React.createElement(SelectContainerWrapper, __assign({ isMulti: isMulti, hasValue: !!value, onClick: function () { return setFocused(!isFocused); }, isFullWidth: isFullWidth, size: size, isFocused: isFocused }, innerProps),
                    React.createElement(SelectContainer, __assign({ isFullWidth: isFullWidth, size: size }, innerProps), children),
                    React.createElement("label", null, placeholder))) : (React.createElement(SelectContainer, __assign({ onClick: function () { return setFocused(!isFocused); }, isFullWidth: isFullWidth, size: size }, innerProps), children));
            },
            SingleValue: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(SingleValue, __assign({ size: size, isFullWidth: isFullWidth }, innerProps), children));
            },
            ValueContainer: function (_a) {
                var children = _a.children, isMulti = _a.isMulti, props = __rest(_a, ["children", "isMulti"]);
                return (React.createElement(ValueContainer, { isMulti: isMulti, size: size, isFullWidth: isFullWidth }, children));
            }
        } }));
};
Select.defaultProps = {
    isMulti: false,
    isFullWidth: false,
    size: 'medium'
};
Select.displayName = "Select";
Select.Option = Option;
// TODO: OptionGroup
//# sourceMappingURL=Select.js.map
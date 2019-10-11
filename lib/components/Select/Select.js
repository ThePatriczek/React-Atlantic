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
import {
  ClearIndicator,
  Control,
  CrossIcon,
  DropdownIndicator,
  IndicatorsContainer,
  Input,
  Menu,
  MenuList,
  MultiValue,
  MultiValueLabel,
  MultiValueRemove,
  NoOptionsMessage,
  Placeholder,
  SelectContainer,
  SingleValue,
  ValueContainer
} from './Select.style';

var getChild = function (child, key, error) {
    if (!child.type || child.type.displayName !== Option.displayName) {
        throw Error(error);
    }
    var props = child.props;
    var value = props.value, children = props.children, className = props.className;
    return { value: value, label: children, className: className };
};
export var Select = function (props) {
    var children = props.children, isDisabled = props.isDisabled, placeholder = props.placeholder, className = props.className, options = props.options, isMulti = props.isMulti, isFullWidth = props.isFullWidth, size = props.size, defaultValue = props.defaultValue;
    var _a = React.useState(defaultValue), value = _a[0], setValue = _a[1];
    var items = [];
    if (children) {
        if (Array.isArray(children)) {
            items = children;
        }
        else {
            items.push(children);
        }
        items = items.map(function (item, key) {
            if (item) {
                if (Array.isArray(item)) {
                    return item.map(function (child, childKey) {
                        return getChild(child, childKey, Select.displayName + " accepts only " + Option.displayName + " components!");
                    });
                }
                return getChild(item, key, Select.displayName + " accepts only " + Option.displayName + " components!");
            }
            return null;
        });
    }
    else if (options) {
        items = options;
    }
    var onChange = function (value) {
        if (!isDisabled) {
            if (props.value === undefined) {
                setValue(value);
                if (props.onChange) {
                    props.onChange(value);
                }
            }
            else {
                if (props.onChange) {
                    props.onChange(props.value);
                }
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
            props.value.forEach(function (item) {
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
    return (React.createElement(ReactSelect, { value: val, isDisabled: isDisabled, options: items, placeholder: placeholder || "Select an option", isSearchable: false, className: "" + (className || ""), onChange: onChange, isMulti: isMulti, components: {
            Option: function (props) { return React.createElement(OptionComponent, __assign({}, props, { size: size })); },
            NoOptionsMessage: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(NoOptionsMessage, __assign({}, innerProps), children));
            },
            ClearIndicator: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(ClearIndicator, __assign({}, innerProps),
                    React.createElement(Icon, { name: 'clear' })));
            },
            Control: function (_a) {
                var children = _a.children, innerProps = _a.innerProps, menuIsOpen = _a.menuIsOpen, isFocused = _a.isFocused, isMulti = _a.isMulti, hasValue = _a.hasValue, isDisabled = _a.isDisabled;
                return (React.createElement(Control, __assign({}, innerProps, { isMenuOpened: menuIsOpen, isFocused: isFocused, isMulti: isMulti, hasValue: hasValue, isFullWidth: isFullWidth, size: size, isDisabled: isDisabled }), children));
            },
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
                var children = _a.children, props = __rest(_a, ["children"]);
                return React.createElement(MenuList, null, children);
            },
            IndicatorsContainer: function (_a) {
                var children = _a.children, props = __rest(_a, ["children"]);
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
                var children = _a.children, props = __rest(_a, ["children"]);
                return React.createElement("div", null, children);
            },
            MultiValue: function (_a) {
                var children = _a.children, innerProps = _a.innerProps, components = _a.components, removeProps = _a.removeProps, props = __rest(_a, ["children", "innerProps", "components", "removeProps"]);
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
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(SelectContainer, __assign({ isFullWidth: isFullWidth, size: size }, innerProps), children));
            },
            SingleValue: function (_a) {
                var children = _a.children, innerProps = _a.innerProps;
                return (React.createElement(SingleValue, __assign({ size: size, isFullWidth: isFullWidth }, innerProps), children));
            },
            ValueContainer: function (_a) {
                var children = _a.children, isMulti = _a.isMulti;
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
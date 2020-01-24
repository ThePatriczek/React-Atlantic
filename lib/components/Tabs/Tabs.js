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
import React from 'react';
import { RadioGroupContextProvider, useRadioGroup } from '../Radio/Context';
import { Tab } from './Tab';
import { StyledTabsBar, StyledTabsContainer, StyledTabsContent } from './Tabs.style';
export var Tabs = function (props) {
    var children = props.children, className = props.className, size = props.size, onChange = props.onChange, activeTab = props.activeTab, isBordered = props.isBordered, isAlternative = props.isAlternative;
    return (React.createElement(StyledTabsContainer, __assign({ className: className, size: size }, props),
        React.createElement(RadioGroupContextProvider, { onChange: onChange },
            React.createElement(TabsWithContext, __assign({}, props), children))));
};
var TabsWithContext = function (props) {
    var isAlternative = props.isAlternative, activeTab = props.activeTab, children = props.children, isBordered = props.isBordered, size = props.size;
    var value = useRadioGroup().value;
    var tabs = [];
    if (Array.isArray(props.tabs)) {
        tabs = props.tabs;
    }
    else {
        tabs.push(props.tabs);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledTabsBar, { isAlternative: !!isAlternative, size: size }, tabs.map(function (item) { return (React.createElement(Tab, { key: item.value, value: item.value, label: item.label, isDisabled: item.isDisabled, isActive: activeTab ? activeTab === item.value : undefined, isAlternative: !!isAlternative })); })),
        React.createElement(StyledTabsContent, { isBordered: !!isBordered, size: size, hasBackground: !!value || !!activeTab }, children)));
};
TabsWithContext.displayName = "TabsWithContext";
Tabs.defaultProps = {
    size: 'medium',
    isAlternative: false,
    isBordered: false
};
Tabs.displayName = "Tabs";
//# sourceMappingURL=Tabs.js.map
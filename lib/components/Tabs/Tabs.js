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
import React, { useEffect } from 'react';
import { Carousel } from '../Carousel';
import { RadioGroupContextProvider, useRadioGroup } from '../Radio/Context';
import { Tab } from './Tab';
import { StyledTabsBar, StyledTabsContainer, StyledTabsContent } from './Tabs.style';
export var Tabs = function (props) {
    var children = props.children, className = props.className, size = props.size, onChange = props.onChange, isBordered = props.isBordered, isAlternative = props.isAlternative, activeTab = props.activeTab;
    return (React.createElement(StyledTabsContainer, { className: className, size: size, isAlternative: isAlternative, isBordered: isBordered, tabs: props.tabs, activeTab: activeTab },
        React.createElement(RadioGroupContextProvider, { onChange: onChange },
            React.createElement(TabsWithContext, __assign({}, props), children))));
};
var TabsWithContext = function (props) {
    var isAlternative = props.isAlternative, activeTab = props.activeTab, children = props.children, isBordered = props.isBordered, size = props.size, animationConfig = props.animationConfig;
    var _a = useRadioGroup(), value = _a.value, setValue = _a.setValue;
    var tabs = [];
    useEffect(function () {
        var _a, _b, _c;
        if (((_b = (_a = tabs) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value) !== undefined) {
            setValue((_c = tabs) === null || _c === void 0 ? void 0 : _c[0].value);
        }
    }, []);
    useEffect(function () {
        if (activeTab !== undefined) {
            setValue(activeTab);
        }
    }, [activeTab]);
    if (Array.isArray(props.tabs)) {
        tabs = props.tabs;
    }
    else {
        tabs.push(props.tabs);
    }
    var activeSlide = 0;
    var slides = [];
    if (animationConfig) {
        slides = tabs.map(function (tab, index) {
            if (tab.value === value) {
                activeSlide = index;
            }
            var isActiveSlide = activeSlide === index;
            if (isActiveSlide) {
                return React.createElement(Carousel.Slide, { key: index }, children);
            }
            return React.createElement(Carousel.Slide, { key: index });
        });
    }
    var Content = function () {
        return (React.createElement(Carousel, { springConfig: animationConfig, activeSlide: activeSlide }, slides));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledTabsBar, { isAlternative: !!isAlternative, size: size }, tabs.map(function (item) { return (React.createElement(Tab, { key: item.value, value: item.value, label: item.label, isDisabled: item.isDisabled, isAlternative: !!isAlternative })); })),
        React.createElement(StyledTabsContent, { isBordered: !!isBordered, size: size, hasBackground: !!value || !!activeTab }, animationConfig ? Content() : children)));
};
TabsWithContext.displayName = "TabsWithContext";
Tabs.defaultProps = {
    size: 'medium',
    isAlternative: false,
    isBordered: false
};
Tabs.displayName = "Tabs";
//# sourceMappingURL=Tabs.js.map
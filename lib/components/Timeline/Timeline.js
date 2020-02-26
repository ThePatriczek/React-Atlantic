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
import { useComposition } from '../../hooks/useComposition';
import { TimelineContextProvider } from './Context';
import { Item } from './Item/Item';
import { StyledTimelineContainer } from './Timeline.style';
export var Timeline = function (props) {
    var children = props.children, onChange = props.onChange, activeIndex = props.activeIndex, defaultActiveIndex = props.defaultActiveIndex;
    var getFilteredChildren = useComposition().getFilteredChildren;
    var items = getFilteredChildren(children, Timeline.Item.displayName);
    return (React.createElement(TimelineContextProvider, { onChange: onChange, activeIndex: activeIndex, defaultActiveIndex: defaultActiveIndex },
        React.createElement(StyledTimelineContainer, null, items.map(function (item, index) {
            var _a;
            return (React.createElement(Timeline.Item, __assign({ key: index }, item.props, { index: index }), (_a = item.props) === null || _a === void 0 ? void 0 : _a.children));
        }))));
};
Timeline.Item = Item;
Timeline.displayName = "Timeline";
//# sourceMappingURL=Timeline.js.map
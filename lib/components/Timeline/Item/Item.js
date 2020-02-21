import React from 'react';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
import { useTimeline } from '../Context';
import { StyledTimelineButton, StyledTimelineCaption, StyledTimelineCircle, StyledTimelineContainer, StyledTimelineItem, StyledTimelineSide, StyledTimelineTitle } from './Item.style';
var Title = Typography.Title, Text = Typography.Text;
export var Item = function (props) {
    var index = props.index, className = props.className, children = props.children, caption = props.caption, buttons = props.buttons;
    var _a = useTimeline(), onChange = _a.onChange, activeIndex = _a.activeIndex;
    var isActive = index === activeIndex;
    var onClick = function () {
        var _a, _b;
        (_b = (_a = props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (typeof index !== 'undefined') {
            onChange(index);
        }
    };
    var onCaptionClick = function () { var _a, _b; return (_b = (_a = props).onCaptionClick) === null || _b === void 0 ? void 0 : _b.call(_a); };
    return (React.createElement(StyledTimelineItem, { className: className, highlight: isActive },
        React.createElement(StyledTimelineSide, null,
            React.createElement(StyledTimelineCircle, { isActive: isActive, onClick: onClick })),
        React.createElement(StyledTimelineContainer, { isMain: true },
            React.createElement(StyledTimelineTitle, { href: '#', isActive: isActive, onClick: onClick },
                React.createElement(Title, { level: 5 }, children)),
            caption && (React.createElement(StyledTimelineCaption, { href: '#', onClick: onCaptionClick },
                React.createElement(Text, null, caption)))),
        buttons && (React.createElement(StyledTimelineContainer, null, buttons.map(function (button, key) { return (React.createElement(StyledTimelineButton, { key: key, onClick: button.onClick },
            React.createElement(Icon, { name: button.icon }))); })))));
};
Item.displayName = "Item";
//# sourceMappingURL=Item.js.map
import React, { useCallback } from 'react';
import { Icon } from '../../Icon';
import { Tooltip } from '../../Tooltip';
import { Typography } from '../../Typography';
import { useTimeline } from '../Context';
import { StyledListElementsContainer, StyledListItem, StyledTimelineButton, StyledTimelineCaption, StyledTimelineCaptionContainer, StyledTimelineCircle, StyledTimelineContainer, StyledTimelineItem, StyledTimelineSide, StyledTimelineTitle } from './Item.style';
var Title = Typography.Title, Text = Typography.Text;
export var Item = function (props) {
    var index = props.index, className = props.className, children = props.children, captions = props.captions, buttons = props.buttons, elements = props.elements;
    var _a = useTimeline(), onChange = _a.onChange, activeIndex = _a.activeIndex;
    var isActive = index === activeIndex;
    var onClick = function () {
        var _a, _b;
        (_b = (_a = props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (typeof index !== 'undefined') {
            onChange(index);
        }
    };
    var buttonRenderer = useCallback(function (buttonsInput) {
        var withHint = function (button, key) {
            var _a, _b, _c, _d, _e, _f;
            var tooltipTipKey = ((_a = button) === null || _a === void 0 ? void 0 : _a.hint) + "-" + key;
            return ((_b = button.hint) === null || _b === void 0 ? void 0 : _b.hintComponent) ? (React.createElement("span", { "data-tip": true, "data-for": tooltipTipKey, key: key },
                React.createElement(StyledTimelineButton, { key: key, onClick: button.onClick },
                    React.createElement(Icon, { name: button.icon })),
                button.hint.hintComponent((_d = (_c = button) === null || _c === void 0 ? void 0 : _c.hint) === null || _d === void 0 ? void 0 : _d.description, tooltipTipKey))) : (React.createElement("span", { "data-tip": true, "data-for": tooltipTipKey, key: key },
                React.createElement(StyledTimelineButton, { key: key, onClick: button.onClick },
                    React.createElement(Icon, { name: button.icon })),
                React.createElement(Tooltip, { id: tooltipTipKey }, (_f = (_e = button) === null || _e === void 0 ? void 0 : _e.hint) === null || _f === void 0 ? void 0 : _f.description)));
        };
        var withoutHint = function (button, key) {
            return (React.createElement(StyledTimelineButton, { key: key, onClick: button.onClick },
                React.createElement(Icon, { name: button.icon })));
        };
        return (buttonsInput && (React.createElement(StyledTimelineContainer, null, buttonsInput.map(function (button, key) { var _a; return ((_a = button) === null || _a === void 0 ? void 0 : _a.hint) ? withHint(button, key) : withoutHint(button, key); }))));
    }, []);
    return (React.createElement(StyledTimelineItem, { className: className, highlight: isActive },
        React.createElement(StyledTimelineSide, null,
            React.createElement(StyledTimelineCircle, { isActive: isActive, onClick: onClick })),
        React.createElement(StyledTimelineContainer, { isMain: true },
            React.createElement(StyledTimelineTitle, { href: '#', isActive: isActive, onClick: onClick },
                React.createElement(Title, { level: 5 }, children)),
            captions && (React.createElement(StyledTimelineCaptionContainer, null, captions.map(function (item, key) { return (React.createElement(StyledTimelineCaption, { href: '#', onClick: item.onClick, key: key, hasMarginRight: key < captions.length - 1 },
                React.createElement(Text, null, key < captions.length - 1 ? item.value + "," : item.value))); })))),
        buttons && buttonRenderer(buttons),
        elements && (React.createElement(StyledTimelineContainer, null,
            React.createElement(StyledListElementsContainer, null, elements.map(function (element, key) { return (React.createElement(StyledListItem, { key: key }, element)); }))))));
};
Item.displayName = "Item";
//# sourceMappingURL=Item.js.map
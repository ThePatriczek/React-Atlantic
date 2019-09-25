var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';

var defaultButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  padding: 0 ", ";\n  height: ", ";\n  line-height: 1.5;\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  background-image: none;\n  color: black;\n  border-radius: ", ";\n  outline: 0;\n  cursor: pointer;\n  font-size: ", ";;\n  user-select: none;\n  touch-action: manipulation;\n  transition: background-color 0.1s ease;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06);\n  border: 1px solid ", ";\n"], ["\n  font-family: ", ";\n  padding: 0 ", ";\n  height: ", ";\n  line-height: 1.5;\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  background-image: none;\n  color: black;\n  border-radius: ", ";\n  outline: 0;\n  cursor: pointer;\n  font-size: ", ";;\n  user-select: none;\n  touch-action: manipulation;\n  transition: background-color 0.1s ease;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.06);\n  border: 1px solid ", ";\n"])), function (props) { return props.theme.font.family; }, function (props) { return props.theme.padding.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.font.size.md; }, function (props) { return darken(0.1, props.theme.color.default); });
export var StyledButton = styled(defaultButton)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  @-webkit-keyframes focusAnimation {\n    0%   { opacity: 0; }\n    50% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  ", "\n    \n  ", "\n    \n  ", "\n    \n  ", "\n  \n    > span, > i{\n    height: 18px;\n    line-height: 18px;\n\n    display: inline-block;\n    vertical-align: 1px;\n    pointer-events: none;\n    transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);\n  }\n\n  i+span,span+i{\n    margin-left: ", ";\n  }\n\n  i{\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"], ["\n  @-webkit-keyframes focusAnimation {\n    0%   { opacity: 0; }\n    50% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n  \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n  \n    > span, > i{\n    height: 18px;\n    line-height: 18px;\n\n    display: inline-block;\n    vertical-align: 1px;\n    pointer-events: none;\n    transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);\n  }\n\n  i+span,span+i{\n    margin-left: ", ";\n  }\n\n  i{\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])), function (props) {
    return !props.disabled &&
        props.styleType !== 'transparent' &&
        !props.isRound && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      &.animation {\n        &:after {\n          content: '';\n          position: absolute;\n          top: -4px;\n          left: -4px;\n          right: -4px;\n          bottom: -4px;\n\n          opacity: 0;\n          z-index: -1;\n          border-radius: ", ";\n          background: ", ";\n          animation: focusAnimation 0.3s linear;\n        }\n      }\n    "], ["\n      &.animation {\n        &:after {\n          content: '';\n          position: absolute;\n          top: -4px;\n          left: -4px;\n          right: -4px;\n          bottom: -4px;\n\n          opacity: 0;\n          z-index: -1;\n          border-radius: ", ";\n          background: ", ";\n          animation: focusAnimation 0.3s linear;\n        }\n      }\n    "])), props.theme.radius, lighten(0.4, props.theme.color.primary));
}, function (props) {
    var color = "black";
    var bgColor = props.theme.color.default;
    var hoverBgColor = lighten(0.1, bgColor);
    var borderColor = darken(0.1, bgColor);
    var borderType = "solid";
    if (props.styleType === 'primary') {
        bgColor = props.theme.color.primary;
        hoverBgColor = lighten(0.1, bgColor);
        color = "white";
        borderColor = bgColor;
    }
    else if (props.styleType === 'success') {
        bgColor = props.theme.color.success;
        hoverBgColor = lighten(0.05, bgColor);
        color = "white";
        borderColor = bgColor;
    }
    else if (props.styleType === 'warning') {
        bgColor = props.theme.color.warning;
        hoverBgColor = lighten(0.15, bgColor);
        color = "white";
        borderColor = bgColor;
    }
    else if (props.styleType === 'error') {
        bgColor = props.theme.color.error;
        hoverBgColor = lighten(0.15, bgColor);
        color = "white";
        borderColor = bgColor;
    }
    else if (props.styleType === 'dashed') {
        borderType = "dashed";
    }
    else if (props.styleType === 'transparent') {
        bgColor = "transparent";
        color = props.theme.color.primary;
        borderColor = bgColor;
    }
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n      border: 1px ", " ", ";\n\n      &:hover {\n        background-color: ", ";\n        ", "\n      }\n    "], ["\n      background-color: ", ";\n      color: ", ";\n      border: 1px ", " ", ";\n\n      &:hover {\n        background-color: ", ";\n        ",
        "\n      }\n    "])), bgColor, color, borderType, borderColor, hoverBgColor, props.styleType === 'transparent' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            border: 1px ", " ", ";\n          "], ["\n            border: 1px ", " ", ";\n          "])), borderType, color));
}, function (props) {
    return props.disabled && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      color: ", ";\n      cursor: not-allowed;\n\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: not-allowed;\n\n      &:hover {\n        background-color: ", ";\n      }\n    "])), darken(0.2, "#b7b7b7"), props.theme.color.default);
}, function (props) {
    return props.isRound && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ", ";\n    "])), props.theme.rounded);
}, function (props) {
    return props.size === 'small' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        vertical-align: -3px;\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "], ["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        vertical-align: -3px;\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "])), props.theme.padding.sm, props.theme.height.sm, props.theme.font.size.sm, props.theme.margin.sm);
}, function (props) {
    return props.size === 'large' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "], ["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "])), props.theme.padding.lg, props.theme.height.lg, props.theme.font.size.lg, props.theme.margin.lg);
}, function (props) {
    return props.isFullWidth && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "])));
}, function (props) { return props.theme.margin.md; });
StyledButton.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=Button.style.js.map
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../theme';
import { StyledIcon } from "../Icon/Icon.style";
import { StyledText } from "../Typography/Text/Text.style";
var focusAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0%    {\n    opacity: 0; \n    }\n    25%   { \n    opacity: 0.5; \n    }\n    50%   { \n    opacity: 1; \n    }\n    75%   { \n    opacity: 0.5; \n    }\n    100%  { \n    opacity: 0; \n    }\n"], ["\n    0%    {\n    opacity: 0; \n    }\n    25%   { \n    opacity: 0.5; \n    }\n    50%   { \n    opacity: 1; \n    }\n    75%   { \n    opacity: 0.5; \n    }\n    100%  { \n    opacity: 0; \n    }\n"])));
var DefaultButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: 1;\n\n  background-image: none;\n  color: ", ";\n\n  outline: 0;\n  cursor: pointer;\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: 400;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  user-select: none;\n  touch-action: manipulation;\n  transition: background-color 0.1s ease;\n  box-shadow: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n\n  > span{\n    display: inline-block;\n    vertical-align: top;\n    height: 14px;\n    line-height: 1;\n    pointer-events: none;\n    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  i {\n    height: 14px;\n    margin: 0;\n    vertical-align: top;\n    line-height: 1;\n    width: 14px;\n  }\n\n  i + span,\n  span + i {\n    margin-left: ", ";\n  }\n\n  i {\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  span {\n    margin: 0;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: 1;\n\n  background-image: none;\n  color: ", ";\n\n  outline: 0;\n  cursor: pointer;\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: 400;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  user-select: none;\n  touch-action: manipulation;\n  transition: background-color 0.1s ease;\n  box-shadow: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n\n  > span{\n    display: inline-block;\n    vertical-align: top;\n    height: 14px;\n    line-height: 1;\n    pointer-events: none;\n    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  i {\n    height: 14px;\n    margin: 0;\n    vertical-align: top;\n    line-height: 1;\n    width: 14px;\n  }\n\n  i + span,\n  span + i {\n    margin-left: ", ";\n  }\n\n  i {\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  span {\n    margin: 0;\n  }\n"])), function (props) { return props.theme.padding.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.color.text.alpha; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.boxShadow.sm; }, function (props) { return props.theme.color.border; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.margin.sm; });
export var StyledButton = styled(DefaultButton)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n", "\n\n  ", "\n\n  ", "\n  \n  ", "\n    \n  ", "\n    \n  ", "\n    \n  ", "\n"], ["\n",
    "\n\n  ",
    "\n\n  ",
    "\n  \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n"])), function (props) {
    return !props.disabled &&
        props.isTransparent &&
        props.animationRunning && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    &:after {\n      content: '';\n      position: absolute;\n      top: -3px;\n      left: -3px;\n      right: -3px;\n      bottom: -3px;\n\n      z-index: -1;\n      border-radius: ", ";\n      background: ", ";\n      animation: ", " 0.4s ease-in-out;\n    }\n  "], ["\n    &:after {\n      content: '';\n      position: absolute;\n      top: -3px;\n      left: -3px;\n      right: -3px;\n      bottom: -3px;\n\n      z-index: -1;\n      border-radius: ",
        ";\n      background: ", ";\n      animation: ", " 0.4s ease-in-out;\n    }\n  "])), props.isRound
        ? props.theme.rounded
        : props.theme.radius, props.theme.color.background.gamma, focusAnimation);
}, function (props) {
    var color = props.theme.color.text.alpha;
    var hoverBgColor = props.theme.color.background.alpha;
    var bgColor = props.theme.color.default;
    var borderColor = props.theme.color.border;
    var borderType = "solid";
    if (props.styleType === 'primary') {
        bgColor = props.theme.color.primary.alpha;
        hoverBgColor = props.theme.color.primary.beta;
        color = props.theme.color.text.gamma;
        borderColor = bgColor;
    }
    else if (props.styleType === 'success') {
        bgColor = props.theme.color.success.alpha;
        hoverBgColor = props.theme.color.success.beta;
        color = props.theme.color.text.gamma;
        borderColor = bgColor;
    }
    else if (props.styleType === 'warning') {
        bgColor = props.theme.color.warning.alpha;
        hoverBgColor = props.theme.color.warning.beta;
        color = props.theme.color.text.gamma;
        borderColor = bgColor;
    }
    else if (props.styleType === 'error') {
        bgColor = props.theme.color.error.alpha;
        hoverBgColor = props.theme.color.error.beta;
        color = props.theme.color.text.gamma;
        borderColor = bgColor;
    }
    else if (props.styleType === 'dashed') {
        borderType = "dashed";
    }
    if (props.isTransparent) {
        color = bgColor;
        bgColor = "transparent";
        borderColor = bgColor;
        hoverBgColor = bgColor;
    }
    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n      border: 1px ", " ", ";\n      \n      ", ", ", " {\n        color: ", ";\n      }\n\n      ", "\n\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      color: ", ";\n      border: 1px ", " ", ";\n      \n      ", ", ", " {\n        color: ", ";\n      }\n\n      ",
        "\n\n      &:hover {\n        background-color: ", ";\n      }\n    "])), bgColor, color, borderType, borderColor, StyledIcon, StyledText, color, props.isTransparent && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          box-shadow: none;\n          border: 1px ", " ", ";\n        "], ["\n          box-shadow: none;\n          border: 1px ", " ", ";\n        "])), borderType, color), hoverBgColor);
}, function (props) {
    return props.disabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n      cursor: not-allowed;\n\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      color: ", ";\n      cursor: not-allowed;\n\n      &:hover {\n        background-color: ", ";\n      }\n    "])), props.theme.color.default, props.theme.color.text.beta, props.theme.color.default);
}, function (props) {
    return props.isRound && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ", ";\n    "])), props.theme.rounded);
}, function (props) {
    return props.size === 'small' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        font-size: ", ";\n        height: ", ";\n      }\n      \n      > i{\n        width: ", ";\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "], ["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        font-size: ", ";\n        height: ", ";\n      }\n      \n      > i{\n        width: ", ";\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "])), props.theme.padding.sm, props.theme.height.sm, props.theme.font.size.sm, props.theme.font.size.sm, props.theme.font.size.sm, props.theme.font.size.sm, props.theme.margin.sm);
}, function (props) {
    return props.size === 'large' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        font-size: ", ";\n        height: ", ";\n      }\n      \n      > i{\n        width: ", ";\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "], ["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        font-size: ", ";\n        height: ", ";\n      }\n      \n      > i{\n        width: ", ";\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "])), props.theme.padding.lg, props.theme.height.lg, props.theme.font.size.lg, props.theme.font.size.lg, props.theme.font.size.lg, props.theme.font.size.lg, props.theme.margin.md);
}, function (props) {
    return props.isFullWidth && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "])));
});
export var StyledTypoButton = styled(DefaultButton)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  padding: 0 ", ";\n  height: auto;\n  margin: 0;\n\n  background: transparent;\n  color: ", ";\n  border: 0;\n  box-shadow: none;\n"], ["\n  padding: 0 ", ";\n  height: auto;\n  margin: 0;\n\n  background: transparent;\n  color: ", ";\n  border: 0;\n  box-shadow: none;\n"])), function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.color.primary.alpha; });
StyledButton.defaultProps = {
    theme: theme
};
StyledButton.displayName = 'StyledButton';
StyledTypoButton.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=Button.style.js.map
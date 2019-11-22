var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { darken, lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../theme';
// export const focusAnimation = () => {
//   return keyframes`
//     0%    {
//     opacity: 0;
//     }
//     25%   {
//     opacity: 0.5;
//     }
//     50%   {
//     opacity: 1;
//     }
//     75%   {
//     opacity: 0.5;
//     }
//     100%  {
//     opacity: 0;
//     }
//     `;
// };
var focusAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0%    {\n    opacity: 0; \n    }\n    25%   { \n    opacity: 0.5; \n    }\n    50%   { \n    opacity: 1; \n    }\n    75%   { \n    opacity: 0.5; \n    }\n    100%  { \n    opacity: 0; \n    }\n"], ["\n    0%    {\n    opacity: 0; \n    }\n    25%   { \n    opacity: 0.5; \n    }\n    50%   { \n    opacity: 1; \n    }\n    75%   { \n    opacity: 0.5; \n    }\n    100%  { \n    opacity: 0; \n    }\n"])));
var DefaultButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: 1.5;\n\n  background-image: none;\n  color: ", ";\n\n  outline: 0;\n  cursor: pointer;\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  user-select: none;\n  touch-action: manipulation;\n  transition: background-color 0.1s ease;\n  box-shadow: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n\n  > span,\n  > i {\n    height: 18px;\n    line-height: 18px;\n\n    display: inline-block;\n    vertical-align: 1px;\n    pointer-events: none;\n    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  i {\n    vertical-align: 2px;\n  }\n\n  i + span,\n  span + i {\n    margin-left: ", ";\n  }\n\n  i {\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  span {\n    margin: 0;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: 1.5;\n\n  background-image: none;\n  color: ", ";\n\n  outline: 0;\n  cursor: pointer;\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  user-select: none;\n  touch-action: manipulation;\n  transition: background-color 0.1s ease;\n  box-shadow: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n\n  > span,\n  > i {\n    height: 18px;\n    line-height: 18px;\n\n    display: inline-block;\n    vertical-align: 1px;\n    pointer-events: none;\n    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  i {\n    vertical-align: 2px;\n  }\n\n  i + span,\n  span + i {\n    margin-left: ", ";\n  }\n\n  i {\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  span {\n    margin: 0;\n  }\n"])), function (props) { return props.theme.padding.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.color.black; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.boxShadow.sm; }, function (props) { return darken(0.1, props.theme.color.default); }, function (props) { return props.theme.radius; }, function (props) { return props.theme.margin.md; });
export var StyledButton = styled(DefaultButton)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n", "\n\n  ", "\n\n  ", "\n  \n  ", "\n    \n  ", "\n    \n  ", "\n    \n  ", "\n"], ["\n",
    "\n\n  ",
    "\n\n  ",
    "\n  \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n"])), function (props) {
    return !props.disabled &&
        props.styleType !== 'transparent' &&
        props.animationRunning && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    &:after {\n      content: '';\n      position: absolute;\n      top: -3px;\n      left: -3px;\n      right: -3px;\n      bottom: -3px;\n\n      z-index: -1;\n      border-radius: ", ";\n      background: ", ";\n      animation: ", " 0.4s ease-in-out;\n    }\n  "], ["\n    &:after {\n      content: '';\n      position: absolute;\n      top: -3px;\n      left: -3px;\n      right: -3px;\n      bottom: -3px;\n\n      z-index: -1;\n      border-radius: ",
        ";\n      background: ", ";\n      animation: ", " 0.4s ease-in-out;\n    }\n  "])), props.isRound
        ? props.theme.rounded
        : props.theme.radius, props.theme.color.default, focusAnimation);
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
    return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n      border: 1px ", " ", ";\n\n      ", "\n\n      &:hover {\n        background-color: ", ";\n        ", "\n      }\n    "], ["\n      background-color: ", ";\n      color: ", ";\n      border: 1px ", " ", ";\n\n      ",
        "\n\n      &:hover {\n        background-color: ", ";\n        ",
        "\n      }\n    "])), bgColor, color, borderType, borderColor, props.styleType === 'transparent' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          box-shadow: none;\n        "], ["\n          box-shadow: none;\n        "]))), hoverBgColor, props.styleType === 'transparent' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            box-shadow: none;\n            border: 1px ", " ", ";\n          "], ["\n            box-shadow: none;\n            border: 1px ", " ", ";\n          "])), borderType, color));
}, function (props) {
    return props.disabled && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      color: ", ";\n      cursor: not-allowed;\n\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: not-allowed;\n\n      &:hover {\n        background-color: ", ";\n      }\n    "])), darken(0.2, "#b7b7b7"), props.theme.color.default);
}, function (props) {
    return props.isRound && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      border-radius: ", ";\n    "], ["\n      border-radius: ", ";\n    "])), props.theme.rounded);
}, function (props) {
    return props.size === 'small' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        font-size: ", ";\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "], ["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        font-size: ", ";\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "])), props.theme.padding.sm, props.theme.height.sm, props.theme.font.size.sm, props.theme.font.size.sm, props.theme.margin.sm);
}, function (props) {
    return props.size === 'large' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        font-size: ", ";\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "], ["\n      padding: 0 ", ";\n      height: ", ";\n      font-size: ", ";\n\n      > span,\n      > i {\n        font-size: ", ";\n      }\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "])), props.theme.padding.lg, props.theme.height.lg, props.theme.font.size.lg, props.theme.font.size.lg, props.theme.margin.lg);
}, function (props) {
    return props.isFullWidth && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "])));
});
export var StyledTypoButton = styled(DefaultButton)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  padding: 0 ", ";\n  height: auto;\n  margin: 0;\n\n  background: transparent;\n  color: ", ";\n  border: 0;\n  box-shadow: none;\n"], ["\n  padding: 0 ", ";\n  height: auto;\n  margin: 0;\n\n  background: transparent;\n  color: ", ";\n  border: 0;\n  box-shadow: none;\n"])), function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.color.primary; });
StyledButton.defaultProps = {
    theme: theme
};
StyledButton.displayName = 'StyledButton';
StyledTypoButton.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=Button.style.js.map
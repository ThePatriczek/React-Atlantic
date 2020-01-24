var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
export var StyledInputWrapper = styled.span(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-family: ", ";\n  position: relative;\n  display: inline-block;\n\n  ", "\n\n  ", "\n\n  ", "\n    \n    ", ";\n    \n    ", ";\n        \n    ", ";    \n    \n    ", ";\n\n  i {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    z-index: 2;\n    line-height: 0;\n    color: ", ";\n\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  ", "\n  \n   ", " \n"], ["\n  font-family: ", ";\n  position: relative;\n  display: inline-block;\n\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n    \n    ",
    ";\n    \n    ",
    ";\n        \n    ",
    ";    \n    \n    ",
    ";\n\n  i {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    z-index: 2;\n    line-height: 0;\n    color: ", ";\n\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  ",
    "\n  \n   ",
    " \n"])), function (props) { return props.theme.font.family; }, function (props) {
    return !props.isDisabled && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :hover {\n        i {\n          color: ", ";\n        }\n        input {\n          border-color: ", ";\n        }\n      }\n    "], ["\n      :hover {\n        i {\n          color: ", ";\n        }\n        input {\n          border-color: ", ";\n        }\n      }\n    "])), props.theme.color.primary.alpha, props.theme.color.primary.alpha);
}, function (props) {
    return props.iconLeft && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      i {\n        left: ", ";\n      }\n      input {\n        padding-left: 30px;\n      }\n    "], ["\n      i {\n        left: ", ";\n      }\n      input {\n        padding-left: 30px;\n      }\n    "])), props.theme.padding.md);
}, function (props) {
    return props.iconRight && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      i {\n        right: ", ";\n      }\n      input {\n        padding-right: 30px;\n      }\n    "], ["\n      i {\n        right: ", ";\n      }\n      input {\n        padding-right: 30px;\n      }\n    "])), props.theme.padding.md);
}, function (props) {
    return props.isDisabled
        ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            color: ", ";\n            cursor: not-allowed;\n          "], ["\n            color: ", ";\n            cursor: not-allowed;\n          "])), props.theme.color.text.beta) : css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            color: ", ";\n            cursor: text;\n          "], ["\n            color: ", ";\n            cursor: text;\n          "])), props.theme.color.text.beta);
}, function (props) {
    return props.size === 'small' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        i {\n          top: 7px;\n          height: ", ";\n          width: ", ";\n        }\n      "], ["\n        i {\n          top: 7px;\n          height: ", ";\n          width: ", ";\n        }\n      "])), props.theme.font.size.sm, props.theme.font.size.sm);
}, function (props) {
    return props.size === 'medium' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        i {\n          top: 10px;\n          height: ", ";\n          width: ", ";\n        }\n      "], ["\n        i {\n          top: 10px;\n          height: ", ";\n          width: ", ";\n        }\n      "])), props.theme.font.size.md, props.theme.font.size.md);
}, function (props) {
    return props.size === 'large' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        i {\n          top: 12px;\n          height: ", ";\n          width: ", ";\n        }\n      "], ["\n        i {\n          top: 12px;\n          height: ", ";\n          width: ", ";\n        }\n      "])), props.theme.font.size.lg, props.theme.font.size.lg);
}, function (props) { return props.theme.color.text.beta; }, function (props) {
    return props.isFocused && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      i {\n        color: ", ";\n      }\n    "], ["\n      i {\n        color: ", ";\n      }\n    "])), props.theme.color.primary.alpha);
}, function (props) {
    return props.isFullWidth && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n       width: 100%;\n     "], ["\n       width: 100%;\n     "])));
});
export var StyledInput = styled.input(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  font-family: ", ";\n  padding: ", " ", ";\n  height: ", ";\n  margin: 0;\n  width: 200px;\n  position: relative;\n  display: inline-block;\n\n  font-size: ", ";\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  user-select: text;\n  -webkit-appearance: none;\n  touch-action: manipulation;\n\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  outline: 0;\n  list-style: none;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  border: 1px solid ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  :focus {\n    border-color: ", ";\n    outline-offset: -2px;\n  }\n\n  ", "\n\n  ", " \n\n  ", " \n  \n    ", " \n\n\n    ", " \n"], ["\n  font-family: ", ";\n  padding: ", " ",
    ";\n  height: ", ";\n  margin: 0;\n  width: 200px;\n  position: relative;\n  display: inline-block;\n\n  font-size: ", ";\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  user-select: text;\n  -webkit-appearance: none;\n  touch-action: manipulation;\n\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  outline: 0;\n  list-style: none;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  border: 1px solid ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  :focus {\n    border-color: ", ";\n    outline-offset: -2px;\n  }\n\n  ",
    "\n\n  ",
    " \n\n  ",
    " \n  \n    ",
    " \n\n\n    ",
    " \n"])), function (props) { return props.theme.font.family; }, function (props) { return props.theme.padding.sm; }, function (props) {
    return props.theme.padding.md;
}, function (props) { return props.theme.height.md; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.color.background.alpha; }, function (props) { return props.theme.color.text.alpha; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.color.border; }, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.primary.alpha; }, function (props) {
    return props.disabled && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      color: ", ";\n      ::placeholder {\n        color: ", ";\n      }\n\n      background-color: ", ";\n      cursor: not-allowed;\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "], ["\n      color: ", ";\n      ::placeholder {\n        color: ", ";\n      }\n\n      background-color: ", ";\n      cursor: not-allowed;\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "])), props.theme.color.text.beta, props.theme.color.text.beta, props.theme.color.default, props.theme.color.border);
}, function (props) {
    return props.isRound && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      border-radius: ", ";\n\n      &:not(.disabled):not(.transparent) {\n        &:focus {\n          &:after {\n            border-radius: ", ";\n          }\n        }\n      }\n    "], ["\n      border-radius: ", ";\n\n      &:not(.disabled):not(.transparent) {\n        &:focus {\n          &:after {\n            border-radius: ", ";\n          }\n        }\n      }\n    "])), props.theme.rounded, props.theme.rounded);
}, function (props) {
    return props.size === 'small' && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      width: 180px;\n      height: ", ";\n      font-size: 12px;\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "], ["\n      width: 180px;\n      height: ", ";\n      font-size: 12px;\n\n      i + span,\n      span + i {\n        margin-left: ", ";\n      }\n    "])), props.theme.height.sm, props.theme.margin.sm);
}, function (props) {
    return props.size === 'large' && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n        width: 220px;\n        height: ", ";\n        font-size: ", ";\n\n        i + span,\n        span + i {\n          margin-left: ", ";\n        }\n      "], ["\n        width: 220px;\n        height: ", ";\n        font-size: ", ";\n\n        i + span,\n        span + i {\n          margin-left: ", ";\n        }\n      "])), props.theme.height.lg, props.theme.font.size.lg, props.theme.margin.lg);
}, function (props) {
    return props.isFullWidth && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n        width: 100%;\n      "], ["\n        width: 100%;\n      "])));
});
export var StyledInputWrapperAlt = styled.span(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  font-family: ", ";\n  display: inline-block;\n  position: relative;\n  margin-top: -", ";\n  padding-top: ", ";\n\n  ", "\n\n    label { \n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 0 ", ";\n    border-radius: ", ";\n\n    color: ", ";\n    cursor: text;\n    border: ", ";\n\n    -webkit-transition: color 0.2s ease-out, transform 0.2s ease-out;\n    transition: color 0.2s ease-out, transform 0.2s ease-out;\n    -webkit-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    -webkit-transform: translateY(12px);\n    transform: translateY(12px);\n    \n    ", "\n    ", "\n    ", "\n\n    ", "\n  }\n\n  ", "\n\n  ", "\n  \n    \n   ", " \n"], ["\n  font-family: ", ";\n  display: inline-block;\n  position: relative;\n  margin-top: -", ";\n  padding-top: ", ";\n\n  ",
    "\n\n    label { \n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 0 ", ";\n    border-radius: ", ";\n\n    color: ", ";\n    cursor: text;\n    border: ", ";\n\n    -webkit-transition: color 0.2s ease-out, transform 0.2s ease-out;\n    transition: color 0.2s ease-out, transform 0.2s ease-out;\n    -webkit-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n    -webkit-transform: translateY(12px);\n    transform: translateY(12px);\n    \n    ",
    "\n    ",
    "\n    ",
    "\n\n    ",
    "\n  }\n\n  ",
    "\n\n  ",
    "\n  \n    \n   ",
    " \n"])), function (props) { return props.theme.font.family; }, function (props) { return props.theme.margin.md; }, function (props) { return props.theme.padding.md; }, function (props) {
    return !props.isDisabled && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      :hover {\n        i {\n          color: ", ";\n        }\n        input {\n          border-color: ", ";\n        }\n      }\n    "], ["\n      :hover {\n        i {\n          color: ", ";\n        }\n        input {\n          border-color: ", ";\n        }\n      }\n    "])), props.theme.color.primary.alpha, props.theme.color.primary.alpha);
}, function (props) { return props.theme.padding.md; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.radius; }, function (props) {
    return props.size === 'small' && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0) - 2, parseInt(props.theme.height.sm, 0) - 2);
}, function (props) {
    return props.size === 'medium' && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0) - 2, parseInt(props.theme.height.md, 0) - 2);
}, function (props) {
    return props.size === 'large' && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0) - 2, parseInt(props.theme.height.lg, 0) - 2);
}, function (props) {
    return (props.isFocused || props.hasValue || props.isDisabled) && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n        height: ", ";\n        line-height: ", ";\n        left: 5px;\n        right: auto;\n\n        background: ", ";\n        color: ", ";\n\n        -webkit-transform: translateY(-14px) scale(0.8);\n        transform: translateY(0px) scale(0.8);\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0;\n\n        ", "\n      "], ["\n        height: ", ";\n        line-height: ", ";\n        left: 5px;\n        right: auto;\n\n        background: ", ";\n        color: ", ";\n\n        -webkit-transform: translateY(-14px) scale(0.8);\n        transform: translateY(0px) scale(0.8);\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0;\n\n        ",
        "\n      "])), props.theme.height.sm, props.theme.height.sm, props.theme.color.background.alpha, props.theme.color.primary.alpha, props.size === 'small' && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n            height: 16px;\n            line-height: 16px;\n          "], ["\n            height: 16px;\n            line-height: 16px;\n          "]))));
}, function (props) {
    return props.iconLeft && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n      input {\n        padding-right: ", ";\n      }\n\n      label {\n        transform: translateY(-10px) scale(0.8);\n        ", "\n      }\n    "], ["\n      input {\n        padding-right: ", ";\n      }\n\n      label {\n        transform: translateY(-10px) scale(0.8);\n        ",
        "\n      }\n    "])), props.theme.padding.md, !(props.isFocused || props.hasValue) && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n            padding-left: 30px;\n            transform: translateY(2px);\n          "], ["\n            padding-left: 30px;\n            transform: translateY(2px);\n          "]))));
}, function (props) {
    return props.iconRight && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n      input {\n        padding-left: ", ";\n      }\n\n      label {\n        transform: translateY(-10px) scale(0.8);\n\n        ", "\n      }\n    "], ["\n      input {\n        padding-left: ", ";\n      }\n\n      label {\n        transform: translateY(-10px) scale(0.8);\n\n        ",
        "\n      }\n    "])), props.theme.padding.md, !(props.isFocused || props.hasValue) && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n            padding-right: 30px;\n            transform: translateY(2px);\n          "], ["\n            padding-right: 30px;\n            transform: translateY(2px);\n          "]))));
}, function (props) {
    return props.isFullWidth && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n       width: 100%;\n     "], ["\n       width: 100%;\n     "])));
});
StyledInput.defaultProps = {
    theme: theme
};
StyledInput.displayName = 'StyledInput';
StyledInputWrapper.defaultProps = {
    theme: theme
};
StyledInputWrapper.displayName = 'StyledInputWrapper';
StyledInputWrapperAlt.defaultProps = {
    theme: theme
};
StyledInputWrapperAlt.displayName = 'StyledInputWrapper.Alt';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29;
//# sourceMappingURL=Input.style.js.map
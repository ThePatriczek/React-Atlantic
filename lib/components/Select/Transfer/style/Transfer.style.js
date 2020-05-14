var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../../../theme';
import { StyledCheckboxInputShown, StyledCheckboxLabel, StyledCheckboxSpan } from '../../../Checkbox/Checkbox.style';
import { StyledIcon } from '../../../Icon/Icon.style';
import { StyledInput } from '../../../Input/Input.style';
import { StyledChosenHeader, StyledDeleteAllButton, StyledDeleteOneIcon, StyledTransferSpan } from '../RightSide/style';
export var StyledTransferContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var StyledTransferForm = styled.form(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: nowrap;\n\n  ", "\n"], ["\n  display: flex;\n  flex-wrap: nowrap;\n\n  ",
    "\n"])), function (props) {
    return props.direction === 'horizontal'
        ? css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          flex-direction: row;\n        "], ["\n          flex-direction: row;\n        "]))) : css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          flex-direction: column;\n        "], ["\n          flex-direction: column;\n        "])));
});
export var StyledTransferSide = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  width: ", ";\n  font-family: ", ";\n  \n  ", "\n  \n  ", "\n  \n  ", "\n\n  ", "\n\n  ", " {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: ", ";\n    \n    ", "\n    \n    ", ",\n    ", " {\n      margin: 0 ", ";\n    }\n  }\n"], ["\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  width: ",
    ";\n  font-family: ", ";\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n\n  ",
    "\n\n  ", " {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: ", ";\n    \n    ",
    "\n    \n    ", ",\n    ", " {\n      margin: 0 ", ";\n    }\n  }\n"])), function (props) {
    return props.isOpen && props.isHalfOpen && props.direction === 'horizontal'
        ? '50%'
        : '100%';
}, function (props) { return props.theme.font.family; }, function (props) {
    return props.size === 'small' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "])), props.theme.font.size.sm);
}, function (props) {
    return props.size === 'medium' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "])), props.theme.font.size.md);
}, function (props) {
    return props.size === 'large' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "])), props.theme.font.size.lg);
}, function (props) {
    return props.isHalfOpen &&
        props.direction === 'horizontal' &&
        props.side === 'left' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      border-right: 1px solid ", ";\n    "], ["\n      border-right: 1px solid ", ";\n    "])), function (props) { return props.theme.color.border; });
}, StyledChosenHeader, function (props) { return props.theme.color.primary.alpha; }, function (props) {
    return props.direction === 'vertical'
        ? css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            border-top: 1px solid ", ";\n          "], ["\n            border-top: 1px solid ", ";\n          "])), function (props) { return props.theme.color.border; }) : '';
}, StyledDeleteAllButton, StyledTransferSpan, function (props) { return props.theme.margin.sm; });
export var StyledTransferUl = styled.ul(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  overflow-y: auto;\n  overflow-x: hidden;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  height: 170px;\n  color: ", ";\n"], ["\n  overflow-y: auto;\n  overflow-x: hidden;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  height: 170px;\n  color: ", ";\n"])), function (props) { return props.theme.color.text.alpha; });
export var StyledTransferLi = styled.li(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 ", ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n\n    ", " {\n      border: 1px solid ", ";\n    }\n    \n    ", " svg {\n      color: ", "\n    }\n  }\n\n  ", " {\n    display: flex;\n    width: 100%;\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n\n  ", ",\n  span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 ", ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n\n    ", " {\n      border: 1px solid ", ";\n    }\n    \n    ", " svg {\n      color: ", "\n    }\n  }\n\n  ", " {\n    display: flex;\n    width: 100%;\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n  }\n\n  ", ",\n  span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"])), function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.color.background.gamma; }, StyledCheckboxInputShown, function (props) { return props.theme.color.primary.alpha; }, StyledDeleteOneIcon, function (props) { return props.theme.color.error.alpha; }, StyledCheckboxLabel, function (props) {
    return props.size === 'small' && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n        height: ", "px;\n        line-height: ", "px;\n        font-size: ", ";\n      "], ["\n        height: ", "px;\n        line-height: ", "px;\n        font-size: ", ";\n      "])), parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0), props.theme.font.size.sm);
}, function (props) {
    return props.size === 'medium' && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n        height: ", "px;\n        line-height: ", "px;\n        font-size: ", ";\n      "], ["\n        height: ", "px;\n        line-height: ", "px;\n        font-size: ", ";\n      "])), parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0), props.theme.font.size.md);
}, function (props) {
    return props.size === 'large' && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
}, StyledCheckboxSpan);
export var StyledTransfer = styled.div(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  display: block;\n  width: 240px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  \n  &:hover {\n    border-color: ", ";\n  }\n\n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n\n  ", "\n"], ["\n  display: block;\n  width: 240px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  \n  &:hover {\n    border-color: ", ";\n  }\n\n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n\n  ",
    "\n"])), function (props) { return props.theme.color.border; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.color.background.alpha; }, function (props) { return props.theme.color.primary.alpha; }, function (props) {
    return props.isDisabled && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      color: ", ";\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n\n        ", " {\n          color: ", ";\n        }\n      }\n\n      ", " {\n        cursor: not-allowed;\n        background-color: ", ";\n      }\n\n      ", " {\n        cursor: not-allowed;\n      }\n    "], ["\n      color: ", ";\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n\n        ", " {\n          color: ", ";\n        }\n      }\n\n      ", " {\n        cursor: not-allowed;\n        background-color: ", ";\n      }\n\n      ", " {\n        cursor: not-allowed;\n      }\n    "])), props.theme.color.text.beta, props.theme.color.border, StyledIcon, props.theme.color.text.beta, StyledInput, props.theme.color.default, StyledIcon);
}, function (props) {
    return props.isFocused && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), props.theme.color.primary.alpha);
}, function (props) {
    return (props.isOpen || (props.isOpen && props.isHalfOpen)) && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      box-shadow: ", ";\n      z-index: 3;\n    "], ["\n      box-shadow: ", ";\n      z-index: 3;\n    "])), props.theme.boxShadow.md);
}, function (props) {
    return props.isFullWidth && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "])));
}, function (props) {
    return props.isOpen &&
        !props.isHalfOpen &&
        !props.isFullWidth && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n      width: 300px;\n    "], ["\n      width: 300px;\n    "])));
}, function (props) {
    return props.isOpen &&
        props.isHalfOpen &&
        !props.isFullWidth && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n      width: 600px;\n    "], ["\n      width: 600px;\n    "])));
});
StyledTransferUl.defaultProps = {
    theme: theme
};
StyledTransferLi.defaultProps = {
    theme: theme
};
StyledTransfer.defaultProps = {
    theme: theme
};
StyledTransferSide.defaultProps = {
    theme: theme
};
StyledTransferUl.displayName = 'StyledTransferUl';
StyledTransferLi.displayName = 'StyledTransferLi';
StyledTransfer.displayName = 'StyledTransfer';
StyledTransferSide.displayName = 'StyledTransferSide';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22;
//# sourceMappingURL=Transfer.style.js.map
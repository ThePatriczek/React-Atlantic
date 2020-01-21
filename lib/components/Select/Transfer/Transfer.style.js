var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { Button } from '../../Button';
import { StyledCheckboxInputShown, StyledCheckboxLabel, StyledCheckboxSpan } from '../../Checkbox/Checkbox.style';
import { Icon } from '../../Icon';
import { StyledIcon } from '../../Icon/Icon.style';
import { Input } from '../../Input';
import { StyledInput } from '../../Input/Input.style';
export var StyledTransferContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1000;\n"], ["\n  position: relative;\n  z-index: 1000;\n"])));
export var StyledTransferUl = styled.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  min-height: 150px;\n  max-height: 150px;\n  list-style: none;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  overflow: scroll;\n"], ["\n  min-height: 150px;\n  max-height: 150px;\n  list-style: none;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  overflow: scroll;\n"])));
export var StyledTransferInput = styled(Input)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", " {\n    border: 0;\n    padding-right: 55px;\n  }\n\n  ", "\n"], ["\n  ", " {\n    border: 0;\n    padding-right: 55px;\n  }\n\n  ",
    "\n"])), StyledInput, function (props) {
    return props.isOpen && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      border-bottom: 1px solid #d9d9d9;\n\n      :hover {\n        border-color: ", ";\n      }\n      ", " {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    "], ["\n      border-bottom: 1px solid #d9d9d9;\n\n      :hover {\n        border-color: ", ";\n      }\n      ", " {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    "])), function (props) { return props.theme.color.primary.alpha; }, StyledInput);
});
export var StyledSearchButton = styled(Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  svg {\n    height: 20px;\n  }\n\n  && {\n    background: none;\n    border: none;\n    box-shadow: none;\n    :hover {\n      background: none;\n    }\n    :after {\n      display: none;\n    }\n  }\n\n  && {\n    ", " {\n      color: ", ";\n    }\n\n    :hover {\n      background: none;\n      color: ", ";\n      ", " {\n        color: ", ";\n      }\n    }\n  }\n\n  && {\n    position: absolute;\n    top: -3px;\n    right: 25px;\n    ", " {\n      color: ", ";\n      :hover {\n        color: ", ";\n      }\n    }\n  }\n"], ["\n  svg {\n    height: 20px;\n  }\n\n  && {\n    background: none;\n    border: none;\n    box-shadow: none;\n    :hover {\n      background: none;\n    }\n    :after {\n      display: none;\n    }\n  }\n\n  && {\n    ", " {\n      color: ", ";\n    }\n\n    :hover {\n      background: none;\n      color: ", ";\n      ", " {\n        color: ", ";\n      }\n    }\n  }\n\n  && {\n    position: absolute;\n    top: -3px;\n    right: 25px;\n    ", " {\n      color: ", ";\n      :hover {\n        color: ", ";\n      }\n    }\n  }\n"])), StyledIcon, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.error.alpha; }, StyledIcon, function (props) { return props.theme.color.error.alpha; }, StyledIcon, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.error.alpha; });
export var StyledChosenHeader = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n", "\n    ", "\n    ", "\n    border-bottom: 1px solid #d9d9d9\n"], ["\n",
    "\n    ",
    "\n    ",
    "\n    border-bottom: 1px solid #d9d9d9\n"])), function (props) {
    return props.size === 'small' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    font-size: ", ";\n    height: ", "px;\n    line-height: ", "px;\n  "], ["\n    font-size: ", ";\n    height: ", "px;\n    line-height: ", "px;\n  "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
});
export var StyledInputHeader = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
export var StyledTransferSide = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: block;\n  float: left;\n  width: ", ";\n\n  &:first-child {\n    width: ", ";\n    ", "\n    \n    ", "\n\n    ", "\n  }\n\n  > ", " {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: ", ";\n\n    ", " {\n      input {\n        width: 100%;\n      }\n    }\n\n    button,\n    span:not(.icon) {\n      margin: 0 ", ";\n    }\n  }\n"], ["\n  display: block;\n  float: left;\n  width: ", ";\n\n  &:first-child {\n    width: ",
    ";\n    ",
    "\n    \n    ",
    "\n\n    ",
    "\n  }\n\n  > ", " {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: ", ";\n\n    ", " {\n      input {\n        width: 100%;\n      }\n    }\n\n    button,\n    span:not(.icon) {\n      margin: 0 ", ";\n    }\n  }\n"])), function (props) { return (props.isOpen ? '50%' : '100%'); }, function (props) {
    return props.isHalfOpen && props.isOpen ? 'calc(50% - 1px)' : '100%';
}, function (props) {
    return props.isOpen &&
        !props.isHalfOpen && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        border-right: 1px solid #d9d9d9;\n        border-top-right-radius: 4px;\n      "], ["\n        border-right: 1px solid #d9d9d9;\n        border-top-right-radius: 4px;\n      "])));
}, function (props) {
    return props.isOpen &&
        !props.isHalfOpen && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n        border-color: ", ";\n      "], ["\n        border-color: ", ";\n      "])), function (props) { return props.theme.color.primary.alpha; });
}, function (props) {
    return props.isOpen &&
        props.isHalfOpen && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n        border-right: 1px solid #d9d9d9;\n      "], ["\n        border-right: 1px solid #d9d9d9;\n      "])));
}, StyledChosenHeader, function (props) { return props.theme.color.primary.alpha; }, StyledTransferInput, function (props) { return props.theme.padding.sm; });
export var StyledTransferFooter = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  float: left;\n  border-top: 1px solid #d9d9d9;\n\n  button {\n    margin: ", " ", "\n      ", " 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  float: left;\n  border-top: 1px solid #d9d9d9;\n\n  button {\n    margin: ", " ", "\n      ", " 0;\n  }\n"])), function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.margin.sm; });
export var StyledTransferDeleteAllButtonIcon = styled(Icon)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  padding-right: 5px;\n  ", "\n"], ["\n  padding-right: 5px;\n  ",
    "\n"])), function (props) {
    return props.size === 'small' && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      padding-right: 0;\n    "], ["\n      padding-right: 0;\n    "])));
});
export var StyledTransferLi = styled.li(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: ", ";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n\n  &:hover {\n    ", " {\n      border: 1px solid ", ";\n    }\n    background-color: ", ";\n  }\n\n  > i {\n    color: ", ";\n  }\n\n  &:hover {\n    > i {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    display: flex;\n    width: 100%;\n  }\n  \n > span {\n  ", "\n    ", "\n    ", "\n }\n  \n  ", " > span{\n  ", "\n    ", "\n    ", "\n  }\n  \n\n  ", " {\n    min-width: 16px;\n  }\n\n  div,\n  span,\n  i {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: ", ";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n\n  &:hover {\n    ", " {\n      border: 1px solid ", ";\n    }\n    background-color: ", ";\n  }\n\n  > i {\n    color: ", ";\n  }\n\n  &:hover {\n    > i {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    display: flex;\n    width: 100%;\n  }\n  \n > span {\n  ",
    "\n    ",
    "\n    ",
    "\n }\n  \n  ", " > span{\n  ",
    "\n    ",
    "\n    ",
    "\n  }\n  \n\n  ", " {\n    min-width: 16px;\n  }\n\n  div,\n  span,\n  i {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"])), function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.height.md; }, StyledCheckboxInputShown, function (props) { return props.theme.color.primary.alpha; }, function (props) { return props.theme.color.background.gamma; }, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.error.alpha; }, StyledCheckboxLabel, function (props) {
    return props.size === 'small' && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
}, StyledCheckboxSpan, function (props) {
    return props.size === 'small' && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
}, StyledCheckboxInputShown);
export var DeleteAllButton = styled(Button)(templateObject_25 || (templateObject_25 = __makeTemplateObject([""], [""])));
export var StyledTransferSpan = styled.span(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n", "\n    ", "\n    ", "\n"], ["\n",
    "\n    ",
    "\n    ",
    "\n"])), function (props) {
    return props.size === 'small' && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n    font-size: ", ";\n    height: ", "px;\n    line-height: ", "px;\n  "], ["\n    font-size: ", ";\n    height: ", "px;\n    line-height: ", "px;\n  "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
});
export var StyledTransfer = styled.div(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n  display: block;\n  min-width: 300px;\n  width: ", ";\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  box-shadow: none;\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';\n\n  ", "\n  }\n  ", "\n  \n  ", "\n  \n  ", "\n  \n   ", "\n   ", "\n   \n   ", "\n"], ["\n  display: block;\n  min-width: 300px;\n  width: ", ";\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  box-shadow: none;\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';\n\n  ",
    "\n  }\n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n   ",
    "\n   ",
    "\n   \n   ",
    "\n"])), function (props) { return (props.isOpen && props.isHalfOpen ? '600px' : '300px'); }, function (props) {
    return props.isOpen && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n      box-shadow: ", ";\n    "], ["\n      box-shadow: ", ";\n    "])), function (props) { return props.theme.boxShadow.md; });
}, function (props) {
    return !props.isDisabled && css(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n      &:hover {\n        border-color: ", ";\n      }\n    "], ["\n      &:hover {\n        border-color: ", ";\n      }\n    "])), function (props) { return props.theme.color.primary.alpha; });
}, function (props) {
    return props.isFocused && css(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), function (props) { return props.theme.color.primary.alpha; });
}, function (props) {
    return props.position === 'bottom' && css(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n      bottom: 0;\n    "], ["\n      bottom: 0;\n    "])));
}, function (props) {
    return props.position === 'top' && css(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n       top: 0;\n     "], ["\n       top: 0;\n     "])));
}, function (props) {
    return props.position === 'right' && css(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n       right: 0;\n     "], ["\n       right: 0;\n     "])));
}, function (props) {
    return props.position === 'left' && css(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n       left: 0;\n     "], ["\n       left: 0;\n     "])));
});
StyledTransferUl.defaultProps = {
    theme: theme
};
StyledTransferLi.defaultProps = {
    theme: theme
};
StyledTransferFooter.defaultProps = {
    theme: theme
};
StyledTransferContainer.defaultProps = {
    theme: theme
};
StyledTransfer.defaultProps = {
    theme: theme
};
StyledTransferSide.defaultProps = {
    theme: theme
};
StyledTransferSpan.defaultProps = {
    theme: theme
};
StyledTransferUl.displayName = 'StyledTransferUl';
StyledTransferLi.displayName = 'StyledTransferLi';
StyledTransferFooter.displayName = 'StyledTransferFooter';
StyledTransfer.displayName = 'StyledTransfer';
StyledTransferSide.displayName = 'StyledTransferSide';
StyledTransferContainer.displayName = 'StyledTransferContainer';
StyledTransferSpan.displayName = 'StyledTransferSpan';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37;
//# sourceMappingURL=Transfer.style.js.map
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
export var StyledTransferContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n   ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n   ",
    "\n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.size === 'small' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n       height: ", "px;\n     "], ["\n       height: ", "px;\n     "])), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      height: ", "px;\n    "], ["\n      height: ", "px;\n    "])), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      height: ", "px;\n    "], ["\n      height: ", "px;\n    "])), parseInt(props.theme.height.lg, 0));
});
export var StyledTransferUl = styled.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  min-height: 150px;\n  max-height: 150px;\n  list-style: none;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  overflow: scroll;\n  color: ", ";\n"], ["\n  min-height: 150px;\n  max-height: 150px;\n  list-style: none;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  overflow: scroll;\n  color: ", ";\n"])), function (props) { return props.theme.color.text.alpha; });
export var StyledTransferInput = styled(Input)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  z-index: 1;\n  ", " {\n    border: 0;\n    box-sizing: border-box;\n    ", "\n  }\n\n  ", "\n\n  ", "\n"], ["\n  z-index: 1;\n  ", " {\n    border: 0;\n    box-sizing: border-box;\n    ",
    "\n  }\n\n  ",
    "\n\n  ",
    "\n"])), StyledInput, function (props) {
    return props.isOpen && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n         ", "\n         ", "\n         ", ";\n      "], ["\n         ",
        "\n         ",
        "\n         ",
        ";\n      "])), props.size === 'small' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n             padding-right: 50px;\n           "], ["\n             padding-right: 50px;\n           "]))), props.size === 'medium' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n             padding-right: 55px;\n           "], ["\n             padding-right: 55px;\n           "]))), props.size === 'large' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n             padding-right: 65px;\n           "], ["\n             padding-right: 65px;\n           "]))));
}, function (props) {
    return props.isOpen && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      border-bottom: 1px solid ", ";\n\n      :hover {\n        border-color: ", ";\n        border-right: 1px solid ", ";\n        ", "\n      }\n\n      ", " {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    "], ["\n      border-bottom: 1px solid ", ";\n\n      :hover {\n        border-color: ", ";\n        border-right: 1px solid ", ";\n        ",
        "\n      }\n\n      ", " {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    "])), function (props) { return props.theme.color.border; }, function (props) { return props.theme.color.primary.alpha; }, function (props) { return props.theme.color.primary.alpha; }, !props.isHalfOpen && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            border-top-right-radius: ", ";\n          "], ["\n            border-top-right-radius: ", ";\n          "])), function (props) { return props.theme.radius; }), StyledInput);
}, function (props) {
    return !props.isOpen && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      :hover {\n        border-top-right-radius: ", ";\n      }\n\n      ", " {\n        background: none;\n        color: transparent;\n      }\n    "], ["\n      :hover {\n        border-top-right-radius: ", ";\n      }\n\n      ", " {\n        background: none;\n        color: transparent;\n      }\n    "])), function (props) { return props.theme.radius; }, StyledInput);
});
export var StyledDeleteOneIcon = styled(Icon)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  svg,\n  path {\n    color: ", ";\n  }\n"], ["\n  svg,\n  path {\n    color: ", ";\n  }\n"])), function (props) { return props.theme.color.text.beta; });
export var StyledDeleteOneButton = styled(Button)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  border: none;\n  background: none;\n  box-shadow: none;\n"], ["\n  border: none;\n  background: none;\n  box-shadow: none;\n"])));
export var StyledInputHeader = styled.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
export var StyledSearchButton = styled(Button)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  svg {\n    height: 20px;\n  }\n\n  && {\n    background: none;\n    border: none;\n    box-shadow: none;\n    :hover {\n      background: none;\n    }\n    :after {\n      display: none;\n    }\n  }\n\n  && {\n    ", " {\n      color: ", ";\n    }\n\n    :hover {\n      background: none;\n      color: ", ";\n      ", " {\n        color: ", ";\n      }\n    }\n  }\n\n  && {\n    z-index: 100;\n    position: absolute;\n    top: -3px;\n    right: 25px;\n    ", " {\n      color: ", ";\n      :hover {\n        color: ", ";\n      }\n    }\n  }\n"], ["\n  svg {\n    height: 20px;\n  }\n\n  && {\n    background: none;\n    border: none;\n    box-shadow: none;\n    :hover {\n      background: none;\n    }\n    :after {\n      display: none;\n    }\n  }\n\n  && {\n    ", " {\n      color: ", ";\n    }\n\n    :hover {\n      background: none;\n      color: ", ";\n      ", " {\n        color: ", ";\n      }\n    }\n  }\n\n  && {\n    z-index: 100;\n    position: absolute;\n    top: -3px;\n    right: 25px;\n    ", " {\n      color: ", ";\n      :hover {\n        color: ", ";\n      }\n    }\n  }\n"])), StyledIcon, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.error.alpha; }, StyledIcon, function (props) { return props.theme.color.error.alpha; }, StyledIcon, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.error.alpha; });
export var StyledInputText = styled.div(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  position: absolute;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  left: 10px;\n  top: 0;\n  z-index: 0;\n  white-space: nowrap;\n  width: calc(100% - 40px);\n  color: ", ";\n  span  {\n    ", "\n      ", "\n      ", "\n  }\n"], ["\n  position: absolute;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  left: 10px;\n  top: 0;\n  z-index: 0;\n  white-space: nowrap;\n  width: calc(100% - 40px);\n  color: ", ";\n  span  {\n    ",
    "\n      ",
    "\n      ",
    "\n  }\n"])), function (props) { return props.theme.color.text.alpha; }, function (props) {
    return props.size === 'small' && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n          font-size: ", ";\n          height: ", "px;\n          line-height: ", "px;\n        "], ["\n          font-size: ", ";\n          height: ", "px;\n          line-height: ", "px;\n        "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n          font-size: ", ";\n          height: ", "px;\n          line-height: ", "px;\n        "], ["\n          font-size: ", ";\n          height: ", "px;\n          line-height: ", "px;\n        "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
});
export var StyledChosenHeader = styled.div(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n    ", "\n    ", "\n    ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n    ",
    "\n    ",
    "\n    ",
    ";\n"])), function (props) { return props.theme.color.border; }, function (props) {
    return props.size === 'small' && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
});
export var StyledTransferSide = styled.div(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n  display: block;\n  width: ", ";\n   ", "\n   \n   ", "\n  &:first-child {\n    width: ", ";\n    ", "\n    \n    ", "\n    ", "\n  }\n  > ", " {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: ", ";\n    ", "\n    button,\n    span:not(Icon) {\n      margin: 0 ", ";\n    }\n  }\n"], ["\n  display: block;\n  width: ",
    ";\n   ",
    "\n   \n   ",
    "\n  &:first-child {\n    width: ",
    ";\n    ",
    "\n    \n    ",
    "\n    ",
    "\n  }\n  > ", " {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: ", ";\n    ",
    "\n    button,\n    span:not(Icon) {\n      margin: 0 ", ";\n    }\n  }\n"])), function (props) {
    return props.isOpen && props.direction === 'horizontal' ? '50%' : '100%';
}, function (props) {
    return props.isOpen && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n       min-width: 220px;\n     "], ["\n       min-width: 220px;\n     "])));
}, function (props) {
    return props.direction === 'horizontal'
        ? css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n           float: left;\n         "], ["\n           float: left;\n         "]))) : css(templateObject_28 || (templateObject_28 = __makeTemplateObject([""], [""])));
}, function (props) {
    return props.isHalfOpen && props.direction === 'horizontal' && props.isOpen
        ? 'calc(50% - 1px)'
        : '100%';
}, function (props) {
    return props.isOpen &&
        !props.isHalfOpen && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n        border-right: 1px solid ", ";\n        border-top-right-radius: ", ";\n      "], ["\n        border-right: 1px solid ", ";\n        border-top-right-radius: ", ";\n      "])), function (props) { return props.theme.color.border; }, function (props) { return props.theme.radius; });
}, function (props) {
    return props.isOpen &&
        !props.isHalfOpen && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n        border-color: ", ";\n      "], ["\n        border-color: ", ";\n      "])), function (props) { return props.theme.color.primary.alpha; });
}, function (props) {
    return props.isOpen &&
        props.isHalfOpen &&
        props.direction === 'horizontal' && css(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n        border-right: 1px solid ", ";\n      "], ["\n        border-right: 1px solid ", ";\n      "])), function (props) { return props.theme.color.border; });
}, StyledChosenHeader, function (props) { return props.theme.color.primary.alpha; }, function (props) {
    return props.direction === 'horizontal'
        ? css(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n            border-top: none;\n          "], ["\n            border-top: none;\n          "]))) : css(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n            border-top: 1px solid ", ";\n          "], ["\n            border-top: 1px solid ", ";\n          "])), function (props) { return props.theme.color.border; });
}, function (props) { return props.theme.padding.sm; });
export var StyledTransferFooter = styled.div(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  float: left;\n  border-top: 1px solid ", ";\n\n  button {\n    margin: ", " ", "\n      ", " 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  float: left;\n  border-top: 1px solid ", ";\n\n  button {\n    margin: ", " ", "\n      ", " 0;\n  }\n"])), function (props) { return props.theme.color.border; }, function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.margin.sm; });
export var StyledTransferDeleteAllButtonIcon = styled(Icon)(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n  padding-right: 5px;\n  ", "\n"], ["\n  padding-right: 5px;\n  ",
    "\n"])), function (props) {
    return props.size === 'small' && css(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n      padding-right: 0;\n    "], ["\n      padding-right: 0;\n    "])));
});
export var StyledTransferLi = styled.li(templateObject_44 || (templateObject_44 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: ", ";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n\n  &:hover {\n    ", " {\n      border: 1px solid ", ";\n    }\n    background-color: ", ";\n  }\n\n  > i {\n    color: ", ";\n  }\n\n  :hover {\n    button, ", " > svg > path {\n      background-color: unset!important;\n      color: ", ";\n    }\n  }\n\n  ", " {\n    display: flex;\n    width: 100%;\n  }\n  \n > span {\n  ", "\n    ", "\n    ", "\n }\n  \n  ", " > span{\n  ", "\n    ", "\n    ", "\n  }\n  \n\n  ", " {\n    min-width: 16px;\n  }\n\n  div,\n  span,\n  i {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: ", ";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n\n  &:hover {\n    ", " {\n      border: 1px solid ", ";\n    }\n    background-color: ", ";\n  }\n\n  > i {\n    color: ", ";\n  }\n\n  :hover {\n    button, ", " > svg > path {\n      background-color: unset!important;\n      color: ", ";\n    }\n  }\n\n  ", " {\n    display: flex;\n    width: 100%;\n  }\n  \n > span {\n  ",
    "\n    ",
    "\n    ",
    "\n }\n  \n  ", " > span{\n  ",
    "\n    ",
    "\n    ",
    "\n  }\n  \n\n  ", " {\n    min-width: 16px;\n  }\n\n  div,\n  span,\n  i {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"])), function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.height.md; }, StyledCheckboxInputShown, function (props) { return props.theme.color.primary.alpha; }, function (props) { return props.theme.color.background.gamma; }, function (props) { return props.theme.color.text.beta; }, StyledDeleteOneIcon, function (props) { return props.theme.color.error.alpha; }, StyledCheckboxLabel, function (props) {
    return props.size === 'small' && css(templateObject_38 || (templateObject_38 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_39 || (templateObject_39 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_40 || (templateObject_40 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
}, StyledCheckboxSpan, function (props) {
    return props.size === 'small' && css(templateObject_41 || (templateObject_41 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_42 || (templateObject_42 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_43 || (templateObject_43 = __makeTemplateObject(["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "], ["\n        font-size: ", ";\n        height: ", "px;\n        line-height: ", "px;\n      "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
}, StyledCheckboxInputShown);
export var DeleteAllButton = styled(Button)(templateObject_46 || (templateObject_46 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    return props.globalSize === 'small' && css(templateObject_45 || (templateObject_45 = __makeTemplateObject(["\n      border: none;\n    "], ["\n      border: none;\n    "])));
});
export var StyledTransferSpan = styled.span(templateObject_50 || (templateObject_50 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n    \n"], ["\n  ",
    "\n  ",
    "\n  ",
    "\n    \n"])), function (props) {
    return props.size === 'medium' && css(templateObject_47 || (templateObject_47 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_48 || (templateObject_48 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
}, function (props) {
    return props.size === 'small' && css(templateObject_49 || (templateObject_49 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
});
export var StyledTransferOptions = styled.div(templateObject_51 || (templateObject_51 = __makeTemplateObject(["\n  position: relative;\n  z-index: 100;\n"], ["\n  position: relative;\n  z-index: 100;\n"])));
export var StyledTransfer = styled.div(templateObject_67 || (templateObject_67 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  display: block;\n  position: absolute;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: none;\n  font-size: 14px;\n  box-sizing: border-box;\n  font-family: ", ";\n   \n  ", "\n   \n   ", "\n  \n  ", "\n\n  ", "\n  }\n  ", "\n\n  ", "\n  \n  ", "\n  \n   ", "\n   ", "\n   \n   ", "\n"], ["\n  ",
    ";\n  ",
    ";\n  display: block;\n  position: absolute;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: none;\n  font-size: 14px;\n  box-sizing: border-box;\n  font-family: ", ";\n   \n  ",
    "\n   \n   ",
    "\n  \n  ",
    "\n\n  ",
    "\n  }\n  ",
    "\n\n  ",
    "\n  \n  ",
    "\n  \n   ",
    "\n   ",
    "\n   \n   ",
    "\n"])), function (props) {
    return props.isOpen &&
        props.isHalfOpen &&
        props.direction === 'horizontal' && css(templateObject_52 || (templateObject_52 = __makeTemplateObject(["\n      min-width: 600px;\n    "], ["\n      min-width: 600px;\n    "])));
}, function (props) {
    return props.isOpen &&
        props.isHalfOpen &&
        props.direction === 'vertical' && css(templateObject_53 || (templateObject_53 = __makeTemplateObject([""], [""])));
}, function (props) { return props.theme.color.background.alpha; }, function (props) { return props.theme.color.border; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.font.family; }, function (props) {
    return props.isDisabled && css(templateObject_54 || (templateObject_54 = __makeTemplateObject(["\n      color: ", ";\n      cursor: not-allowed;\n      background-color: ", ";\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: not-allowed;\n      background-color: ", ";\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "])), props.theme.color.text.beta, props.theme.color.default, props.theme.color.border);
}, function (props) {
    return !props.isOpen && css(templateObject_58 || (templateObject_58 = __makeTemplateObject(["\n       ", "\n  ", "\n  ", "\n     "], ["\n       ",
        "\n  ",
        "\n  ",
        "\n     "])), props.size === 'small' && css(templateObject_55 || (templateObject_55 = __makeTemplateObject(["\n           height: ", "px;\n         "], ["\n           height: ", "px;\n         "])), parseInt(props.theme.height.sm, 0)), props.size === 'medium' && css(templateObject_56 || (templateObject_56 = __makeTemplateObject(["\n      height: ", "px;\n    "], ["\n      height: ", "px;\n    "])), parseInt(props.theme.height.md, 0)), props.size === 'large' && css(templateObject_57 || (templateObject_57 = __makeTemplateObject(["\n      height: ", "px;\n    "], ["\n      height: ", "px;\n    "])), parseInt(props.theme.height.lg, 0)));
}, function (props) {
    return props.isFullWidth && css(templateObject_59 || (templateObject_59 = __makeTemplateObject(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "])));
}, function (props) {
    return props.isOpen && css(templateObject_60 || (templateObject_60 = __makeTemplateObject(["\n      box-shadow: ", ";\n      z-index: 3;\n    "], ["\n      box-shadow: ", ";\n      z-index: 3;\n    "])), function (props) { return props.theme.boxShadow.md; });
}, function (props) {
    return !props.isDisabled && css(templateObject_61 || (templateObject_61 = __makeTemplateObject(["\n      &:hover {\n        border-color: ", ";\n      }\n    "], ["\n      &:hover {\n        border-color: ", ";\n      }\n    "])), function (props) { return props.theme.color.primary.alpha; });
}, function (props) {
    return props.isFocused && css(templateObject_62 || (templateObject_62 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), function (props) { return props.theme.color.primary.alpha; });
}, function (props) {
    return props.position === 'bottom' && css(templateObject_63 || (templateObject_63 = __makeTemplateObject(["\n      bottom: 0;\n    "], ["\n      bottom: 0;\n    "])));
}, function (props) {
    return props.position === 'top' && css(templateObject_64 || (templateObject_64 = __makeTemplateObject(["\n       top: 0;\n     "], ["\n       top: 0;\n     "])));
}, function (props) {
    return props.position === 'right' && css(templateObject_65 || (templateObject_65 = __makeTemplateObject(["\n       right: 0;\n     "], ["\n       right: 0;\n     "])));
}, function (props) {
    return props.position === 'left' && css(templateObject_66 || (templateObject_66 = __makeTemplateObject(["\n       left: 0;\n     "], ["\n       left: 0;\n     "])));
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
StyledTransferOptions.defaultProps = {
    theme: theme
};
StyledInputText.defaultProps = {
    theme: theme
};
StyledTransferUl.displayName = 'StyledTransferUl';
StyledTransferLi.displayName = 'StyledTransferLi';
StyledTransferFooter.displayName = 'StyledTransferFooter';
StyledTransfer.displayName = 'StyledTransfer';
StyledTransferSide.displayName = 'StyledTransferSide';
StyledTransferContainer.displayName = 'StyledTransferContainer';
StyledTransferSpan.displayName = 'StyledTransferSpan';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52, templateObject_53, templateObject_54, templateObject_55, templateObject_56, templateObject_57, templateObject_58, templateObject_59, templateObject_60, templateObject_61, templateObject_62, templateObject_63, templateObject_64, templateObject_65, templateObject_66, templateObject_67;
//# sourceMappingURL=Transfer.style.js.map
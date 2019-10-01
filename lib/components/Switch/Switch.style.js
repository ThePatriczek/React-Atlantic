var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
var togglerSizeLarge = '28px';
var togglerSizeNormal = '24px';
var togglerSizeSmall = '16px';
var switchWidthLarge = '80px';
var switchWidthNormal = '70px';
var switchWidthSmall = '60px';
var switchColorOff = 'black';
var switchBackgroundColorOff = theme.color.default;
var switchColorOn = 'white';
var paddingMD = parseInt(theme.padding.md, 0);
var marginSM = parseInt(theme.margin.sm, 0);
var switchWidthNormalInt = parseInt(switchWidthNormal, 0);
var togglerSizeNormalInt = parseInt(togglerSizeNormal, 0);
export var StyledSwitchLabel = styled.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  ", "\n  ", "\n  \n  ", "\n   ", "\n"], ["\n  position: relative;\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  ",
    "\n  ",
    "\n  \n  ",
    "\n   ",
    "\n"])), switchWidthNormal, function (props) { return props.theme.height.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) {
    return props.size === 'small' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      height: ", ";\n      width: ", ";\n      font-size: 12px;\n    "], ["\n      height: ", ";\n      width: ", ";\n      font-size: 12px;\n    "])), props.theme.height.sm, switchWidthSmall);
}, function (props) {
    return props.size === 'large' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      height: ", ";\n      width: ", ";\n      font-size: 16px;\n    "], ["\n      height: ", ";\n      width: ", ";\n      font-size: 16px;\n    "])), props.theme.height.lg, switchWidthLarge);
}, function (props) {
    return props.size === 'medium' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      height: ", ";\n      width: ", ";\n      font-size: 14px;\n    "], ["\n      height: ", ";\n      width: ", ";\n      font-size: 14px;\n    "])), props.theme.height.md, switchWidthNormal);
}, function (props) {
    return props.isDisabled && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n       cursor: not-allowed;\n     "], ["\n       cursor: not-allowed;\n     "])));
});
export var StyledSwitcherWrap = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  width: 200%;\n  transition: right 0.3s ease;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  width: 200%;\n  transition: right 0.3s ease;\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.isChecked && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      right: -", ";\n    "], ["\n      right: -", ";\n    "])), switchWidthNormal);
}, function (props) {
    return props.size === 'small' &&
        props.isChecked && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      right: -", ";\n    "], ["\n      right: -", ";\n    "])), switchWidthSmall);
}, function (props) {
    return props.size === 'large' &&
        props.isChecked && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      right: -", ";\n    "], ["\n      right: -", ";\n    "])), switchWidthLarge);
}, function (props) {
    return props.size === 'medium' &&
        props.isChecked && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      right: -", ";\n    "], ["\n      right: -", ";\n    "])), switchWidthNormal);
});
export var StyledSwitcherTrue = styled.div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 50%;\n  height: 100%;\n  line-height: 1;\n  user-select: none;\n  color: ", ";\n  background-color: ", ";\n  transition: background-color 0.3s ease, color 0.3s ease;\n\n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n \n  ", "  \n  ", " \n  \n  ", "\n  \n  ", "\n  \n  ", "\n   \n   ", "\n   \n   ", "\n   \n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 50%;\n  height: 100%;\n  line-height: 1;\n  user-select: none;\n  color: ", ";\n  background-color: ", ";\n  transition: background-color 0.3s ease, color 0.3s ease;\n\n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n \n  ",
    "  \n  ",
    " \n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n   \n   ",
    "\n   \n   ",
    "\n   \n  ",
    "\n"])), switchColorOff, darken(0.1, switchBackgroundColorOff), function (props) { return css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    padding-left: ", ";\n    justify-content: flex-start;\n  "], ["\n    padding-left: ", ";\n    justify-content: flex-start;\n  "])), props.theme.padding.md); }, function (props) {
    return props.isChecked &&
        !props.htmlType && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      color: ", ";\n      background-color: ", ";\n    "], ["\n      color: ", ";\n      background-color: ", ";\n    "])), switchColorOn, props.theme.color.primary);
}, function (props) {
    return props.htmlType === 'success' &&
        props.isChecked && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      color: ", ";\n      background-color: ", ";\n    "], ["\n      color: ", ";\n      background-color: ", ";\n    "])), switchColorOn, props.theme.color.success);
}, function (props) {
    return props.htmlType === 'warning' &&
        props.isChecked && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      color: ", ";\n      background-color: ", ";\n    "], ["\n      color: ", ";\n      background-color: ", ";\n    "])), switchColorOn, props.theme.color.warning);
}, function (props) {
    return props.htmlType === 'error' &&
        props.isChecked && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      color: ", ";\n      background-color: ", ";\n    "], ["\n      color: ", ";\n      background-color: ", ";\n    "])), switchColorOn, props.theme.color.error);
}, function (props) {
    return props.htmlType === 'primary' &&
        props.isChecked && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      color: ", ";\n      background-color: ", ";\n    "], ["\n      color: ", ";\n      background-color: ", ";\n    "])), switchColorOn, props.theme.color.primary);
}, function (props) {
    return props.size === 'small' && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      padding-left: ", ";\n    "], ["\n      padding-left: ", ";\n    "])), paddingMD);
}, function (props) {
    return props.size === 'large' && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      padding-left: ", "px;\n    "], ["\n      padding-left: ", "px;\n    "])), paddingMD + 3);
}, function (props) {
    return props.size === 'medium' && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n      padding-left: ", "px;\n    "], ["\n      padding-left: ", "px;\n    "])), paddingMD);
}, function (props) {
    return props.isDisabled &&
        props.isChecked && css(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n       background-color: ", ";\n     "], ["\n       background-color: ", ";\n     "])), darken(0.1, switchBackgroundColorOff));
}, function (props) {
    return props.isDisabled &&
        props.htmlType &&
        props.isChecked && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n       background-color: ", ";\n     "], ["\n       background-color: ", ";\n     "])), darken(0.1, switchBackgroundColorOff));
}, function (props) {
    return props.isDisabled && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), darken(0.1, switchBackgroundColorOff));
});
export var StyledSwitcherToggler = styled.div(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: ", "px;\n  bottom: 0;\n  width: ", "px;\n  margin: ", ";\n\n  background-color: white;\n  border-radius: 50%;\n  transition: right 0.3s ease;\n  ", "\n  ", "\n  \n   ", "\n   \n   ", "\n   ", "\n   \n   ", "\n   ", "\n"], ["\n  position: absolute;\n  top: 0;\n  right: ", "px;\n  bottom: 0;\n  width: ", "px;\n  margin: ", ";\n\n  background-color: white;\n  border-radius: 50%;\n  transition: right 0.3s ease;\n  ",
    "\n  ",
    "\n  \n   ",
    "\n   \n   ",
    "\n   ",
    "\n   \n   ",
    "\n   ",
    "\n"])), switchWidthNormalInt - togglerSizeNormalInt - 2 * marginSM, togglerSizeNormalInt, function (props) { return props.theme.margin.sm; }, function (props) {
    return props.isChecked && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n      right: ", ";\n    "], ["\n      right: ", ";\n    "])), switchWidthNormal);
}, function (props) {
    return props.size === 'small' && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n      width: ", ";\n      right: ", "px;\n      font-size: 12px;\n    "], ["\n      width: ", ";\n      right: ",
        "px;\n      font-size: 12px;\n    "])), togglerSizeSmall, parseInt(switchWidthSmall, 0) -
        parseInt(togglerSizeSmall, 0) -
        2 * parseInt(theme.margin.sm, 0));
}, function (props) {
    return props.size === 'small' &&
        props.isChecked && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n       right: ", ";\n     "], ["\n       right: ", ";\n     "])), switchWidthSmall);
}, function (props) {
    return props.size === 'large' && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n       width: ", ";\n       right: ", "px;\n       font-size: 16px;\n     "], ["\n       width: ", ";\n       right: ",
        "px;\n       font-size: 16px;\n     "])), togglerSizeLarge, parseInt(switchWidthLarge, 0) -
        parseInt(togglerSizeLarge, 0) -
        2 * parseInt(theme.margin.sm, 0));
}, function (props) {
    return props.size === 'large' &&
        props.isChecked && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n       right: ", ";\n     "], ["\n       right: ", ";\n     "])), switchWidthLarge);
}, function (props) {
    return props.size === 'medium' && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n       width: ", ";\n       right: ", "px;\n       font-size: 14px;\n     "], ["\n       width: ", ";\n       right: ", "px;\n       font-size: 14px;\n     "])), togglerSizeNormal, switchWidthNormalInt - togglerSizeNormalInt - 2 * marginSM);
}, function (props) {
    return props.size === 'medium' &&
        props.isChecked && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n       right: ", ";\n     "], ["\n       right: ", ";\n     "])), switchWidthNormal);
});
export var StyledSwitcherFalse = styled.div(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 50%;\n  height: 100%;\n  line-height: 1;\n\n  user-select: none;\n  color: ", ";\n  background-color: ", ";\n  transition: background-color 0.3s ease, color 0.3s ease;\n  ", "\n  ", "\n   \n   ", "\n   \n \n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 50%;\n  height: 100%;\n  line-height: 1;\n\n  user-select: none;\n  color: ", ";\n  background-color: ", ";\n  transition: background-color 0.3s ease, color 0.3s ease;\n  ",
    "\n  ",
    "\n   \n   ",
    "\n   \n \n"])), switchColorOff, darken(0.1, switchBackgroundColorOff), function (props) {
    return props.isChecked && css(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), switchColorOn);
}, function (props) {
    return props.isDisabled && css(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), darken(0.1, switchBackgroundColorOff));
}, function (props) {
    return props.isDisabled &&
        props.htmlType && css(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n       background-color: ", ";\n     "], ["\n       background-color: ", ";\n     "])), darken(0.1, switchBackgroundColorOff));
});
StyledSwitchLabel.defaultProps = {
    theme: theme
};
StyledSwitcherWrap.defaultProps = {
    theme: theme
};
StyledSwitcherTrue.defaultProps = {
    theme: theme
};
StyledSwitchLabel.defaultProps = {
    theme: theme
};
StyledSwitcherToggler.defaultProps = {
    theme: theme
};
StyledSwitcherFalse.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35;
//# sourceMappingURL=Switch.style.js.map
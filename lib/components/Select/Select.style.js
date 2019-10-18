var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { darken, lighten, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
export var SelectContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  width: 220px;\n  line-height: 1;\n\n  font-size: ", ";\n  font-family: ", ";\n\n  * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  position: relative;\n  width: 220px;\n  line-height: 1;\n\n  font-size: ", ";\n  font-family: ", ";\n\n  * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n"])), function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) {
    return props.isFullWidth && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      min-width: 220px;\n      width: 100%;\n    "], ["\n      min-width: 220px;\n      width: 100%;\n    "])));
}, function (props) {
    return props.size === 'small' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "])), function (props) { return props.theme.font.size.sm; });
}, function (props) {
    return props.size === 'large' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "])), function (props) { return props.theme.font.size.lg; });
});
export var Control = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 170px;\n  z-index: 1;\n  cursor: pointer;\n  padding-left: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background: ", ";\n  \n  &:hover{\n    border: 1px solid ", ";\n  }\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 170px;\n  z-index: 1;\n  cursor: pointer;\n  padding-left: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background: ", ";\n  \n  &:hover{\n    border: 1px solid ", ";\n  }\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n"])), function (props) { return props.theme.padding.md; }, function (props) { return darken(0.1, props.theme.color.default); }, function (props) { return props.theme.radius; }, function (props) { return props.theme.color.white; }, function (props) { return props.theme.color.primary; }, function (props) {
    return props.isFocused && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      border-color: ", ";\n      box-shadow: 0 0 0 2px #c3defd;\n    "], ["\n      border-color: ", ";\n      box-shadow: 0 0 0 2px #c3defd;\n    "])), function (props) { return props.theme.color.primary; });
}, function (props) {
    return props.isDisabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      color: ", ";\n\n      ::placeholder {\n        color: ", ";\n      }\n\n      background-color: ", ";\n      cursor: not-allowed;\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "], ["\n      color: ", ";\n\n      ::placeholder {\n        color: ", ";\n      }\n\n      background-color: ", ";\n      cursor: not-allowed;\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "])), darken(0.2, props.theme.color.default), darken(0.2, props.theme.color.default), props.theme.color.default, darken(0.1, props.theme.color.default));
}, function (props) {
    return props.isMenuOpened && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border-bottom: 1px solid\n        ", ";\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    "], ["\n      border-bottom: 1px solid\n        ", ";\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    "])), function (props) { return darken(0.1, props.theme.color.default); });
}, function (props) {
    return props.isMulti &&
        props.hasValue && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      padding-left: 0;\n    "], ["\n      padding-left: 0;\n    "])));
}, function (props) {
    return props.isFullWidth && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      min-width: 100%;\n    "], ["\n      min-width: 100%;\n    "])));
});
export var ValueContainer = styled.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex: 100% 1;\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex: 100% 1;\n\n  ",
    "\n\n  ",
    "\n"])), function (props) {
    return props.isMulti && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      max-width: calc(100% - 72px);\n    "], ["\n      max-width: calc(100% - 72px);\n    "])));
}, function (props) {
    return props.isFullWidth &&
        !props.isMulti && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      max-width: calc(100% - 36px);\n    "], ["\n      max-width: calc(100% - 36px);\n    "])));
});
export var SingleValue = styled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  display: block;\n  max-width: 165px;\n  height: 32px;\n  padding: ", " ", " ", " 0;\n  \n  border-radius: ", ";\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  display: block;\n  max-width: 165px;\n  height: 32px;\n  padding: ", " ",
    " ", " 0;\n  \n  border-radius: ", ";\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n"])), function (props) { return props.theme.padding.sm; }, function (props) {
    return props.theme.padding.sm;
}, function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.radius; }, function (props) {
    return props.isFullWidth && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      max-width: calc(100% - 2px);\n    "], ["\n      max-width: calc(100% - 2px);\n    "])));
}, function (props) {
    return props.size === 'small' && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      height: 24px;\n      padding: 3px 3px 3px 0;\n\n      span {\n        font-size: ", ";\n      }\n    "], ["\n      height: 24px;\n      padding: 3px 3px 3px 0;\n\n      span {\n        font-size: ", ";\n      }\n    "])), function (props) { return props.theme.font.size.sm; });
}, function (props) {
    return props.size === 'large' && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      height: 38px;\n      padding: 7px 7px 7px 0;\n\n      span {\n        font-size: ", ";\n      }\n    "], ["\n      height: 38px;\n      padding: 7px 7px 7px 0;\n\n      span {\n        font-size: ", ";\n      }\n    "])), function (props) { return props.theme.font.size.lg; });
});
export var MultiValue = styled.div(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  display: flex;\n  max-width: calc(100% - 6px);\n  height: 28px;\n  margin: ", ";\n  padding: 0;\n\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n\n  span {\n    margin: 0;\n    padding: 0 ", ";\n    line-height: 26px;\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  max-width: calc(100% - 6px);\n  height: 28px;\n  margin: ", ";\n  padding: 0;\n\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n\n  span {\n    margin: 0;\n    padding: 0 ", ";\n    line-height: 26px;\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  ",
    "\n\n  ",
    "\n"])), function (props) { return props.theme.margin.xs; }, function (props) { return transparentize(0.85, props.theme.color.primary); }, function (props) { return props.theme.color.black; }, function (props) { return props.theme.color.primary; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.padding.sm; }, function (props) {
    return props.size === 'small' && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      height: 20px;\n      padding: 0;\n\n      span {\n        line-height: 18px;\n        font-size: ", ";\n      }\n    "], ["\n      height: 20px;\n      padding: 0;\n\n      span {\n        line-height: 18px;\n        font-size: ", ";\n      }\n    "])), function (props) { return props.theme.font.size.sm; });
}, function (props) {
    return props.size === 'large' && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n      height: ", ";\n      padding: 0;\n\n      span {\n        line-height: 32px;\n        font-size: ", ";\n      }\n    "], ["\n      height: ", ";\n      padding: 0;\n\n      span {\n        line-height: 32px;\n        font-size: ", ";\n      }\n    "])), function (props) { return props.theme.height.md; }, function (props) { return props.theme.font.size.lg; });
});
export var ClearIndicator = styled.div(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  color: ", ";\n\n  i:hover {\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  color: ", ";\n\n  i:hover {\n    color: ", ";\n  }\n\n  ",
    "\n"])), function (props) { return props.theme.width.md; }, function (props) { return lighten(0.6, props.theme.color.black); }, function (props) { return props.theme.color.error; }, function (props) {
    return props.isDisabled && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n      i:hover {\n        color: ", ";\n      }\n    "], ["\n      i:hover {\n        color: ", ";\n      }\n    "])), darken(0.2, props.theme.color.default));
});
export var MultiValueLabel = styled.div(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  padding: 0 ", ";\n"], ["\n  padding: 0 ", ";\n"])), function (props) { return props.theme.padding.sm; });
export var MultiValueRemove = styled.div(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 26px;\n  border-left: 1px solid ", ";\n\n  i {\n    font-size: 10px;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 26px;\n  border-left: 1px solid ", ";\n\n  i {\n    font-size: 10px;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ",
    "\n"])), function (props) { return props.theme.color.primary; }, function (props) { return props.theme.color.error; }, function (props) {
    return props.isDisabled && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n      i:hover {\n        color: ", ";\n      }\n    "], ["\n      i:hover {\n        color: ", ";\n      }\n    "])), darken(0.2, props.theme.color.default));
});
export var NoOptionsMessage = styled.div(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  display: block;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: ", ";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n"], ["\n  display: block;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: ", ";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n"])), function (props) { return props.theme.padding.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.height.md; });
export var CrossIcon = styled.button(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  //\n"], ["\n  //\n"])));
export var Placeholder = styled.div(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return lighten(0.6, props.theme.color.black); });
export var IndicatorsContainer = styled.div(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  align-self: stretch;\n  flex-shrink: 0;\n  min-height: 32px;\n\n  i {\n    font-size: ", ";\n  }\n  \n  ", "\n  \n  ", "\n"], ["\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  align-self: stretch;\n  flex-shrink: 0;\n  min-height: 32px;\n\n  i {\n    font-size: ", ";\n  }\n  \n  ",
    "\n  \n  ",
    "\n"])), function (props) { return props.theme.font.size.md; }, function (props) {
    return props.size === 'small' && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n      min-height: 24px;\n\n      i {\n        font-size: ", ";\n      }\n    "], ["\n      min-height: 24px;\n\n      i {\n        font-size: ", ";\n      }\n    "])), function (props) { return props.theme.font.size.sm; });
}, function (props) {
    return props.size === 'large' && css(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n      min-height: 38px;\n\n      i {\n        font-size: ", ";\n      }\n    "], ["\n      min-height: 38px;\n\n      i {\n        font-size: ", ";\n      }\n    "])), function (props) { return props.theme.font.size.lg; });
});
export var DropdownIndicator = styled.div(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n\n  i:hover {\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n\n  i:hover {\n    color: ", ";\n  }\n\n  ",
    "\n"])), function (props) { return props.theme.width.md; }, function (props) { return props.theme.color.primary; }, function (props) {
    return props.isDisabled && css(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n      i:hover {\n        color: ", ";\n      }\n    "], ["\n      i:hover {\n        color: ", ";\n      }\n    "])), darken(0.2, props.theme.color.default));
});
export var IndicatorSeparator = styled.div(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n  align-self: stretch;\n  background-color: ", ";\n  margin: ", " 0;\n  width: 1px;\n  box-sizing: border-box;\n"], ["\n  align-self: stretch;\n  background-color: ", ";\n  margin: ", " 0;\n  width: 1px;\n  box-sizing: border-box;\n"])), function (props) { return darken(0.1, props.theme.color.default); }, function (props) { return props.theme.margin.sm; });
export var Menu = styled.div(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 2;\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 2;\n"])));
export var MenuList = styled.div(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-top: 0;\n  border-radius: 0 0 ", "\n    ", ";\n  background: ", ";\n  overflow: hidden;\n  outline-offset: -2px;\n  box-shadow: 0 0 0 2px #c3defd;\n"], ["\n  border: 1px solid ", ";\n  border-top: 0;\n  border-radius: 0 0 ", "\n    ", ";\n  background: ", ";\n  overflow: hidden;\n  outline-offset: -2px;\n  box-shadow: 0 0 0 2px #c3defd;\n"])), function (props) { return props.theme.color.primary; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.color.white; });
export var Input = styled.input(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n   {\n    /* todo */\n  }\n"], ["\n   {\n    /* todo */\n  }\n"])));
SelectContainer.defaultProps = {
    theme: theme
};
Control.defaultProps = {
    theme: theme
};
ValueContainer.defaultProps = {
    theme: theme
};
SingleValue.defaultProps = {
    theme: theme
};
MultiValue.defaultProps = {
    theme: theme
};
ClearIndicator.defaultProps = {
    theme: theme
};
MultiValueLabel.defaultProps = {
    theme: theme
};
MultiValueRemove.defaultProps = {
    theme: theme
};
NoOptionsMessage.defaultProps = {
    theme: theme
};
CrossIcon.defaultProps = {
    theme: theme
};
Placeholder.defaultProps = {
    theme: theme
};
IndicatorSeparator.defaultProps = {
    theme: theme
};
IndicatorsContainer.defaultProps = {
    theme: theme
};
DropdownIndicator.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37;
//# sourceMappingURL=Select.style.js.map
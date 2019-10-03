var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
export var StyledTextAreaWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n\n  ",
    "\n\n  ",
    "\n"])), function (props) {
    return (props.iconLeft || props.iconRight) && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: inline-block;\n      max-width: 100%;\n\n      ", "\n\n      ", "\n    "], ["\n      display: inline-block;\n      max-width: 100%;\n\n      ",
        "\n\n      ",
        "\n    "])), props.iconLeft && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          textarea {\n            padding-left: 30px;\n          }\n        "], ["\n          textarea {\n            padding-left: 30px;\n          }\n        "]))), props.iconRight && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          textarea {\n            padding-right: 30px;\n          }\n        "], ["\n          textarea {\n            padding-right: 30px;\n          }\n        "]))));
}, function (props) {
    return !props.isDisabled && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      :hover {\n        i {\n          color: ", ";\n        }\n        textarea {\n          border-color: ", ";\n        }\n      }\n    "], ["\n      :hover {\n        i {\n          color: ", ";\n        }\n        textarea {\n          border-color: ", ";\n        }\n      }\n    "])), props.theme.color.primary, props.theme.color.primary);
});
export var StyledTextArea = styled.textarea(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-family: ", ";\n  padding: ", " ", ";\n  height: auto;\n  min-height: ", ";\n  margin: 0;\n  vertical-align: middle;\n  min-width: 150px;\n  width: 100%;\n  max-width: 100%;\n\n  position: relative;\n  display: inline-block;\n  line-height: 1.5;\n\n  font-size: ", ";\n  font-weight: 400;\n  overflow: auto;\n  user-select: none;\n  -webkit-appearance: textfield;\n  touch-action: manipulation;\n\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  outline: 0;\n  list-style: none;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  border: 1px solid ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  :focus {\n    border-color: ", ";\n    outline-offset: -2px;\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);\n  }\n\n  ", "\n"], ["\n  font-family: ", ";\n  padding: ", " ", ";\n  height: auto;\n  min-height: ", ";\n  margin: 0;\n  vertical-align: middle;\n  min-width: 150px;\n  width: 100%;\n  max-width: 100%;\n\n  position: relative;\n  display: inline-block;\n  line-height: 1.5;\n\n  font-size: ", ";\n  font-weight: 400;\n  overflow: auto;\n  user-select: none;\n  -webkit-appearance: textfield;\n  touch-action: manipulation;\n\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  outline: 0;\n  list-style: none;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  border: 1px solid ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  :focus {\n    border-color: ", ";\n    outline-offset: -2px;\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);\n  }\n\n  ",
    "\n"])), function (props) { return props.theme.font.family; }, function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.padding.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.color.white; }, function (props) { return props.theme.color.black; }, function (props) { return props.theme.radius; }, function (props) { return darken(0.1, props.theme.color.default); }, function () { return lighten(0.6, "black"); }, function (props) { return props.theme.color.primary; }, function (props) {
    return props.disabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      color: ", ";\n      ::placeholder {\n        color: ", ";\n      }\n\n      background-color: ", ";\n      cursor: not-allowed;\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "], ["\n      color: ", ";\n      ::placeholder {\n        color: ", ";\n      }\n\n      background-color: ", ";\n      cursor: not-allowed;\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "])), darken(0.2, props.theme.color.default), darken(0.2, props.theme.color.default), props.theme.color.default, darken(0.1, props.theme.color.default));
});
export var StyledTextAreaIcon = styled.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  bottom: 10px;\n  display: flex;\n  line-height: inherit;\n  height: auto;\n  color: #777777;\n\n  ", "\n\n  ", "\n"], ["\n  bottom: 10px;\n  display: flex;\n  line-height: inherit;\n  height: auto;\n  color: #777777;\n\n  ",
    "\n\n  ",
    "\n"])), function (props) {
    return props.iconLeft && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      position: absolute;\n      top: 5px;\n      left: 10px;\n      align-items: flex-start;\n    "], ["\n      position: absolute;\n      top: 5px;\n      left: 10px;\n      align-items: flex-start;\n    "])));
}, function (props) {
    return props.iconRight && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      position: absolute;\n      align-items: flex-end;\n      right: 10px;\n    "], ["\n      position: absolute;\n      align-items: flex-end;\n      right: 10px;\n    "])));
});
StyledTextAreaWrapper.defaultProps = {
    theme: theme
};
StyledTextAreaIcon.defaultProps = {
    theme: theme
};
StyledTextArea.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=TextArea.style.js.map
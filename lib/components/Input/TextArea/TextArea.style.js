var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
export var StyledTextAreaWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n\n  ",
    "\n\n  ",
    "\n"])), function (props) {
    return (props.iconLeft || props.iconRight) && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      display: inline-block;\n      max-width: 100%;\n\n      ", "\n\n      ", "\n    "], ["\n      display: inline-block;\n      max-width: 100%;\n\n      ",
        "\n\n      ",
        "\n    "])), props.iconLeft && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          textarea {\n            padding-left: 30px;\n          }\n        "], ["\n          textarea {\n            padding-left: 30px;\n          }\n        "]))), props.iconRight && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          textarea {\n            padding-right: 30px;\n          }\n        "], ["\n          textarea {\n            padding-right: 30px;\n          }\n        "]))));
}, function (props) {
    return !props.isDisabled && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      :hover {\n        i {\n          color: ", ";\n        }\n        textarea {\n          border-color: ", ";\n        }\n      }\n    "], ["\n      :hover {\n        i {\n          color: ", ";\n        }\n        textarea {\n          border-color: ", ";\n        }\n      }\n    "])), props.theme.color.primary.alpha, props.theme.color.primary.alpha);
});
export var StyledTextArea = styled.textarea(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  min-width: 150px;\n  user-select: text;\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  min-height: ", ";\n  padding: ", " ", ";\n  margin: 0;\n\n  vertical-align: middle;\n  line-height: 1.5;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  overflow: auto;\n  -webkit-appearance: none;\n  touch-action: manipulation;\n\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  outline: 0;\n  list-style: none;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  :focus {\n    border-color: ", ";\n    outline-offset: -2px;\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);\n  }\n\n  ", "\n"], ["\n  position: relative;\n  display: inline-block;\n  min-width: 150px;\n  user-select: text;\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  min-height: ", ";\n  padding: ", " ", ";\n  margin: 0;\n\n  vertical-align: middle;\n  line-height: 1.5;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  overflow: auto;\n  -webkit-appearance: none;\n  touch-action: manipulation;\n\n  background-color: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  outline: 0;\n  list-style: none;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  :focus {\n    border-color: ", ";\n    outline-offset: -2px;\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.3);\n  }\n\n  ",
    "\n"])), function (props) { return props.theme.height.md; }, function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.padding.md; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.color.background.alpha; }, function (props) { return props.theme.color.black; }, function (props) { return props.theme.color.border; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.primary.alpha; }, function (props) {
    return props.disabled && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      color: ", ";\n\n      ::placeholder {\n        color: ", ";\n      }\n\n      background-color: ", ";\n      cursor: not-allowed;\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "], ["\n      color: ", ";\n\n      ::placeholder {\n        color: ", ";\n      }\n\n      background-color: ", ";\n      cursor: not-allowed;\n      outline: 0;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n        box-shadow: none;\n        border: 1px solid ", ";\n      }\n    "])), props.theme.color.text.beta, props.theme.color.text.beta, props.theme.color.default, props.theme.color.border);
});
export var StyledTextAreaIcon = styled.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  bottom: 10px;\n  height: auto;\n  line-height: inherit;\n  color: ", ";\n\n  i {\n    color: ", ";\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  bottom: 10px;\n  height: auto;\n  line-height: inherit;\n  color: ", ";\n\n  i {\n    color: ", ";\n  }\n\n  ",
    "\n\n  ",
    "\n"])), function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.text.beta; }, function (props) {
    return props.iconLeft && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      position: absolute;\n      align-items: flex-start;\n      top: 9px;\n      left: 10px;\n    "], ["\n      position: absolute;\n      align-items: flex-start;\n      top: 9px;\n      left: 10px;\n    "])));
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
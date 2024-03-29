var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { StyledIcon } from '../../Icon/Icon.style';
import { StyledText } from '../../Typography/Text/Text.style';
export var StyledTab = styled.label(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  user-select: none;\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  margin: 0;\n  padding: ", " ", ";\n  border-radius: ", " ", " 0 0;\n  box-sizing: border-box;\n\n  cursor: pointer;\n  text-decoration: none;\n  \n   -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n   transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  \n    ", ",", " {\n        color: ", ";\n        font-size: ", ";\n        \n        -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n\n  ", " {\n    padding-right: ", ";\n  }\n\n  ", "\n  \n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  color: ", ";\n  user-select: none;\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  margin: 0;\n  padding: ", " ",
    ";\n  border-radius: ", " ",
    " 0 0;\n  box-sizing: border-box;\n\n  cursor: pointer;\n  text-decoration: none;\n  \n   -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n   transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  \n    ", ",", " {\n        color: ", ";\n        font-size: ", ";\n        \n        -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n        transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n\n  ", " {\n    padding-right: ", ";\n  }\n\n  ",
    "\n  \n  ",
    "\n\n  ",
    "\n\n  ",
    "\n"])), function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.padding.md; }, function (props) {
    return props.theme.padding.lg;
}, function (props) { return props.theme.radius; }, function (props) {
    return props.theme.radius;
}, StyledText, StyledIcon, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.font.size.md; }, StyledIcon, function (props) { return props.theme.padding.sm; }, function (props) {
    return props.isActive && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      :before {\n        content: '';\n        position: absolute;\n        width: 100%;\n        top: -1px;\n        left: 0;\n        right: 0;\n\n        border-top: 2px solid transparent;\n        border-radius: ", " ", " 0 0;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n        pointer-events: none;\n      }\n      \n      color: ", ";\n      \n      ", ",", " {\n        color: ", ";\n      }\n\n      :after {\n        content: '';\n        position: absolute;\n        height: 3px;\n        bottom: -2px;\n        left: 0;\n        right: 0;\n      }\n    "], ["\n      :before {\n        content: '';\n        position: absolute;\n        width: 100%;\n        top: -1px;\n        left: 0;\n        right: 0;\n\n        border-top: 2px solid transparent;\n        border-radius: ", " ",
        " 0 0;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n        pointer-events: none;\n      }\n      \n      color: ", ";\n      \n      ", ",", " {\n        color: ", ";\n      }\n\n      :after {\n        content: '';\n        position: absolute;\n        height: 3px;\n        bottom: -2px;\n        left: 0;\n        right: 0;\n      }\n    "])), function (props) { return props.theme.radius; }, function (props) {
        return props.theme.radius;
    }, props.theme.color.primary.alpha, StyledText, StyledIcon, props.theme.color.primary.alpha);
}, function (props) {
    return !props.isAlternative &&
        props.isActive && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      :after {\n        background: ", ";\n        border-radius: ", ";\n      }\n    "], ["\n      :after {\n        background: ", ";\n        border-radius: ", ";\n      }\n    "])), props.theme.color.primary.alpha, function (props) { return props.theme.radius; });
}, function (props) {
    return props.isAlternative &&
        props.isActive && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      border-color: ", ";\n      border-style: solid;\n      border-width: 1px 1px 0 1px;\n      background: ", ";\n      :after {\n        background: ", ";\n        border-radius: 0;\n      }\n    "], ["\n      border-color: ", ";\n      border-style: solid;\n      border-width: 1px 1px 0 1px;\n      background: ", ";\n      :after {\n        background: ", ";\n        border-radius: 0;\n      }\n    "])), props.theme.color.border, props.theme.color.background.alpha, function (props) { return props.theme.color.background.alpha; });
}, function (props) {
    return props.isDisabled
        ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          color: ", ";\n          opacity: .5;\n          transition: none;\n          cursor: not-allowed;\n          \n          ", ",", " {\n            color: ", ";\n            opacity: .5;\n          }\n        "], ["\n          color: ", ";\n          opacity: .5;\n          transition: none;\n          cursor: not-allowed;\n          \n          ", ",", " {\n            color: ", ";\n            opacity: .5;\n          }\n        "])), props.theme.color.text.beta, StyledText, StyledIcon, props.theme.color.text.beta) : css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          :hover {\n            color: ", ";\n            \n            ", ",", " {\n              color: ", ";\n            }\n          }\n        "], ["\n          :hover {\n            color: ", ";\n            \n            ", ",", " {\n              color: ", ";\n            }\n          }\n        "])), function (props) { return props.theme.color.primary.alpha; }, StyledText, StyledIcon, function (props) { return props.theme.color.primary.alpha; });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Tab.style.js.map
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../../../theme';
export var StyledOption = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: ", ";\n  background-color: ", ";\n  color: ", ";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n\n  &:nth-child(odd) {\n    background-color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  span {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  display: block;\n  padding: 0 ", ";\n  height: ", ";\n  line-height: ", ";\n  background-color: ", ";\n  color: ", ";\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n\n  &:nth-child(odd) {\n    background-color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  span {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  ",
    "\n\n  ",
    "\n"])), function (props) { return props.theme.padding.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.color.background.alpha; }, function (props) { return props.theme.color.text.alpha; }, function (props) { return props.theme.color.background.gamma; }, function (props) { return props.theme.color.background.beta; }, function (props) {
    return props.size === 'small' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      height: ", ";\n      line-height: ", ";\n\n      span {\n        font-size: ", ";\n      }\n    "], ["\n      height: ", ";\n      line-height: ", ";\n\n      span {\n        font-size: ", ";\n      }\n    "])), function (props) { return props.theme.height.sm; }, function (props) { return props.theme.height.sm; }, function (props) { return props.theme.font.size.sm; });
}, function (props) {
    return props.size === 'large' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      height: ", ";\n      line-height: ", ";\n\n      span {\n        font-size: ", ";\n      }\n    "], ["\n      height: ", ";\n      line-height: ", ";\n\n      span {\n        font-size: ", ";\n      }\n    "])), function (props) { return props.theme.height.lg; }, function (props) { return props.theme.height.lg; }, function (props) { return props.theme.font.size.lg; });
});
StyledOption.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Option.style.js.map
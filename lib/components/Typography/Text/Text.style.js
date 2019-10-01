var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
export var getDefaultStyledText = function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: ", ";\n  line-height: 1.5;\n  margin: ", " 0;\n\n  button,\n  input[type='text'],\n  input[type='number'],\n  input[type='email'] {\n    margin: 0 ", ";\n  }\n\n  ::selection,\n  ::-moz-selection {\n    background: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-family: ", ";\n  line-height: 1.5;\n  margin: ", " 0;\n\n  button,\n  input[type='text'],\n  input[type='number'],\n  input[type='email'] {\n    margin: 0 ", ";\n  }\n\n  ::selection,\n  ::-moz-selection {\n    background: ", ";\n  }\n"])), props.theme.font.size.md, props.theme.font.family, props.theme.margin.sm, props.theme.margin.sm, lighten(0.4, props.theme.color.primary)); };
export var StyledText = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  ", ";\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n"])), function (props) { return getDefaultStyledText(props); }, function (props) {
    return props.type === 'primary' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.primary);
}, function (props) {
    return props.type === 'success' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.success);
}, function (props) {
    return props.type === 'warning' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.warning);
}, function (props) {
    return props.type === 'error' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.error);
});
export var StyledStrongText = styled.strong(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", ";\n\n  font-weight: 600;\n  \n    ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  ", ";\n\n  font-weight: 600;\n  \n    ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n"])), function (props) { return getDefaultStyledText(props); }, function (props) {
    return props.type === 'primary' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        color: ", ";\n      "], ["\n        color: ", ";\n      "])), props.theme.color.primary);
}, function (props) {
    return props.type === 'success' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.success);
}, function (props) {
    return props.type === 'warning' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.warning);
}, function (props) {
    return props.type === 'error' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.error);
});
export var StyledMarkText = styled.mark(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", ";\n  padding: 0 ", ";\n  background-color: ", ";\n"], ["\n  ", ";\n  padding: 0 ", ";\n  background-color: ", ";\n"])), function (props) { return getDefaultStyledText(props); }, function (props) { return props.theme.padding.xs; }, lighten(0.3, "orange"));
export var StyledCodeText = styled.code(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", ";\n  margin: 0 ", ";\n  padding: ", " ", ";\n\n  font-size: 12px;\n  background: ", ";\n  border: 1px solid ", "\n  border-radius: ", "px;\n"], ["\n  ", ";\n  margin: 0 ", ";\n  padding: ", " ",
    ";\n\n  font-size: 12px;\n  background: ", ";\n  border: 1px solid ", "\n  border-radius: ", "px;\n"])), function (props) { return getDefaultStyledText(props); }, function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.padding.xs; }, function (props) {
    return props.theme.padding.md;
}, function (props) { return props.theme.color.default; }, function (props) { return darken(0.1, props.theme.color.default); }, function (props) { return parseInt(props.theme.radius, 0) - 2; });
export var StyledInsText = styled.ins(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", ";\n  padding: 0 ", ";\n  background-color: ", ";\n"], ["\n  ", ";\n  padding: 0 ", ";\n  background-color: ", ";\n"])), function (props) { return getDefaultStyledText(props); }, function (props) { return props.theme.padding.xs; }, function (props) { return lighten(0.5, props.theme.color.success); });
export var StyledDelText = styled.del(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  ", ";\n  padding: 0 ", ";\n  background-color: ", ";\n"], ["\n  ", ";\n  padding: 0 ", ";\n  background-color: ", ";\n"])), function (props) { return getDefaultStyledText(props); }, function (props) { return props.theme.padding.xs; }, function (props) { return lighten(0.4, props.theme.color.error); });
StyledText.defaultProps = {
    theme: theme
};
StyledStrongText.defaultProps = {
    theme: theme
};
StyledMarkText.defaultProps = {
    theme: theme
};
StyledCodeText.defaultProps = {
    theme: theme
};
StyledInsText.defaultProps = {
    theme: theme
};
StyledDelText.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=Text.style.js.map
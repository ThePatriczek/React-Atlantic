var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
export var getDefaultStyledText = function (props) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: ", ";\n  line-height: 1.5;\n  margin: ", " 0;\n\n  button,\n  input[type='text'],\n  input[type='number'],\n  input[type='email'] {\n    margin: 0 ", ";\n  }\n\n  /* TODO: rewrite to css in js */\n  &.upper {\n    text-transform: uppercase;\n  }\n\n  &.subtitle {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n\n  &.primary {\n    color: ", ";\n  }\n\n  &.success {\n    color: ", ";\n  }\n\n  &.warning {\n    color: ", ";\n  }\n\n  &.error {\n    color: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-family: ", ";\n  line-height: 1.5;\n  margin: ", " 0;\n\n  button,\n  input[type='text'],\n  input[type='number'],\n  input[type='email'] {\n    margin: 0 ", ";\n  }\n\n  /* TODO: rewrite to css in js */\n  &.upper {\n    text-transform: uppercase;\n  }\n\n  &.subtitle {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n\n  &.primary {\n    color: ", ";\n  }\n\n  &.success {\n    color: ", ";\n  }\n\n  &.warning {\n    color: ", ";\n  }\n\n  &.error {\n    color: ", ";\n  }\n"])), props.theme.font.size.md, props.theme.font.family, props.theme.margin.sm, props.theme.margin.sm, props.theme.color.primary, props.theme.color.success, props.theme.color.warning, props.theme.color.error); };
export var StyledText = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (props) { return getDefaultStyledText(props); });
export var StyledStrongText = styled.strong(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n\n  font-weight: 600;\n"], ["\n  ", ";\n\n  font-weight: 600;\n"])), function (props) { return getDefaultStyledText(props); });
StyledText.defaultProps = {
    theme: theme
};
StyledStrongText.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Text.style.js.map
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
export var StyledIndicator = styled.sup(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: block;\n  background-color: ", ";\n  \n  ", "\n    \n  ", "\n    \n  ", "\n    \n  ", "\n  \n  ", "\n    \n  ", "\n    \n  ", "\n"], ["\n  display: block;\n  background-color: ", ";\n  \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n  \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n"])), function (props) { return props.theme.color.default; }, function (props) {
    return props.type === 'primary' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.primary.alpha);
}, function (props) {
    return props.type === 'success' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.success.alpha);
}, function (props) {
    return props.type === 'warning' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.warning.alpha);
}, function (props) {
    return props.type === 'error' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.error.alpha);
}, function (props) {
    return props.size === 'small' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    "], ["\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    "])), props.theme.padding.sm, props.theme.padding.sm, props.theme.padding.sm);
}, function (props) {
    return props.size === 'medium' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    "], ["\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    "])), props.theme.padding.md, props.theme.padding.md, props.theme.padding.md);
}, function (props) {
    return props.size === 'large' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    "], ["\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    "])), props.theme.padding.lg, props.theme.padding.lg, props.theme.padding.lg);
});
export var StyledBadge = styled.sup(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: inline-block;\n  text-align: center;\n  color: ", ";\n  font-family: ", ";\n  font-weight: 400;\n  background-color: ", ";\n  border-radius: ", ";\n  \n  ", "\n    \n  ", "\n    \n  ", "\n    \n  ", "\n\n  ", "\n  \n    ", "\n    \n      ", "\n"], ["\n  display: inline-block;\n  text-align: center;\n  color: ", ";\n  font-family: ", ";\n  font-weight: 400;\n  background-color: ", ";\n  border-radius: ", ";\n  \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n    \n  ",
    "\n\n  ",
    "\n  \n    ",
    "\n    \n      ",
    "\n"])), function (props) { return props.theme.color.text.alpha; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.color.default; }, function (props) { return props.theme.radius; }, function (props) {
    return props.type === 'primary' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), props.theme.color.primary.alpha, props.theme.color.text.gamma);
}, function (props) {
    return props.type === 'success' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), props.theme.color.success.alpha, props.theme.color.text.gamma);
}, function (props) {
    return props.type === 'warning' && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), props.theme.color.warning.alpha, props.theme.color.text.gamma);
}, function (props) {
    return props.type === 'error' && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), props.theme.color.error.alpha, props.theme.color.text.gamma);
}, function (props) {
    return props.size === 'small' && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      padding: 2px ", ";\n\n      font-size: ", ";\n    "], ["\n      padding: 2px ", ";\n\n      font-size: ", ";\n    "])), props.theme.padding.sm, props.theme.font.size.sm);
}, function (props) {
    return props.size === 'medium' && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n        padding: ", "\n          ", "px;\n        font-size: ", ";\n      "], ["\n        padding: ", "\n          ", "px;\n        font-size: ", ";\n      "])), props.theme.padding.sm, parseInt(props.theme.padding.md, 0) - 2, props.theme.font.size.md);
}, function (props) {
    return props.size === 'large' && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n          padding: ", "\n            ", "px;\n          font-size: ", ";\n        "], ["\n          padding: ", "\n            ", "px;\n          font-size: ", ";\n        "])), props.theme.padding.md, parseInt(props.theme.padding.lg, 0) - 2, props.theme.font.size.lg);
});
StyledIndicator.defaultProps = {
    theme: theme
};
StyledBadge.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=Badge.style.js.map
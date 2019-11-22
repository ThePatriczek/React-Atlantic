var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
export var StyledIndicator = styled.sup(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  ", "\n    ", "\n    \n      ", "\n  \n  \n  background: ", ";\n"], ["\n  display: block;\n  ",
    "\n    ",
    "\n    \n      ",
    "\n  \n  \n  background: ",
    ";\n"])), function (props) {
    return props.size === 'small' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    "], ["\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n    "])), props.theme.padding.sm, props.theme.padding.sm, props.theme.padding.sm);
}, function (props) {
    return props.size === 'medium' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: ", ";\n        height: ", ";\n        border-radius: ", ";\n      "], ["\n        width: ", ";\n        height: ", ";\n        border-radius: ", ";\n      "])), props.theme.padding.md, props.theme.padding.md, props.theme.padding.md);
}, function (props) {
    return props.size === 'large' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          width: ", ";\n          height: ", ";\n          border-radius: ", ";\n        "], ["\n          width: ", ";\n          height: ", ";\n          border-radius: ", ";\n        "])), props.theme.padding.lg, props.theme.padding.lg, props.theme.padding.lg);
}, function (props) {
    return props.type === 'default'
        ? props.theme.color.primary
        : props.theme.color[props.type];
});
export var StyledBadge = styled.sup(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: inline-block;\n  text-align: center;\n  color: ", ";\n  font-family: ", ";\n  font-weight: 400;\n  background: ", ";\n  border-radius: ", ";\n\n  ", "\n  \n    ", "\n    \n      ", "\n"], ["\n  display: inline-block;\n  text-align: center;\n  color: ", ";\n  font-family: ", ";\n  font-weight: 400;\n  background: ",
    ";\n  border-radius: ", ";\n\n  ",
    "\n  \n    ",
    "\n    \n      ",
    "\n"])), function (props) { return props.theme.color.white; }, function (props) { return props.theme.font.family; }, function (props) {
    return props.type === 'default'
        ? props.theme.color.primary
        : props.theme.color[props.type];
}, function (props) { return props.theme.radius; }, function (props) {
    return props.size === 'small' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      padding: 2px ", ";\n\n      font-size: ", ";\n    "], ["\n      padding: 2px ", ";\n\n      font-size: ", ";\n    "])), props.theme.padding.sm, props.theme.font.size.sm);
}, function (props) {
    return props.size === 'medium' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        padding: ", "\n          ", "px;\n        font-size: ", ";\n      "], ["\n        padding: ", "\n          ", "px;\n        font-size: ", ";\n      "])), props.theme.padding.sm, parseInt(props.theme.padding.md, 0) - 2, props.theme.font.size.md);
}, function (props) {
    return props.size === 'large' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          padding: ", "\n            ", "px;\n          font-size: ", ";\n        "], ["\n          padding: ", "\n            ", "px;\n          font-size: ", ";\n        "])), props.theme.padding.md, parseInt(props.theme.padding.lg, 0) - 2, props.theme.font.size.lg);
});
StyledIndicator.defaultProps = {
    theme: theme
};
StyledBadge.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=Badge.style.js.map
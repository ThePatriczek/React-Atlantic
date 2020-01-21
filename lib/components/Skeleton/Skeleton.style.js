var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
var sizeFactory = function (size, theme) {
    switch (size) {
        case 'small':
            return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        height: ", ";\n      "], ["\n        height: ", ";\n      "])), theme.height.sm);
        case 'medium':
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        height: ", ";\n      "], ["\n        height: ", ";\n      "])), theme.height.md);
        case 'large':
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        height: ", ";\n      "], ["\n        height: ", ";\n      "])), theme.width.lg);
    }
};
var parseWidth = function (width) {
    return typeof width === 'string'
        ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: ", ";\n      "], ["\n        width: ", ";\n      "])), width) : css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: ", "px;\n      "], ["\n        width: ", "px;\n      "])), width);
};
export var StyledSkeleton = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  margin: ", " 0px;\n  border-radius: 4px;\n\n  background: -webkit-gradient(\n    linear,\n    left top,\n    right top,\n    color-stop(25%, ", "),\n    color-stop(37%, ", "),\n    color-stop(63%, ", ")\n  );\n  background: linear-gradient(\n    90deg,\n    ", " 25%,\n    ", " 37%,\n    ", " 63%\n  );\n  background-size: 400% 100%;\n  -webkit-animation: shine 1.6s ease infinite;\n  animation: shine 1.6s ease infinite;\n\n  @keyframes shine {\n    0% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0 50%;\n    }\n  }\n  \n  width: 100%;\n  height: 100%;\n  \n  ", "\n  \n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  margin: ", " 0px;\n  border-radius: 4px;\n\n  background: -webkit-gradient(\n    linear,\n    left top,\n    right top,\n    color-stop(25%, ",
    "),\n    color-stop(37%, ",
    "),\n    color-stop(63%, ",
    ")\n  );\n  background: linear-gradient(\n    90deg,\n    ",
    " 25%,\n    ",
    " 37%,\n    ",
    " 63%\n  );\n  background-size: 400% 100%;\n  -webkit-animation: shine 1.6s ease infinite;\n  animation: shine 1.6s ease infinite;\n\n  @keyframes shine {\n    0% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0 50%;\n    }\n  }\n  \n  width: 100%;\n  height: 100%;\n  \n  ", "\n  \n  ", "\n  \n  ",
    "\n  \n  ",
    "\n"])), function (props) { return props.bgColor || props.theme.color.default; }, function (props) { return props.theme.margin.sm; }, function (props) {
    return props.animationColors
        ? props.animationColors.alpha
        : props.theme.color.background.beta;
}, function (props) {
    return props.animationColors
        ? props.animationColors.beta
        : props.theme.color.border;
}, function (props) {
    return props.animationColors
        ? props.animationColors.gamma
        : props.theme.color.background.beta;
}, function (props) {
    return props.animationColors
        ? props.animationColors.alpha
        : props.theme.color.background.beta;
}, function (props) {
    return props.animationColors
        ? props.animationColors.beta
        : props.theme.color.border;
}, function (props) {
    return props.animationColors
        ? props.animationColors.gamma
        : props.theme.color.background.beta;
}, function (props) { return props.size && sizeFactory(props.size, props.theme); }, function (props) { return props.width && parseWidth(props.width); }, function (props) {
    return props.height && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      height: ", "px;\n    "], ["\n      height: ", "px;\n    "])), props.height);
}, function (props) {
    return props.shape === "circle" && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border-radius: 100%;\n    "], ["\n      border-radius: 100%;\n    "])));
});
StyledSkeleton.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=Skeleton.style.js.map
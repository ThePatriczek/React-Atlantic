var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { StyledTreeShared } from './TreeShared.style';
import { listGapSizeLg, listGapSizeMd, listGapSizeSm } from './variables';
export var StyledTreeAlt = styled(StyledTreeShared)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  \n  ", "\n  \n  ", "\n"], ["\n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n"])), function (props) {
    return props.size === 'small' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      & & {\n        &:before {\n          top: ", ";\n          bottom: ", "px;\n          left: ", "px;\n        }\n      }\n    "], ["\n      & & {\n        &:before {\n          top: ", ";\n          bottom: ", "px;\n          left: ", "px;\n        }\n      }\n    "])), function (props) { return props.theme.height.sm; }, function (props) { return parseFloat(props.theme.height.sm) / 2; }, parseFloat(listGapSizeSm) / 2);
}, function (props) {
    return props.size === 'medium' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      & & {\n        &:before {\n          top: ", ";\n          bottom: ", "px;\n          left: ", "px;\n        }\n      }\n    "], ["\n      & & {\n        &:before {\n          top: ", ";\n          bottom: ", "px;\n          left: ", "px;\n        }\n      }\n    "])), function (props) { return props.theme.height.md; }, parseFloat(props.theme.height.md) / 2, parseFloat(listGapSizeMd) / 2);
}, function (props) {
    return props.size === 'large' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      & & {\n        &:before {\n          top: ", ";\n          bottom: ", "px;\n          left: ", "px;\n        }\n      }\n    "], ["\n      & & {\n        &:before {\n          top: ", ";\n          bottom: ", "px;\n          left: ", "px;\n        }\n      }\n    "])), function (props) { return props.theme.height.lg; }, parseFloat(props.theme.height.lg) / 2, parseFloat(listGapSizeLg) / 2);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TreeAlt.style.js.map
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { StyledTreeAlt } from '../../style';
import { listGapSizeLg, listGapSizeMd, listGapSizeSm } from '../../style/variables';
import { StyledTreeButtonShared, StyledTreeIconShared, StyledTreeNodeContentShared, StyledTreeNodeShared } from './NodeShared.styled';
import { contentLeftGap } from './variables';
export var StyledTreeIconAlt = styled(StyledTreeIconShared)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var StyledTreeButtonAlt = styled(StyledTreeButtonShared)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
export var StyledTreeNodeContentAlt = styled(StyledTreeNodeContentShared)(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
export var StyledTreeNodeAlt = styled(StyledTreeNodeShared)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", " ", " & {\n    &:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      bottom: 2px;\n\n      border-left: 1px dashed ", ";\n      \n      ", "\n      \n      ", "\n      \n      ", "\n    }\n\n    &:after {\n      content: '';\n      position: absolute;\n\n      border-bottom: 1px dashed ", ";\n    }\n  }\n\n  ", "\n  \n  ", "\n  \n  ", "\n  \n  &:last-child > ", " > &:last-child {\n    &:before {\n      bottom: auto;\n      \n      ", "\n      \n      ", "\n      \n      ", "\n    }\n  }\n"], ["\n  ", " ", " & {\n    &:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      bottom: 2px;\n\n      border-left: 1px dashed ", ";\n      \n      ",
    "\n      \n      ",
    "\n      \n      ",
    "\n    }\n\n    &:after {\n      content: '';\n      position: absolute;\n\n      border-bottom: 1px dashed ", ";\n    }\n  }\n\n  ",
    "\n  \n  ",
    "\n  \n  ",
    "\n  \n  &:last-child > ", " > &:last-child {\n    &:before {\n      bottom: auto;\n      \n      ",
    "\n      \n      ",
    "\n      \n      ",
    "\n    }\n  }\n"])), StyledTreeAlt, StyledTreeAlt, function (props) { return props.theme.color.border; }, function (props) {
    return props.size === 'small' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          left: -", "px;\n        "], ["\n          left: -", "px;\n        "])), (parseFloat(listGapSizeSm) - parseFloat(contentLeftGap)) / 2);
}, function (props) {
    return props.size === 'medium' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          left: -", "px;\n        "], ["\n          left: -", "px;\n        "])), (parseFloat(listGapSizeMd) - parseFloat(contentLeftGap)) / 2);
}, function (props) {
    return props.size === 'large' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n          left: -", "px;\n        "], ["\n          left: -", "px;\n        "])), (parseFloat(listGapSizeLg) - parseFloat(contentLeftGap)) / 2);
}, function (props) { return props.theme.color.border; }, function (props) {
    return props.size === 'small' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      ", " ", " & {\n        &:after {\n          width: ", "px;\n          left: -", "px;\n          top: ", "px;\n        }\n      }\n    "], ["\n      ", " ", " & {\n        &:after {\n          width: ", "px;\n          left: -", "px;\n          top: ", "px;\n        }\n      }\n    "])), StyledTreeAlt, StyledTreeAlt, (parseFloat(listGapSizeSm) - parseFloat(contentLeftGap)) / 2, (parseFloat(listGapSizeSm) - parseFloat(contentLeftGap)) / 2, function (props) { return parseFloat(props.theme.height.sm) / 2; });
}, function (props) {
    return props.size === 'medium' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      ", " ", " & {\n        &:after {\n          width: ", "px;\n          left: -", "px;\n          top: ", "px;\n        }\n      }\n    "], ["\n      ", " ", " & {\n        &:after {\n          width: ", "px;\n          left: -", "px;\n          top: ", "px;\n        }\n      }\n    "])), StyledTreeAlt, StyledTreeAlt, (parseFloat(listGapSizeMd) - parseFloat(contentLeftGap)) / 2, (parseFloat(listGapSizeMd) - parseFloat(contentLeftGap)) / 2, function (props) { return parseFloat(props.theme.height.md) / 2; });
}, function (props) {
    return props.size === 'large' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      ", " ", " & {\n        &:after {\n          width: ", "px;\n          left: -", "px;\n          top: ", "px;\n        }\n      }\n    "], ["\n      ", " ", " & {\n        &:after {\n          width: ", "px;\n          left: -", "px;\n          top: ", "px;\n        }\n      }\n    "])), StyledTreeAlt, StyledTreeAlt, (parseFloat(listGapSizeLg) - parseFloat(contentLeftGap)) / 2, (parseFloat(listGapSizeLg) - parseFloat(contentLeftGap)) / 2, function (props) { return parseFloat(props.theme.height.lg) / 2; });
}, StyledTreeAlt, function (props) {
    return props.size === 'small' && css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), function (props) { return parseFloat(props.theme.height.sm) / 2; });
}, function (props) {
    return props.size === 'medium' && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), function (props) { return parseFloat(props.theme.height.md) / 2; });
}, function (props) {
    return props.size === 'large' && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n          height: ", "px;\n        "], ["\n          height: ", "px;\n        "])), function (props) { return parseFloat(props.theme.height.lg) / 2; });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=NodeAlt.style.js.map
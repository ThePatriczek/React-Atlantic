var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { StyledSkeleton } from '../../Skeleton/Skeleton.style';
import { StyledTitle5 } from '../../Typography/Title/Title.style';
export var StyledColumn = styled.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n\n  border: 1px solid ", ";\n\n  ", " {\n    margin-top: 0;\n  }\n"], ["\n  padding: ", ";\n\n  border: 1px solid ", ";\n\n  ", " {\n    margin-top: 0;\n  }\n"])), function (props) { return props.theme.padding.md; }, function (props) { return props.theme.color.border; }, StyledTitle5);
export var StyledColumnHeader = styled.th(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  padding: ", ";\n\n  background-color: ", ";\n\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 1px 0 1px;\n\n  font-weight: bolder;\n  white-space: nowrap;\n  z-index: 1;\n\n  ", "\n  \n    ", "\n\n  ", " {\n    margin: 0;\n  }\n\n  :after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -1px;\n    width: 100%;\n\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  position: sticky;\n  top: 0;\n  padding: ", ";\n\n  background-color: ", ";\n\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 1px 0 1px;\n\n  font-weight: bolder;\n  white-space: nowrap;\n  z-index: 1;\n\n  ",
    "\n  \n    ",
    "\n\n  ", " {\n    margin: 0;\n  }\n\n  :after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: -1px;\n    width: 100%;\n\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) { return props.theme.padding.md; }, function (props) { return props.theme.color.background.beta; }, function (props) { return props.theme.color.border; }, function (props) {
    return props.isClickable && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      cursor: pointer;\n      :hover {\n        * {\n          color: ", ";\n        }\n      }\n    "], ["\n      cursor: pointer;\n      :hover {\n        * {\n          color: ", ";\n        }\n      }\n    "])), props.theme.color.primary.alpha);
}, function (props) {
    return props.isActive && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        * {\n          color: ", ";\n        }\n      "], ["\n        * {\n          color: ", ";\n        }\n      "])), props.theme.color.primary.alpha);
}, StyledSkeleton, function (props) { return props.theme.color.border; });
export var StyledColumnHeaderBox = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Column.style.js.map
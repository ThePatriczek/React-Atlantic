var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { PureButton } from '../../../Button/Pure';
import { Icon } from '../../../Icon/Icon';
import { contentLeftGap } from './variables';
export var StyledTreeIconShared = styled(Icon)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var StyledTreeButtonShared = styled(PureButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-basis: 0;\n\n  && {\n    margin: 0;\n  }\n\n  &:hover {\n    background-color: ", ";\n\n    ", " {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    svg {\n      height: 14px;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-basis: 0;\n\n  && {\n    margin: 0;\n  }\n\n  &:hover {\n    background-color: ", ";\n\n    ", " {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    svg {\n      height: 14px;\n    }\n  }\n"])), function (props) { return props.theme.color.background.beta; }, StyledTreeIconShared, function (props) { return props.theme.color.primary.alpha; }, StyledTreeIconShared);
export var StyledTreeNodeContentShared = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 0 ", ";\n\n  border-radius: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 0 ", ";\n\n  border-radius: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), contentLeftGap, function (props) { return props.theme.radius; }, function (props) { return props.theme.color.default; });
StyledTreeNodeContentShared.displayName = "NodeContent";
export var StyledTreeNodeShared = styled.li(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 100%;\n  margin: 0;\n\n  font-size: ", ";\n  \n  ", " {\n    ", "\n    \n    ", "\n    \n    ", "\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 100%;\n  margin: 0;\n\n  font-size: ", ";\n  \n  ", " {\n    ",
    "\n    \n    ",
    "\n    \n    ",
    "\n  }\n"])), function (props) { return props.theme.font.size.lg; }, StyledTreeNodeContentShared, function (props) {
    return props.size === 'small' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        min-height: ", ";\n      "], ["\n        min-height: ", ";\n      "])), function (props) { return props.theme.height.sm; });
}, function (props) {
    return props.size === 'medium' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        min-height: ", ";\n      "], ["\n        min-height: ", ";\n      "])), function (props) { return props.theme.height.md; });
}, function (props) {
    return props.size === 'large' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        min-height: ", ";\n      "], ["\n        min-height: ", ";\n      "])), function (props) { return props.theme.height.lg; });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=NodeShared.styled.js.map
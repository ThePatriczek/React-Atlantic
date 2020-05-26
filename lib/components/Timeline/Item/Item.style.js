var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { PureButton } from '../../Button/Pure';
import { StyledIcon } from '../../Icon/Icon.style';
import { Link } from '../../Typography/Link';
import { StyledText } from '../../Typography/Text/Text.style';
import { StyledTitle5 } from '../../Typography/Title/Title.style';
var circleSize = "15px";
export var StyledTimelineItem = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: ", "px;\n  padding: ", ";\n  margin-bottom: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: ",
    "px;\n  padding: ", ";\n  margin-bottom: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n\n  ",
    "\n"])), function (props) {
    return parseFloat(props.theme.margin.sm) + parseFloat(circleSize);
}, function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.margin.md; }, function (props) { return props.theme.color.background.alpha; }, function (props) { return props.theme.radius; }, function (props) {
    return props.highlight && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), function (props) { return props.theme.color.default; });
});
export var StyledTimelineSide = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  height: 100%;\n  right: calc(100% + ", ");\n  width: ", ";\n"], ["\n  position: absolute;\n  height: 100%;\n  right: calc(100% + ", ");\n  width: ", ";\n"])), function (props) { return props.theme.margin.sm; }, circleSize);
export var StyledTimelineCircle = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  box-sizing: border-box;\n  width: ", ";\n  height: ", ";\n  cursor: pointer;\n  margin-top: ", ";\n  border-radius: 50%;\n  border: 2px solid ", ";\n  background-color: ", ";\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  box-sizing: border-box;\n  width: ", ";\n  height: ", ";\n  cursor: pointer;\n  margin-top: ", ";\n  border-radius: 50%;\n  border: 2px solid ", ";\n  background-color: ", ";\n\n  ",
    "\n\n  ",
    "\n"])), circleSize, circleSize, function (props) { return props.theme.margin.md; }, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.background.alpha; }, function (props) {
    var _a;
    return props.type && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), (_a = props.theme.color[props.type]) === null || _a === void 0 ? void 0 : _a.alpha);
}, function (props) {
    return props.isActive && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), function (props) { return props.theme.color.primary.alpha; });
});
export var StyledTimelineTitle = styled(Link)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: block;\n  margin: 0;\n  font-weight: 600;\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n\n    ", " {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    margin: 0;\n    color: ", ";\n\n    ", "\n  }\n"], ["\n  display: block;\n  margin: 0;\n  font-weight: 600;\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n\n    ", " {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    margin: 0;\n    color: ", ";\n\n    ",
    "\n  }\n"])), function (props) { return props.theme.color.text.alpha; }, function (props) { return props.theme.color.primary.alpha; }, StyledTitle5, function (props) { return props.theme.color.primary.alpha; }, StyledTitle5, function (props) { return props.theme.color.text.alpha; }, function (props) {
    return props.isActive && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        color: ", ";\n      "], ["\n        color: ", ";\n      "])), function (props) { return props.theme.color.primary.alpha; });
});
export var StyledTimelineCaption = styled(Link)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: block;\n  margin: 0;\n  color: ", ";\n  font-size: ", ";\n\n  ", "\n\n  ", " {\n    color: ", ";\n  }\n"], ["\n  display: block;\n  margin: 0;\n  color: ", ";\n  font-size: ", ";\n\n  ",
    "\n\n  ", " {\n    color: ", ";\n  }\n"])), function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.font.size.sm; }, function (props) {
    return props.hasMarginRight && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      margin-right: ", ";\n    "], ["\n      margin-right: ", ";\n    "])), props.theme.margin.sm);
}, StyledText, function (props) { return props.theme.color.text.beta; });
export var StyledTimelineContainer = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    return props.isMain && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      flex: 1 1 0;\n    "], ["\n      flex: 1 1 0;\n    "])));
});
export var StyledTimelineButton = styled(PureButton)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", " {\n    height: auto;\n  }\n"], ["\n  ", " {\n    height: auto;\n  }\n"])), StyledIcon);
export var StyledTimelineCaptionContainer = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
export var StyledListElementsContainer = styled.ul(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"])));
export var StyledListItem = styled.li(templateObject_16 || (templateObject_16 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=Item.style.js.map
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme } from '../../../theme';
import { Button } from '../../Button';
export var StyledReactDatePickerHeaderContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  padding: ", ";\n  border-radius: ", " ", " 0 0;\n  height: ", ";\n  background-color: ", ";\n  \n  font-size: ", ";\n  font-family: ", ";\n  \n  i{\n    color: ", "; \n  }\n"], ["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n  padding: ", ";\n  border-radius: ", " ", " 0 0;\n  height: ", ";\n  background-color: ", ";\n  \n  font-size: ", ";\n  font-family: ", ";\n  \n  i{\n    color: ", "; \n  }\n"])), function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.color.primary.alpha; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.color.text.gamma; });
export var StyledReactDatePickerButtonMoveMonth = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  margin: 0;\n  \n  &:focus {\n    &:after {\n      content: none;\n    }\n  }\n"], ["\n  width: ", ";\n  margin: 0;\n  \n  &:focus {\n    &:after {\n      content: none;\n    }\n  }\n"])), function (props) { return props.theme.height.md; });
export var StyledReactDatePickerButtonMoveYear = styled(Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  margin: 0;\n  \n  &:focus {\n    &:after {\n      content: none;\n    }\n  }\n"], ["\n  width: ", ";\n  margin: 0;\n  \n  &:focus {\n    &:after {\n      content: none;\n    }\n  }\n"])), function (props) { return props.theme.height.md; });
export var StyledReactDatePickerMonthAndDate = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex: 100%;\n  line-height: ", ";\n  text-align: center;\n  color: ", ";\n"], ["\n  flex: 100%;\n  line-height: ", ";\n  text-align: center;\n  color: ", ";\n"])), function (props) { return props.theme.height.md; }, function (props) { return props.theme.color.text.gamma; });
export var StyledReactDatePickerTriangle = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: -10px;\n  left: 8px;\n  border: 10px solid transparent;\n  border-bottom-color: ", ";\n  border-top: 0;\n"], ["\n  position: absolute;\n  top: -10px;\n  left: 8px;\n  border: 10px solid transparent;\n  border-bottom-color: ", ";\n  border-top: 0;\n"])), function (props) { return props.theme.color.primary.alpha; });
StyledReactDatePickerHeaderContainer.defaultProps = {
    theme: theme
};
StyledReactDatePickerButtonMoveMonth.defaultProps = {
    theme: theme
};
StyledReactDatePickerButtonMoveYear.defaultProps = {
    theme: theme
};
StyledReactDatePickerMonthAndDate.defaultProps = {
    theme: theme
};
StyledReactDatePickerTriangle.defaultProps = {
    theme: theme
};
StyledReactDatePickerHeaderContainer.displayName =
    'StyledReactDatePickerHeaderContainer';
StyledReactDatePickerButtonMoveMonth.displayName =
    'StyledReactDatePickerButtonMoveMonth';
StyledReactDatePickerButtonMoveYear.displayName =
    'StyledReactDatePickerButtonMoveYear';
StyledReactDatePickerMonthAndDate.displayName =
    'StyledReactDatePickerMonthAndDate';
StyledReactDatePickerTriangle.displayName = 'StyledReactDatePickerTriangle';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=DatePickerHeader.style.js.map
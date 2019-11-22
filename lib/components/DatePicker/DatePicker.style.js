var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { lighten } from 'polished';
import ReactDatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Button } from '../Button';
export var StyledReactDatePicker = styled(ReactDatePicker)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var StyledReactDatePickerContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    .react-datepicker__day--selected {\n      background-color: ", ";\n      color: ", ";\n      border: 1px solid ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  "], ["\n    .react-datepicker__day--selected {\n      background-color: ", ";\n      color: ", ";\n      border: 1px solid ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  "])), props.theme.color.success, props.theme.color.white, props.theme.color.success, lighten(0.05, props.theme.color.success)); });
export var StyledReactDatePickerButtonContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
export var StyledReactDatePickerButton = styled(Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n"], ["\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n"])));
StyledReactDatePicker.defaultProps = {
    theme: theme
};
StyledReactDatePickerContainer.defaultProps = {
    theme: theme
};
StyledReactDatePickerButtonContainer.defaultProps = {
    theme: theme
};
StyledReactDatePickerButton.defaultProps = {
    theme: theme
};
StyledReactDatePicker.displayName = 'StyledReactDatePicker';
StyledReactDatePickerContainer.displayName = 'StyledReactDatePickerContainer';
StyledReactDatePickerButtonContainer.displayName =
    'StyledReactDatePickerButtonContainer';
StyledReactDatePickerButton.displayName = 'StyledReactDatePickerButton';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=DatePicker.style.js.map
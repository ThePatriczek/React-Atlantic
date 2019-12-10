var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import ReactDatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Button } from '../Button';
export var StyledReactDatePicker = styled(ReactDatePicker)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var StyledReactDatePickerContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n    \n    .react-datepicker-wrapper{\n      ", ";\n    }\n    \n    .react-datepicker-popper{\n      margin-top: ", ";\n      z-index: 1;\n    }\n    \n    .react-datepicker{\n      width: 250px;\n      font-size: ", ";\n      font-family: ", ";\n      \n      background-color: ", ";\n      border-radius: ", ";\n      box-shadow: ", ";\n      \n      &__day-names,&__week{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 ", ";\n      \n        color: ", ";\n        text-align: center;\n      }\n      \n      &__day,&__day-name{\n        flex: 1;\n        padding: ", " 0;\n        border-radius: ", ";\n        cursor: pointer;\n        \n        &--outside-month{\n          color: ", ";\n        }\n        \n        &--today{\n          background-color: ", ";\n        }\n        \n        &--selected {\n          background-color: ", ";\n          color: ", ";\n          border: 1px solid ", ";\n    \n          &:hover {\n            background-color: ", ";\n          }\n        }\n      }\n      \n      &__day-names{\n        border-bottom: 1px solid ", ";\n        background-color: ", ";\n      }\n    }\n"], ["\n  ",
    ";\n    \n    .react-datepicker-wrapper{\n      ",
    ";\n    }\n    \n    .react-datepicker-popper{\n      margin-top: ", ";\n      z-index: 1;\n    }\n    \n    .react-datepicker{\n      width: 250px;\n      font-size: ", ";\n      font-family: ", ";\n      \n      background-color: ", ";\n      border-radius: ", ";\n      box-shadow: ", ";\n      \n      &__day-names,&__week{\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 0 ", ";\n      \n        color: ", ";\n        text-align: center;\n      }\n      \n      &__day,&__day-name{\n        flex: 1;\n        padding: ", " 0;\n        border-radius: ", ";\n        cursor: pointer;\n        \n        &--outside-month{\n          color: ", ";\n        }\n        \n        &--today{\n          background-color: ", ";\n        }\n        \n        &--selected {\n          background-color: ", ";\n          color: ", ";\n          border: 1px solid ", ";\n    \n          &:hover {\n            background-color: ", ";\n          }\n        }\n      }\n      \n      &__day-names{\n        border-bottom: 1px solid ", ";\n        background-color: ", ";\n      }\n    }\n"])), function (props) {
    return props.isFullWidth && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "])));
}, function (props) {
    return props.isFullWidth && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          width: 100%;\n        "], ["\n          width: 100%;\n        "])));
}, function (props) { return props.theme.margin.md; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.color.background.alpha; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.boxShadow.md; }, function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.color.text.alpha; }, function (props) { return props.theme.padding.md; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.color.text.beta; }, function (props) { return props.theme.color.background.beta; }, function (props) { return props.theme.color.success.alpha; }, function (props) { return props.theme.color.text.gamma; }, function (props) { return props.theme.color.success.alpha; }, function (props) { return props.theme.color.success.beta; }, function (props) { return props.theme.color.border; }, function (props) { return props.theme.color.background.beta; });
export var StyledReactDatePickerButtonContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n"], ["\n  border-top: 1px solid ", ";\n"])), function (props) { return props.theme.color.border; });
export var StyledReactDatePickerButton = styled(Button)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border: 0;\n"], ["\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border: 0;\n"])));
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
StyledReactDatePickerButtonContainer.displayName = 'StyledReactDatePickerButtonContainer';
StyledReactDatePickerButton.displayName = 'StyledReactDatePickerButton';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=DatePicker.style.js.map
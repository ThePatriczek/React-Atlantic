var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { darken } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
export var HiddenCheckbox = styled.input.attrs({
    type: 'checkbox'
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n  margin: 0;\n  position: absolute;\n  z-index: -1;\n"], ["\n  opacity: 0;\n  width: 0;\n  height: 0;\n  margin: 0;\n  position: absolute;\n  z-index: -1;\n"])));
export var StyledCheckboxInputShown = styled.div.attrs({
    className: "atlantic--checkbox"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ", "px;\n  background: white;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ", "px;\n  background: white;\n  border-radius: ", "px;\n  border: 1px solid ", ";\n\n  ",
    "\n"])), function (props) { return parseInt(props.theme.padding.xs, 0) - 1; }, function (props) { return parseInt(props.theme.radius, 0) - 1; }, function (props) { return darken(0.1, props.theme.color.default); }, function (props) {
    return props.isDisabled && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      cursor: not-allowed;\n    "], ["\n      background-color: ", ";\n      cursor: not-allowed;\n    "])), props.theme.color.default);
});
export var StyledCheckboxLabel = styled.label(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: ", ";\n  font-size: 14px;\n  font-family: ", ";\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n\n  ", ";\n\n  ", ";\n"], ["\n  height: ", ";\n  font-size: 14px;\n  font-family: ", ";\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n\n  ",
    ";\n\n  ",
    ";\n"])), function (props) { return props.theme.height.sm; }, function (props) { return props.theme.font.family; }, function (props) {
    return !props.isDisabled && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      :hover {\n        .atlantic--checkbox {\n          border: 1px solid ", ";\n        }\n      }\n    "], ["\n      :hover {\n        .atlantic--checkbox {\n          border: 1px solid ", ";\n        }\n      }\n    "])), props.theme.color.primary);
}, function (props) {
    return props.isDisabled && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      cursor: not-allowed;\n    "], ["\n      cursor: not-allowed;\n    "])));
});
export var StyledCheckboxMark = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: ", ";\n  border-radius: ", "px;\n  \n  i{\n    height: 14px;\n  }\n\n  ", "\n\n  ", "\n  \n    ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: ", ";\n  border-radius: ", "px;\n  \n  i{\n    height: 14px;\n  }\n\n  ",
    "\n\n  ",
    "\n  \n    ",
    "\n"])), function (props) { return props.theme.width.xs; }, function (props) { return props.theme.width.xs; }, function (props) { return parseInt(props.theme.radius, 0) - 2; }, function (props) {
    return (props.isChecked || props.isPartiallyChecked) && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.primary);
}, function (props) {
    return props.isDisabled &&
        (props.isChecked || props.isPartiallyChecked) && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), darken(0.2, props.theme.color.default));
}, function (props) {
    return props.isDisabled && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        color: transparent;\n        cursor: not-allowed;\n      "], ["\n        color: transparent;\n        cursor: not-allowed;\n      "])));
});
export var StyledCheckboxSpan = styled.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  padding: 0 ", ";\n  user-select: none;\n  line-height: 1;\n\n  ", "\n"], ["\n  padding: 0 ", ";\n  user-select: none;\n  line-height: 1;\n\n  ",
    "\n"])), function (props) { return props.theme.padding.md; }, function (props) {
    return props.isDisabled && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      cursor: not-allowed;\n    "], ["\n      cursor: not-allowed;\n    "])));
});
export var StyledCheckboxIcon = styled.i(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  transform: scale(0.8);\n  color: white;\n  ", "\n\n  ", "\n"], ["\n  transform: scale(0.8);\n  color: white;\n  ",
    "\n\n  ",
    "\n"])), function (props) {
    return (props.isPartiallyChecked || (!props.isChecked && props.isDisabled)) && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      color: transparent;\n    "], ["\n      color: transparent;\n    "])));
}, function (props) {
    return props.isDisabled && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      cursor: not-allowed;\n    "], ["\n      cursor: not-allowed;\n    "])));
});
HiddenCheckbox.defaultProps = {
    theme: theme
};
StyledCheckboxInputShown.defaultProps = {
    theme: theme
};
StyledCheckboxLabel.defaultProps = {
    theme: theme
};
StyledCheckboxMark.defaultProps = {
    theme: theme
};
StyledCheckboxSpan.defaultProps = {
    theme: theme
};
StyledCheckboxIcon.defaultProps = {
    theme: theme
};
HiddenCheckbox.displayName = 'HiddenCheckbox';
StyledCheckboxInputShown.displayName = 'StyledCheckboxInputShown';
StyledCheckboxLabel.displayName = 'StyledCheckboxLabel';
StyledCheckboxMark.displayName = 'StyledCheckboxMark';
StyledCheckboxSpan.displayName = 'StyledCheckboxSpan';
StyledCheckboxIcon.displayName = 'StyledCheckboxIcon';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
//# sourceMappingURL=Checkbox.style.js.map
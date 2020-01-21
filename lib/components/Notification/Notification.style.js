var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Title } from '../Typography/Title';
export var StyledNotificationTitleIcon = styled(Icon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 14px;\n  flex: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n  color: ", ";\n"], ["\n  height: 14px;\n  flex: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n  color: ", ";\n"])), function (props) { return props.theme.height.md; }, function (props) { return props.theme.color.text.beta; });
Title.defaultProps = {
    level: 5
};
export var StyledNotificationTitle = styled(Title)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 0 ", " 0 0;\n  margin: 0;\n  height: ", ";\n  line-height: ", ";\n  flex: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"], ["\n  padding: 0 ", " 0 0;\n  margin: 0;\n  height: ", ";\n  line-height: ", ";\n  flex: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"])), function (props) { return props.theme.padding.md; }, function (props) { return props.theme.height.md; }, function (props) { return props.theme.height.md; });
export var StyledNotificationContentContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: ", ";\n  ", "\n"], ["\n  padding: ", ";\n  ",
    "\n"])), function (props) { return props.theme.padding.sm; }, function (props) {
    return props.type &&
        props.type !== 'default' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      padding: ", " ", "\n        ", " 34px;\n    "], ["\n      padding: ", " ", "\n        ", " 34px;\n    "])), props.theme.padding.md, props.theme.padding.sm, props.theme.padding.sm);
});
export var StyledNotificationTitleContainer = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  padding-bottom: ", "px;\n  margin-left: ", ";\n  color: ", ";\n\n  ", "\n  ", "\n    ", "\n    ", "\n    ", "\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  padding-bottom: ", "px;\n  margin-left: ", ";\n  color: ", ";\n\n  ",
    "\n  ",
    "\n    ",
    "\n    ",
    "\n    ",
    "\n"])), function (props) { return props.theme.color.border; }, function (props) { return parseInt(props.theme.padding.xs, 0) + 3; }, function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.color.text.alpha; }, function (props) {
    return props.type &&
        props.type !== 'default' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      margin-left: ", ";\n\n      & > ", ":first-of-type {\n        margin-left: -", ";\n      }\n\n      & > ", " {\n        padding-left: ", "px;\n      }\n    "], ["\n      margin-left: ", ";\n\n      & > ", ":first-of-type {\n        margin-left: -", ";\n      }\n\n      & > ", " {\n        padding-left: ", "px;\n      }\n    "])), props.theme.height.md, StyledNotificationTitleIcon, props.theme.height.md, StyledNotificationTitle, parseInt(props.theme.padding.xs, 0) + 1);
}, function (props) {
    return props.type === 'primary' && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      color: ", ";\n\n      i {\n        color: ", ";\n      }\n    "], ["\n      color: ", ";\n\n      i {\n        color: ", ";\n      }\n    "])), props.theme.color.primary.alpha, props.theme.color.primary.alpha);
}, function (props) {
    return props.type === 'success' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        color: ", ";\n\n        i {\n          color: ", ";\n        }\n      "], ["\n        color: ", ";\n\n        i {\n          color: ", ";\n        }\n      "])), props.theme.color.success.alpha, props.theme.color.success.alpha);
}, function (props) {
    return props.type === 'error' && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        color: ", ";\n\n        i {\n          color: ", ";\n        }\n      "], ["\n        color: ", ";\n\n        i {\n          color: ", ";\n        }\n      "])), props.theme.color.error.alpha, props.theme.color.error.alpha);
}, function (props) {
    return props.type === 'warning' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        color: ", ";\n\n        i {\n          color: ", ";\n        }\n      "], ["\n        color: ", ";\n\n        i {\n          color: ", ";\n        }\n      "])), props.theme.color.warning.alpha, props.theme.color.warning.alpha);
});
export var StyledNotificationFooter = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject([""], [""])));
export var StyledNotificationSpan = styled.span(templateObject_12 || (templateObject_12 = __makeTemplateObject([""], [""])));
export var StyledNotificationCloseButton = styled(Button)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  && {\n    background: transparent;\n    border: none;\n    box-shadow: none;\n\n    &:hover {\n      > ", " {\n        color: ", ";\n      }\n    }\n  }\n"], ["\n  && {\n    background: transparent;\n    border: none;\n    box-shadow: none;\n\n    &:hover {\n      > ", " {\n        color: ", ";\n      }\n    }\n  }\n"])), StyledNotificationTitleIcon, function (props) { return props.theme.color.error.alpha; });
export var StyledNotificationContainer = styled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  display: block;\n  max-width: 500px;\n  color: ", ";\n  background-color: ", ";\n  padding: ", ";\n  margin-bottom: ", ";\n  margin-left: auto;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n\n  font-family: ", ";\n  \n  ", "\n  ", "\n  ", "\n"], ["\n  display: block;\n  max-width: 500px;\n  color: ", ";\n  background-color: ", ";\n  padding: ", ";\n  margin-bottom: ", ";\n  margin-left: auto;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n\n  font-family: ", ";\n  \n  ",
    "\n  ",
    "\n  ",
    "\n"])), function (props) { return props.theme.color.text.alpha; }, function (props) { return props.theme.color.background.alpha; }, function (props) { return props.theme.padding.md; }, function (props) { return props.theme.margin.md; }, function (props) { return props.theme.color.border; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.boxShadow.md; }, function (props) { return props.theme.font.family; }, function (props) {
    return props.size === 'medium' && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      max-width: 500px;\n    "], ["\n      max-width: 500px;\n    "])));
}, function (props) {
    return props.size === 'small' && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      max-width: 300px;\n    "], ["\n      max-width: 300px;\n    "])));
}, function (props) {
    return props.size === 'large' && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      max-width: 700px;\n    "], ["\n      max-width: 700px;\n    "])));
});
StyledNotificationContainer.defaultProps = {
    theme: theme
};
StyledNotificationTitleIcon.defaultProps = {
    theme: theme
};
StyledNotificationTitle.defaultProps = {
    theme: theme
};
StyledNotificationContentContainer.defaultProps = {
    theme: theme
};
StyledNotificationFooter.defaultProps = {
    theme: theme
};
StyledNotificationSpan.defaultProps = {
    theme: theme
};
StyledNotificationTitleContainer.defaultProps = {
    theme: theme
};
StyledNotificationContainer.displayName = 'StyledNotificationContainer';
StyledNotificationTitleIcon.displayName = 'StyledNotificationTitleIcon';
StyledNotificationTitle.displayName = 'StyledNotificationTitle';
StyledNotificationContentContainer.displayName =
    'StyledNotificationContentContainer';
StyledNotificationFooter.displayName = 'StyledNotificationFooter';
StyledNotificationSpan.displayName = 'StyledNotificationSpan';
StyledNotificationTitleContainer.displayName =
    'StyledNotificationTitleContainer';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
//# sourceMappingURL=Notification.style.js.map
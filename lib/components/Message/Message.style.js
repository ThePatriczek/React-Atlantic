var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Icon } from '../Icon';
export var StyledMessageContainer = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin: 0 auto ", " auto;\n  position: relative;\n  display: table;\n  max-width: 100%;\n  padding: ", " ", "\n    ", " 34px;\n  margin-bottom: ", ";\n\n  color: ", ";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  -webkit-font-feature-settings: 'tnum';\n  font-feature-settings: 'tnum';\n  border-radius: ", ";\n  text-align: left;\n  word-break: break-word;\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';\n\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: default;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);\n\n  ", "\n  ", "\n  \n  ", "\n  ", "\n  \n  ", "\n  ", "\n  \n  ", "\n  ", "\n"], ["\n  margin: 0 auto ", " auto;\n  position: relative;\n  display: table;\n  max-width: 100%;\n  padding: ", " ", "\n    ", " 34px;\n  margin-bottom: ", ";\n\n  color: ", ";\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  -webkit-font-feature-settings: 'tnum';\n  font-feature-settings: 'tnum';\n  border-radius: ", ";\n  text-align: left;\n  word-break: break-word;\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';\n\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: default;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);\n\n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n"])), function (props) { return props.theme.margin.md; }, function (props) { return props.theme.padding.md; }, function (props) { return props.theme.padding.lg; }, function (props) { return props.theme.padding.md; }, function (props) { return props.theme.padding.sm; }, function (props) { return props.theme.color.black; }, function (props) { return props.theme.radius; }, function (props) {
    return props.type === 'primary' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'primary' &&
        props.isAlternative && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), props.theme.color.primary, props.theme.color.white);
}, function (props) {
    return props.type === 'success' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'success' &&
        props.isAlternative && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), props.theme.color.success, props.theme.color.white);
}, function (props) {
    return props.type === 'warning' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'warning' &&
        props.isAlternative && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), props.theme.color.warning, props.theme.color.white);
}, function (props) {
    return props.type === 'error' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'error' &&
        props.isAlternative && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), props.theme.color.error, props.theme.color.white);
});
export var StyledMessageIconSpan = styled.span(templateObject_10 || (templateObject_10 = __makeTemplateObject([""], [""])));
export var StyledMessageIcon = styled(Icon)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  cursor: default;\n  position: absolute;\n  top: 13px;\n  left: 10px;\n  ", "\n\n  ", "\n  ", "\n  \n  ", "\n  ", "\n  \n  ", "\n  ", "\n  \n  ", "\n  ", "\n"], ["\n  cursor: default;\n  position: absolute;\n  top: 13px;\n  left: 10px;\n  ",
    "\n\n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.name === 'loading' && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      width: 14px;\n      height: 14px;\n      margin: 0;\n    "], ["\n      width: 14px;\n      height: 14px;\n      margin: 0;\n    "])));
}, function (props) {
    return props.type === 'primary' && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.primary);
}, function (props) {
    return props.type === 'primary' &&
        props.isAlternative && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'success' && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.success);
}, function (props) {
    return props.type === 'success' &&
        props.isAlternative && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'warning' && css(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.warning);
}, function (props) {
    return props.type === 'warning' &&
        props.isAlternative && css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'error' && css(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.error);
}, function (props) {
    return props.type === 'error' &&
        props.isAlternative && css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.white);
});
export var StyledMessageIconLoading = styled(Icon)(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n  cursor: default;\n  position: absolute;\n  top: 13px;\n  left: 10px;\n  ", "\n\n  ", "\n  ", "\n  \n  ", "\n  ", "\n  \n  ", "\n  ", "\n  \n  ", "\n  ", "\n"], ["\n  cursor: default;\n  position: absolute;\n  top: 13px;\n  left: 10px;\n  ",
    "\n\n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n  \n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.name === 'loading' && css(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n      width: 14px;\n      height: 14px;\n      margin: 0;\n    "], ["\n      width: 14px;\n      height: 14px;\n      margin: 0;\n    "])));
}, function (props) {
    return props.type === 'primary' && css(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.primary);
}, function (props) {
    return props.type === 'primary' &&
        props.isAlternative && css(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'success' && css(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.success);
}, function (props) {
    return props.type === 'success' &&
        props.isAlternative && css(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'warning' && css(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.warning);
}, function (props) {
    return props.type === 'warning' &&
        props.isAlternative && css(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.white);
}, function (props) {
    return props.type === 'error' && css(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.error);
}, function (props) {
    return props.type === 'error' &&
        props.isAlternative && css(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), props.theme.color.white);
});
export var StyledMessageContentSpan = styled.span(templateObject_31 || (templateObject_31 = __makeTemplateObject([""], [""])));
StyledMessageContainer.defaultProps = {
    theme: theme
};
StyledMessageIconSpan.defaultProps = {
    theme: theme
};
StyledMessageIcon.defaultProps = {
    theme: theme
};
StyledMessageIconLoading.defaultProps = {
    theme: theme
};
StyledMessageContentSpan.defaultProps = {
    theme: theme
};
StyledMessageContainer.displayName = 'StyledMessageContainer';
StyledMessageIconSpan.displayName = 'StyledMessageIconSpan';
StyledMessageIcon.displayName = 'StyledMessageIcon';
StyledMessageIconLoading.displayName = 'StyledMessageIconLoading';
StyledMessageContentSpan.displayName = 'StyledMessageContentSpan';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31;
//# sourceMappingURL=Message.style.js.map
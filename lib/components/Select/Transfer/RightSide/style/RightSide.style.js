var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../../../../theme';
import { Button } from '../../../../Button';
import { PureButton } from '../../../../Button/Pure';
import { Icon } from '../../../../Icon';
export var StyledDeleteOneIcon = styled(Icon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  svg {\n    height: auto;\n    color: ", ";\n  }\n"], ["\n  svg {\n    height: auto;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.color.text.beta; });
export var StyledDeleteOneButton = styled(PureButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
export var StyledChosenHeader = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n\n  ", "\n\n  ", "\n\n  ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n\n  ",
    "\n\n  ",
    "\n\n  ",
    ";\n"])), function (props) { return props.theme.color.border; }, function (props) {
    return props.size === 'small' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
}, function (props) {
    return props.size === 'medium' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
});
export var StyledTransferDeleteAllButtonIcon = styled(Icon)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  padding-right: 5px;\n\n  ", "\n"], ["\n  padding-right: 5px;\n\n  ",
    "\n"])), function (props) {
    return props.size === 'small' && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      padding-right: 0;\n    "], ["\n      padding-right: 0;\n    "])));
});
export var StyledDeleteAllButton = styled(Button)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    return props.globalSize === 'small' && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      border: none;\n    "], ["\n      border: none;\n    "])));
});
export var StyledTransferSpan = styled.span(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n    \n"], ["\n  ",
    "\n\n  ",
    "\n\n  ",
    "\n    \n"])), function (props) {
    return props.size === 'medium' && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.md, parseInt(props.theme.height.md, 0), parseInt(props.theme.height.md, 0));
}, function (props) {
    return props.size === 'large' && css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.lg, parseInt(props.theme.height.lg, 0), parseInt(props.theme.height.lg, 0));
}, function (props) {
    return props.size === 'small' && css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "], ["\n      font-size: ", ";\n      height: ", "px;\n      line-height: ", "px;\n    "])), props.theme.font.size.sm, parseInt(props.theme.height.sm, 0), parseInt(props.theme.height.sm, 0));
});
StyledTransferSpan.defaultProps = {
    theme: theme
};
StyledTransferSpan.displayName = 'StyledTransferSpan';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14;
//# sourceMappingURL=RightSide.style.js.map
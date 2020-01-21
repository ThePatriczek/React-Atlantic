var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Button } from '../../Button';
import styled, { css } from 'styled-components';
import { Typography } from '../../Typography';
var Text = Typography.Text;
export var StyledPaginationButton = styled(Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  && {\n    background-color: ", ";\n\n    ", "\n\n    ", "\n    \n      ", "\n  }\n\n  ", "\n\n\n"], ["\n  && {\n    background-color: ", ";\n\n    ",
    "\n\n    ",
    "\n    \n      ",
    "\n  }\n\n  ",
    "\n\n\n"])), function (props) { return props.theme.color.background.alpha; }, function (props) {
    return props.isDisabled &&
        !props.isSimple && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        background-color: ", ";\n      "], ["\n        background-color: ", ";\n      "])), props.theme.color.background.gamma);
}, function (props) {
    return props.isDisabled &&
        props.isActive &&
        !props.isSimple && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        background-color: ", ";\n        border: 1px solid ", ";\n\n        filter: grayscale(100%);\n      "], ["\n        background-color: ", ";\n        border: 1px solid ", ";\n\n        filter: grayscale(100%);\n      "])), props.theme.color.primary.alpha, props.theme.color.primary.alpha);
}, function (props) {
    return props.isSimple && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          height: ", ";\n          box-shadow: none;\n          padding: 0\n            ", ";\n          font-size: ", ";\n          border: 0;\n        "], ["\n          height: ", ";\n          box-shadow: none;\n          padding: 0\n            ",
        ";\n          font-size: ", ";\n          border: 0;\n        "])), function (props) { return props.theme.height.sm; }, function (props) {
        return parseInt(props.theme.padding.sm) +
            parseInt(props.theme.padding.xs) + "px";
    }, function (props) { return props.theme.font.size.sm; });
}, function (props) {
    return !props.isActive && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      &:hover {\n        background-color: ", ";\n      }\n    "], ["\n      &:hover {\n        background-color: ", ";\n      }\n    "])), props.theme.color.background.gamma);
});
export var ButtonPaginationText = styled(Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
export var StyledActivePaginationButton = styled(StyledPaginationButton)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  && {\n    ", "\n  }\n"], ["\n  && {\n    ",
    "\n  }\n"])), function (props) {
    return props.isActive &&
        !props.isDisabled && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        cursor: default;\n        border: 1px solid ", ";\n\n        ", " {\n          color: ", ";\n        }\n      "], ["\n        cursor: default;\n        border: 1px solid ", ";\n\n        ", " {\n          color: ", ";\n        }\n      "])), props.theme.color.primary.alpha, ButtonPaginationText, props.theme.color.primary.alpha);
});
export var StyledNormalPaginationButton = styled(StyledActivePaginationButton)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    return props.isActive &&
        props.isDisabled && css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n      ", " {\n        color: ", ";\n      }\n    "], ["\n      ", " {\n        color: ", ";\n      }\n    "])), ButtonPaginationText, props.theme.color.background.alpha);
});
export var StyledSimplePaginationButton = styled(StyledActivePaginationButton)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    return !props.isActive && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      border: 0;\n    "], ["\n      border: 0;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=ButtonList.style.js.map
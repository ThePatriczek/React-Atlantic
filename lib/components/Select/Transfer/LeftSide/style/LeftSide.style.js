var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { PureButton } from '../../../../Button/Pure';
import { StyledIcon } from '../../../../Icon/Icon.style';
import { Input } from '../../../../Input';
import { StyledInput } from '../../../../Input/Input.style';
export var StyledSearchCancel = styled(PureButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 25px;\n\n  &:hover {\n    ", " {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    height: auto;\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 25px;\n\n  &:hover {\n    ", " {\n      color: ", ";\n    }\n  }\n\n  ", " {\n    height: auto;\n    color: ", ";\n  }\n"])), StyledIcon, function (props) { return props.theme.color.error.alpha; }, StyledIcon, function (props) { return props.theme.color.text.beta; });
export var StyledTransferInput = styled(Input)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", " {\n    border: none;\n\n    ", "\n  }\n\n  ", "\n"], ["\n  ", " {\n    border: none;\n\n    ",
    "\n  }\n\n  ",
    "\n"])), StyledInput, function (props) {
    return props.isOpen && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n         ", "\n         ", "\n         ", ";\n      "], ["\n         ",
        "\n         ",
        "\n         ",
        ";\n      "])), props.size === 'small' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n             padding-right: 50px;\n           "], ["\n             padding-right: 50px;\n           "]))), props.size === 'medium' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n             padding-right: 55px;\n           "], ["\n             padding-right: 55px;\n           "]))), props.size === 'large' && css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n             padding-right: 65px;\n           "], ["\n             padding-right: 65px;\n           "]))));
}, function (props) {
    return props.isOpen && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      border-bottom: 1px solid ", ";\n\n      &:hover {\n        border-color: ", ";\n      }\n\n      ", " {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    "], ["\n      border-bottom: 1px solid ", ";\n\n      &:hover {\n        border-color: ", ";\n      }\n\n      ", " {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n    "])), function (props) { return props.theme.color.border; }, function (props) { return props.theme.color.primary.alpha; }, StyledInput);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=LeftSide.style.js.map
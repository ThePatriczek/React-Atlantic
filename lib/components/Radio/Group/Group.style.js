var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme } from '../../../theme';
export var StyledRadioGroup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  label.atlantic--radio_button:not(:only-child) {\n    border-radius: 0;\n\n    :first-of-type {\n      border-radius: ", " 0 0\n        ", ";\n    }\n\n    :last-of-type {\n      border-radius: 0 ", "\n        ", " 0;\n    }\n  }\n"], ["\n  label.atlantic--radio_button:not(:only-child) {\n    border-radius: 0;\n\n    :first-of-type {\n      border-radius: ", " 0 0\n        ", ";\n    }\n\n    :last-of-type {\n      border-radius: 0 ", "\n        ", " 0;\n    }\n  }\n"])), function (props) { return props.theme.radius; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.radius; }, function (props) { return props.theme.radius; });
StyledRadioGroup.defaultProps = {
    theme: theme
};
var templateObject_1;
//# sourceMappingURL=Group.style.js.map
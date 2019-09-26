var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
import { getDefaultStyledText } from '../Text/Text.style';

export var StyledParagraph = styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n\n  ", "\n"], ["\n  ", ";\n\n  ",
    "\n"])), function (props) { return getDefaultStyledText(props); }, function (props) {
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      margin-bottom: ", ";\n    "], ["\n      margin-bottom: ", ";\n    "])), props.theme.margin.md);
});
StyledParagraph.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=Paragraph.style.js.map
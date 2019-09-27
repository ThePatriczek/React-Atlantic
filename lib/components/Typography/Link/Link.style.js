var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme } from '../../../theme';
export var StyledLink = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: ", ";\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: inherit;\n  font-style: inherit;\n  vertical-align: baseline;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  font-size: ", ";\n  font-family: ", ";\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: inherit;\n  font-style: inherit;\n  vertical-align: baseline;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.color.primary; });
StyledLink.defaultProps = {
    theme: theme
};
var templateObject_1;
//# sourceMappingURL=Link.style.js.map
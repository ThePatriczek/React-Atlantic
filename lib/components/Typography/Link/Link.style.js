var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme } from '../../../theme';
import { StyledText } from "../Text/Text.style";
import { StyledTitle1, StyledTitle2, StyledTitle3, StyledTitle4, StyledTitle5 } from "../Title/Title.style";
export var StyledLink = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: ", ";\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: inherit;\n  font-style: inherit;\n  vertical-align: baseline;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  ::selection,\n  ::-moz-selection {\n    background: ", ";\n  }\n  \n  ", ",", ",", ",", ",", ",", "{\n    color: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-family: ", ";\n  color: ", ";\n  text-decoration: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-weight: inherit;\n  font-style: inherit;\n  vertical-align: baseline;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  ::selection,\n  ::-moz-selection {\n    background: ", ";\n  }\n  \n  ", ",", ",", ",", ",", ",", "{\n    color: ", ";\n  }\n"])), function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.color.primary.alpha; }, function (props) { return props.theme.color.primary.delta; }, StyledText, StyledTitle1, StyledTitle2, StyledTitle3, StyledTitle4, StyledTitle5, function (props) { return props.theme.color.primary.alpha; });
StyledLink.defaultProps = {
    theme: theme
};
var templateObject_1;
//# sourceMappingURL=Link.style.js.map
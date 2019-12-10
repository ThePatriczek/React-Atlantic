var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';
var titleStyle = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: bold;\n  font-family: ", ";\n  ::selection,\n  ::-moz-selection {\n    background: ", ";\n  }\n"], ["\n  color: ", ";\n  font-weight: bold;\n  font-family: ", ";\n  ::selection,\n  ::-moz-selection {\n    background: ", ";\n  }\n"])), function (props) { return props.theme.color.text.alpha; }, function (props) { return props.theme.font.family; }, function (props) { return props.theme.color.primary.delta; });
export var StyledTitle1 = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n\n  font-size: 40px;\n  line-height: 1.2;\n  margin: ", " 0;\n\n  a {\n    font-size: 40px;\n  }\n"], ["\n  ", ";\n\n  font-size: 40px;\n  line-height: 1.2;\n  margin: ", " 0;\n\n  a {\n    font-size: 40px;\n  }\n"])), titleStyle, function (props) { return props.theme.margin.lg; });
export var StyledTitle2 = styled.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n\n  font-size: 32px;\n  line-height: 1.3;\n  margin: ", " 0;\n\n  a {\n    font-size: 32px;\n  }\n"], ["\n  ", ";\n\n  font-size: 32px;\n  line-height: 1.3;\n  margin: ", " 0;\n\n  a {\n    font-size: 32px;\n  }\n"])), titleStyle, function (props) { return props.theme.margin.md; });
export var StyledTitle3 = styled.h3(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n\n  font-size: 26px;\n  line-height: 1.3;\n  margin: ", " 0;\n\n  a {\n    font-size: 26px;\n  }\n"], ["\n  ", ";\n\n  font-size: 26px;\n  line-height: 1.3;\n  margin: ", " 0;\n\n  a {\n    font-size: 26px;\n  }\n"])), titleStyle, function (props) { return props.theme.margin.md; });
export var StyledTitle4 = styled.h4(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n\n  font-size: 18px;\n  line-height: 1.4;\n  margin: ", " 0;\n\n  a {\n    font-size: 18px;\n  }\n"], ["\n  ", ";\n\n  font-size: 18px;\n  line-height: 1.4;\n  margin: ", " 0;\n\n  a {\n    font-size: 18px;\n  }\n"])), titleStyle, function (props) { return props.theme.margin.sm; });
export var StyledTitle5 = styled.h5(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n\n  font-size: 16px;\n  line-height: 1.5;\n  margin: ", " 0;\n\n  a {\n    font-size: 16px;\n  }\n"], ["\n  ", ";\n\n  font-size: 16px;\n  line-height: 1.5;\n  margin: ", " 0;\n\n  a {\n    font-size: 16px;\n  }\n"])), titleStyle, function (props) { return props.theme.margin.sm; });
StyledTitle1.defaultProps = {
    theme: theme
};
StyledTitle2.defaultProps = {
    theme: theme
};
StyledTitle3.defaultProps = {
    theme: theme
};
StyledTitle4.defaultProps = {
    theme: theme
};
StyledTitle5.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Title.style.js.map
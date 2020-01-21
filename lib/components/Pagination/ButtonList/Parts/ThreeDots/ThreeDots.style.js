var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { StyledIcon } from '../../../../Icon/Icon.style';
import { Typography } from '../../../../Typography';
var Text = Typography.Text;
export var StyledPaginationIcon = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0 ", ";\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  color: ", ";\n  width: 25px;\n"], ["\n  margin: 0 ", ";\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  color: ", ";\n  width: 25px;\n"])), function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.color.text.beta; });
export var StyledPaginationStepIcon = styled(StyledPaginationIcon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", " {\n    margin: 0 ", ";\n    display: inline-block;\n    vertical-align: middle;\n    color: ", ";\n    cursor: pointer;\n  }\n"], ["\n  ", " {\n    margin: 0 ", ";\n    display: inline-block;\n    vertical-align: middle;\n    color: ", ";\n    cursor: pointer;\n  }\n"])), StyledIcon, function (props) { return props.theme.margin.sm; }, function (props) { return props.theme.color.primary.alpha; });
export var StyledThreeDotsText = styled(Text)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: white;\n"], ["\n  color: white;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ThreeDots.style.js.map
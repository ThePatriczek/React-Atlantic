var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { theme } from '../../theme';
import { StyledIcon } from '../Icon/Icon.style';
import { Paragraph } from '../Typography/Paragraph';
export var NotFoundContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n  padding: ", ";\n"], ["\n  text-align: center;\n  padding: ", ";\n"])), function (props) { return props.theme.padding.xl; });
export var NotFoundImageContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 80px;\n  margin: ", " auto 0 auto;\n  color: ", ";\n  opacity: 0.5;\n\n  figure {\n    height: 80px;\n    width: 80px;\n    margin: 0;\n  }\n"], ["\n  width: 80px;\n  margin: ", " auto 0 auto;\n  color: ", ";\n  opacity: 0.5;\n\n  figure {\n    height: 80px;\n    width: 80px;\n    margin: 0;\n  }\n"])), function (props) { return props.theme.padding.xl; }, function (props) { return props.theme.color.text.beta; });
export var NotFoundAnnotation = styled(Paragraph)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  && {\n    color: ", ";\n\n    ", " {\n      vertical-align: 7px;\n      padding: 0 ", ";\n    }\n  }\n"], ["\n  && {\n    color: ", ";\n\n    ", " {\n      vertical-align: 7px;\n      padding: 0 ", ";\n    }\n  }\n"])), function (props) { return props.theme.color.primary.alpha; }, StyledIcon, function (props) { return props.theme.padding.sm; });
NotFoundAnnotation.displayName = "NotFoundAnnotation";
NotFoundContainer.defaultProps = {
    theme: theme
};
NotFoundImageContainer.defaultProps = {
    theme: theme
};
NotFoundAnnotation.defaultProps = {
    theme: theme
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=NotFound.style.js.map
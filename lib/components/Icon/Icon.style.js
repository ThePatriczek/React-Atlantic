var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { animated } from 'react-spring/web.cjs';
import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../theme';
export var spin = function () {
    return keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }"], ["\n  100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n  }"])));
};
export var StyledIcon = styled.i(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  cursor: ", ";\n  line-height: 0;\n  height: ", ";\n  width: ", ";\n  color: ", ";\n  font-style: normal;\n  text-align: center;\n  text-transform: none;\n\n  svg {\n    vertical-align: top;\n    width: 100%;\n    height: 100%;\n    font-size: inherit;\n  }\n\n  ", "\n"], ["\n  display: inline-block;\n  cursor: ", ";\n  line-height: 0;\n  height: ", ";\n  width: ", ";\n  color: ", ";\n  font-style: normal;\n  text-align: center;\n  text-transform: none;\n\n  svg {\n    vertical-align: top;\n    width: 100%;\n    height: 100%;\n    font-size: inherit;\n  }\n\n  ",
    "\n"])), function (props) { return (props.onClick ? 'pointer' : 'inherit'); }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.color.text.alpha; }, function (props) {
    return props.isRotating && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      -webkit-animation: ", " 4s linear infinite;\n      -moz-animation: ", " 4s linear infinite;\n      animation: ", " 4s linear infinite;\n    "], ["\n      -webkit-animation: ", " 4s linear infinite;\n      -moz-animation: ", " 4s linear infinite;\n      animation: ", " 4s linear infinite;\n    "])), spin, spin, spin);
});
export var StyledSVG = styled(animated.svg)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
StyledIcon.defaultProps = {
    theme: theme
};
StyledIcon.displayName = 'StyledIcon';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Icon.style.js.map
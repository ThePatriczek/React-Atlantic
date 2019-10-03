var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
export var StyledIcon = styled.i(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  display: inline-block;\n  line-height: 0;\n  height: 1em;\n  color: inherit;\n  font-style: normal;\n  text-align: center;\n  text-transform: none;\n\n  ", "\n\n  svg {\n    height: 1em;\n    vertical-align: middle;\n  }\n"], ["\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n\n  display: inline-block;\n  line-height: 0;\n  height: 1em;\n  color: inherit;\n  font-style: normal;\n  text-align: center;\n  text-transform: none;\n\n  ",
    "\n\n  svg {\n    height: 1em;\n    vertical-align: middle;\n  }\n"])), function (props) {
    return props.isRotating && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      -webkit-animation: spin 4s linear infinite;\n      -moz-animation: spin 4s linear infinite;\n      animation: spin 4s linear infinite;\n    "], ["\n      -webkit-animation: spin 4s linear infinite;\n      -moz-animation: spin 4s linear infinite;\n      animation: spin 4s linear infinite;\n    "])));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=Icon.style.js.map
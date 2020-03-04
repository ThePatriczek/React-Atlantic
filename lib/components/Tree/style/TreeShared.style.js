var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { listGapSizeLg, listGapSizeMd, listGapSizeSm } from './variables';
export var StyledTreeShared = styled.ul(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  max-width: 100%;\n  \n  & & {\n    ", "\n    \n    ", "\n    \n    ", "\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  max-width: 100%;\n  \n  & & {\n    ",
    "\n    \n    ",
    "\n    \n    ",
    "\n  }\n"])), function (props) {
    return props.size === 'small' && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        margin-left: ", ";\n      "], ["\n        margin-left: ", ";\n      "])), listGapSizeSm);
}, function (props) {
    return props.size === 'medium' && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        margin-left: ", ";\n      "], ["\n        margin-left: ", ";\n      "])), listGapSizeMd);
}, function (props) {
    return props.size === 'large' && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        margin-left: ", ";\n      "], ["\n        margin-left: ", ";\n      "])), listGapSizeLg);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=TreeShared.style.js.map
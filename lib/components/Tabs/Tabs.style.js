var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
export var StyledTabsContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
export var StyledTabsBar = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid ", ";\n  outline: none;\n\n  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  font-family: ", ";\n\n  ", ";\n"], ["\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid ", ";\n  outline: none;\n\n  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  font-family: ", ";\n\n  ",
    ";\n"])), function (props) { return props.theme.color.border; }, function (props) { return props.theme.font.family; }, function (props) {
    switch (props.size) {
        case 'small':
            return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          * {\n            font-size: ", ";\n            line-height: ", ";\n          }\n        "], ["\n          * {\n            font-size: ", ";\n            line-height: ", ";\n          }\n        "])), props.theme.font.size.sm, props.theme.font.size.sm);
        default:
        case 'medium':
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          * {\n            font-size: ", ";\n            line-height: ", ";\n          }\n        "], ["\n          * {\n            font-size: ", ";\n            line-height: ", ";\n          }\n        "])), props.theme.font.size.md, props.theme.font.size.md);
        case 'large':
            return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          * {\n            font-size: ", ";\n            line-height: ", ";\n          }\n        "], ["\n          * {\n            font-size: ", ";\n            line-height: ", ";\n          }\n        "])), props.theme.font.size.lg, props.theme.font.size.lg);
    }
});
export var StyledTabsContent = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: ", ";\n  font-family: ", ";\n\n  ", "\n\n  ", "\n"], ["\n  font-size: ", ";\n  font-family: ", ";\n\n  ",
    "\n\n  ",
    "\n"])), function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.family; }, function (props) {
    return props.hasBackground && css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      background: ", ";\n    "], ["\n      background: ", ";\n    "])), props.theme.color.background.alpha);
}, function (props) {
    return props.isBordered && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      border-style: solid;\n      border-color: ", ";\n      border-width: 0 1px 1px 1px;\n      border-radius: 0 0 ", " ", ";\n    "], ["\n      border-style: solid;\n      border-color: ", ";\n      border-width: 0 1px 1px 1px;\n      border-radius: 0 0 ", " ", ";\n    "])), props.theme.color.border, props.theme.radius, props.theme.radius);
});
StyledTabsContent.displayName = "StyledTabsContent";
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=Tabs.style.js.map
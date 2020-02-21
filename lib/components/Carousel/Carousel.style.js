var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { a } from 'react-spring/web.cjs';
import styled, { css } from 'styled-components';
export var StyledCarousel = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  max-width: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  will-change: transform;\n\n  ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  max-width: 100%;\n  transition: height 0.2s ease-out;\n  overflow: hidden;\n  will-change: transform;\n\n  ",
    ";\n"])), function (props) {
    return props.height && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      height: ", ";\n    "], ["\n      height: ", ";\n    "])), props.height + "px");
});
export var StyledSlide = styled(a.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  will-change: transform;\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  will-change: transform;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Carousel.style.js.map
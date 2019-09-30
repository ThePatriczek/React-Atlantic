import * as React from 'react';
import { StyledParagraph } from './Paragraph.style';
export var Paragraph = function (props) {
    var children = props.children, className = props.className;
    return React.createElement(StyledParagraph, { className: className }, children);
};
Paragraph.displayName = "Paragraph";
//# sourceMappingURL=Paragraph.js.map
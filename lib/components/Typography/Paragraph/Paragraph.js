import * as React from 'react';
import { StyledParagraph } from './Paragraph.style';

export var Paragraph = function (props) {
    var children = props.children;
    return React.createElement(StyledParagraph, null, children);
};
Paragraph.displayName = "Paragraph";
//# sourceMappingURL=Paragraph.js.map
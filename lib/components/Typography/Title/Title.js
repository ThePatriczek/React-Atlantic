import * as React from 'react';
import { StyledTitle1, StyledTitle2, StyledTitle3, StyledTitle4, StyledTitle5 } from './Title.style';

export var Title = function (props) {
    var children = props.children, level = props.level;
    switch (level) {
        case 5:
            return React.createElement(StyledTitle5, null, children);
        case 4:
            return React.createElement(StyledTitle4, null, children);
        case 3:
            return React.createElement(StyledTitle3, null, children);
        case 2:
            return React.createElement(StyledTitle2, null, children);
        case 1:
        default:
            return React.createElement(StyledTitle1, null, children);
    }
};
Title.defaultProps = {
    level: 1
};
Title.displayName = "Title";
//# sourceMappingURL=Title.js.map
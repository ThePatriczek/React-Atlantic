import React from 'react';
import { StyledTitle1, StyledTitle2, StyledTitle3, StyledTitle4, StyledTitle5 } from './Title.style';
export var Title = function (props) {
    var children = props.children, level = props.level, className = props.className;
    switch (level) {
        case 5:
            return (React.createElement(StyledTitle5, { key: children, className: className }, children));
        case 4:
            return (React.createElement(StyledTitle4, { key: children, className: className }, children));
        case 3:
            return (React.createElement(StyledTitle3, { key: children, className: className }, children));
        case 2:
            return (React.createElement(StyledTitle2, { key: children, className: className }, children));
        case 1:
        default:
            return (React.createElement(StyledTitle1, { key: children, className: className }, children));
    }
};
Title.defaultProps = {
    level: 1
};
Title.displayName = "Title";
//# sourceMappingURL=Title.js.map
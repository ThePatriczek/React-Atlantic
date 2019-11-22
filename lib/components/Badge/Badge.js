import React from 'react';
import { StyledBadge, StyledIndicator } from './Badge.style';
export var Badge = function (props) {
    var children = props.children, className = props.className, type = props.type, size = props.size;
    if (!children) {
        return (React.createElement(StyledIndicator, { className: className, type: type, size: size }));
    }
    return (React.createElement(StyledBadge, { className: className, type: type, size: size }, children));
};
Badge.defaultProps = {
    type: 'default',
    size: 'small'
};
Badge.displayName = "Badge";
//# sourceMappingURL=Badge.js.map
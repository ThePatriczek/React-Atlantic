import React from 'react';
import { StyledSkeleton } from './Skeleton.style';
export var Skeleton = function (props) {
    var className = props.className, size = props.size, shape = props.shape, height = props.height, width = props.width;
    return (React.createElement(StyledSkeleton, { className: className, shape: shape, size: size, width: width, height: height }));
};
Skeleton.defaultProps = {
    shape: 'rectangle'
};
Skeleton.displayName = "Skeleton";
//# sourceMappingURL=Skeleton.js.map
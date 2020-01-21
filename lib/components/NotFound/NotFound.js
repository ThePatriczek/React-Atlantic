var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Typography } from '../Typography';
import { NotFoundImage } from './Image';
import { NotFoundAnnotation, NotFoundContainer, NotFoundImageContainer } from './NotFound.style';
var Title = Typography.Title;
export var NotFound = function (props) {
    var title = props.title, children = props.children;
    return (React.createElement(NotFoundContainer, __assign({}, props),
        React.createElement(NotFoundImageContainer, null,
            React.createElement("figure", null,
                React.createElement(NotFoundImage, null))),
        title && React.createElement(Title, { level: 5 }, title),
        children && React.createElement(NotFoundAnnotation, null, children)));
};
NotFound.displayName = "NotFound";
//# sourceMappingURL=NotFound.js.map
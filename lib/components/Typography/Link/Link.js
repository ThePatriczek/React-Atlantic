import * as React from 'react';
import { StyledLink } from './Link.style';

export var Link = function (props) {
    var children = props.children, href = props.href, target = props.target, className = props.className;
    var onClick = function (e) {
        if (props.onClick) {
            e.preventDefault();
            props.onClick();
        }
    };
    return (React.createElement(StyledLink, { href: href, target: target, onClick: onClick, rel: "noreferrer noopener", className: className }, children));
};
Link.displayName = "Link";
//# sourceMappingURL=Link.js.map
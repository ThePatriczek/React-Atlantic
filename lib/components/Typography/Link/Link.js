import * as React from 'react';
import { useClick } from '../../../hooks/EventHandlers/useClick';
import { StyledLink } from './Link.style';
export var Link = function (props) {
    var children = props.children, href = props.href, target = props.target, className = props.className;
    var onClick = useClick({ deps: [props.onClick] }).onClick;
    return (React.createElement(StyledLink, { href: href, target: target, onClick: onClick, rel: "noreferrer noopener", className: className }, children));
};
Link.displayName = "Link";
//# sourceMappingURL=Link.js.map
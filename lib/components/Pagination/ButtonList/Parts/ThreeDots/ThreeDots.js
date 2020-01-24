import React, { useState } from 'react';
import { Icon } from '../../../../Icon';
import { Tooltip } from '../../../../Tooltip';
import { StyledPaginationIcon, StyledPaginationStepIcon, StyledThreeDotsText } from './ThreeDots.style';
export var ThreeDots = function (props) {
    var isRight = props.isRight, unique = props.unique, text = props.text;
    var _a = useState(false), hovered = _a[0], setHovered = _a[1];
    var _b = useState(false), isClicked = _b[0], setClicked = _b[1];
    var onClick = function () {
        var _a, _b;
        (_b = (_a = props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, isRight);
        setClicked(true);
    };
    var onMouseLeave = function () {
        setHovered(false);
        setClicked(false);
    };
    var onMouseEnter = function () {
        if (props.onClick) {
            setHovered(true);
        }
    };
    return (React.createElement("li", { "data-tip": true, "data-for": unique.toString(), key: unique, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
        !hovered ? (React.createElement(StyledPaginationIcon, null, "\u2022\u2022\u2022")) : (React.createElement(StyledPaginationStepIcon, { onClick: onClick },
            React.createElement(Icon, { name: isRight ? 'arrowDoubleRight' : 'arrowDoubleLeft' }))),
        hovered && !isClicked && (React.createElement(Tooltip, { place: 'bottom', id: unique.toString() }, text &&
            React.createElement(StyledThreeDotsText, null, text)))));
};
//# sourceMappingURL=ThreeDots.js.map
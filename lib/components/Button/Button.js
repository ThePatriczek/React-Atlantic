import * as React from 'react';
import { StyledButton } from './Button.style';
export var Button = function (props) {
    var children = props.children, type = props.type, isDisabled = props.isDisabled, isRounded = props.isRounded, size = props.size, isFullWide = props.isFullWide;
    var _a = React.useState(false), animation = _a[0], setAnimation = _a[1];
    var onClick = function (e) {
        e.preventDefault();
        setAnimation(true);
        if (props.onClick) {
            props.onClick();
        }
    };
    return (React.createElement(StyledButton, { type: type, disabled: isDisabled, onClick: onClick, isRounded: !!isRounded, size: size, isFullWide: !!isFullWide, onAnimationEnd: function () { return setAnimation(false); }, className: animation ? "animation" : "" }, children));
};
Button.defaultProps = {
    size: 'medium',
    isFullWide: false,
    isDisabled: false,
    isRounded: false,
    iconPosition: 'left',
    type: 'default'
};
Button.displayName = "Button";
//# sourceMappingURL=Button.js.map
import * as React from 'react';
import { StyledButton } from './Button.style';

export var Button = function (props) {
    var children = props.children, type = props.type, isDisabled = props.isDisabled, isRound = props.isRound, size = props.size, isFullWidth = props.isFullWidth, htmlType = props.htmlType;
    var _a = React.useState(false), animation = _a[0], setAnimation = _a[1];
    var onClick = function (e) {
        e.preventDefault();
        setAnimation(true);
        if (props.onClick) {
            props.onClick();
        }
    };
    return (React.createElement(StyledButton, { type: htmlType, styleType: isDisabled ? 'default' : type, disabled: isDisabled, onClick: onClick, isRound: !!isRound, size: size, isFullWidth: !!isFullWidth, onAnimationEnd: function () { return setAnimation(false); }, className: animation ? "animation" : "" }, children));
};
Button.defaultProps = {
    size: 'medium',
    isFullWidth: false,
    isDisabled: false,
    isRound: false,
    type: 'default'
};
Button.displayName = "Button";
//# sourceMappingURL=Button.js.map
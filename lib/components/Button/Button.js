import * as React from 'react';
import { useClick } from '../../hooks/EventHandlers/useClick';
import { StyledButton } from './Button.style';
export var Button = function (props) {
    var children = props.children, type = props.type, isDisabled = props.isDisabled, isRound = props.isRound, size = props.size, isFullWidth = props.isFullWidth, isTransparent = props.isTransparent, htmlType = props.htmlType, className = props.className;
    var _a = React.useState(false), animation = _a[0], setAnimation = _a[1];
    var hookOnClick = useClick({
        deps: [props.onClick],
        onClick: props.onClick
    }).onClick;
    var onClick = function () {
        setAnimation(true);
        hookOnClick();
    };
    return (React.createElement(StyledButton, { type: htmlType, styleType: isDisabled ? 'default' : type, disabled: isDisabled, onClick: onClick, isRound: !!isRound, isTransparent: isTransparent, size: size, isFullWidth: !!isFullWidth, onAnimationEnd: function () { return setAnimation(false); }, animationRunning: animation, className: className }, children));
};
Button.defaultProps = {
    size: 'medium',
    isFullWidth: false,
    isDisabled: false,
    isRound: false,
    type: 'default',
    htmlType: 'button'
};
Button.displayName = "Button";
//# sourceMappingURL=Button.js.map
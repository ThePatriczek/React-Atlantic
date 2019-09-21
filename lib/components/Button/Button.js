import * as React from 'react';
import { StyledButton } from './Button.style';
export var Button = function (props) {
    var children = props.children, type = props.type, isDisabled = props.isDisabled, onClick = props.onClick, icon = props.icon, iconPosition = props.iconPosition;
    return (React.createElement(StyledButton, { type: type, disabled: isDisabled, onClick: onClick },
        icon && iconPosition === 'left' && React.createElement("i", { className: icon }),
        children,
        icon && iconPosition === 'right' && React.createElement("i", { className: icon })));
};
Button.defaultProps = {
    type: 'button',
    iconPosition: 'left'
};
Button.displayName = "Button";
//# sourceMappingURL=Button.js.map
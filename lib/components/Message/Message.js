import React from 'react';
import { useClick } from '../../hooks/EventHandlers/useClick';
import { StyledMessageContainer, StyledMessageContentSpan, StyledMessageIcon, StyledMessageIconLoading, StyledMessageIconSpan } from './Message.style';
export var Message = function (props) {
    var children = props.children, isLoading = props.isLoading, isAlternative = props.isAlternative;
    var onClick = useClick({
        deps: [props.onClick],
        onClick: props.onClick
    }).onClick;
    var type = props.type;
    if (type === 'default') {
        type = 'primary';
    }
    var iconName;
    var icon = function () {
        switch (type) {
            case 'success':
                iconName = 'checkCircle';
                break;
            case 'error':
                iconName = 'error';
                break;
            case 'primary':
            case 'default':
                iconName = 'info';
                break;
            case 'warning':
                iconName = 'warning';
                break;
            default:
                return null;
        }
        return (React.createElement(StyledMessageIcon, { name: iconName, isAlternative: isAlternative, type: type }));
    };
    return (React.createElement(StyledMessageContainer, { isAlternative: isAlternative, type: type, onClick: onClick },
        React.createElement(StyledMessageIconSpan, { isAlternative: isAlternative },
            isLoading && (React.createElement(StyledMessageIconLoading, { isAlternative: isAlternative, name: 'loading', isRotating: true })),
            type && !isLoading && icon()),
        React.createElement(StyledMessageContentSpan, { isAlternative: isAlternative }, children)));
};
Message.defaultProps = {
    type: 'default'
};
//# sourceMappingURL=Message.js.map
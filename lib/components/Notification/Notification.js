import React from 'react';
import { Paragraph } from '../Typography/Paragraph';
import { StyledNotificationCloseButton, StyledNotificationContainer, StyledNotificationContentContainer, StyledNotificationFooter, StyledNotificationTitle, StyledNotificationTitleContainer, StyledNotificationTitleIcon } from './Notification.style';
export var Notification = function (props) {
    var children = props.children, title = props.title, className = props.className, size = props.size, type = props.type, footer = props.footer, onClose = props.onClose;
    var titleIcon;
    var iconTitle = function () {
        switch (type) {
            case 'success':
                titleIcon = 'checkCircle';
                return React.createElement(StyledNotificationTitleIcon, { name: titleIcon });
            case 'error':
                titleIcon = 'error';
                return React.createElement(StyledNotificationTitleIcon, { name: titleIcon });
            case 'primary':
                titleIcon = 'info';
                return React.createElement(StyledNotificationTitleIcon, { name: titleIcon });
            case 'warning':
                titleIcon = 'warning';
                return React.createElement(StyledNotificationTitleIcon, { name: titleIcon });
            default:
                return null;
        }
    };
    return (React.createElement(StyledNotificationContainer, { size: size, type: type, className: className },
        React.createElement(StyledNotificationTitleContainer, { type: type },
            iconTitle(),
            title && (React.createElement(StyledNotificationTitle, { type: type }, title)),
            onClose && (React.createElement(StyledNotificationCloseButton, { onClick: onClose },
                React.createElement(StyledNotificationTitleIcon, { name: 'close', type: type })))),
        React.createElement(StyledNotificationContentContainer, { type: type, size: size },
            React.createElement(Paragraph, null, children)),
        footer && (React.createElement(StyledNotificationFooter, { type: type, size: size }, footer))));
};
Notification.defaultProps = {
    title: 'Notification',
    type: 'default'
};
//# sourceMappingURL=Notification.js.map
import React from 'react';
import { Paragraph } from '../Typography/Paragraph';
import { StyledNotificationButton, StyledNotificationButtonIcon, StyledNotificationContainer, StyledNotificationContentContainer, StyledNotificationFooter, StyledNotificationSpan, StyledNotificationTitle, StyledNotificationTitleContainer, StyledNotificationTitleIcon } from './Notification.style';
export var Notification = function (props) {
    var isPrimaryButtonFullWidth = props.isPrimaryButtonFullWidth, children = props.children, title = props.title, className = props.className, size = props.size, type = props.type, primaryButtonIcon = props.primaryButtonIcon, secondaryButton = props.secondaryButton, primaryButton = props.primaryButton;
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
        React.createElement(StyledNotificationTitleContainer, { type: type, className: className },
            iconTitle(),
            title && (React.createElement(StyledNotificationTitle, { type: type, className: className }, title)),
            React.createElement(StyledNotificationTitleIcon, { name: 'close', type: type, className: className })),
        React.createElement(StyledNotificationContentContainer, { type: type, size: size, className: className },
            React.createElement(Paragraph, null, children)),
        React.createElement(StyledNotificationFooter, { type: type, size: size, className: className },
            secondaryButton && !isPrimaryButtonFullWidth && (React.createElement(StyledNotificationButton, { className: className }, secondaryButton)),
            React.createElement(StyledNotificationButton, { primaryButtonIcon: primaryButtonIcon, secondaryButton: secondaryButton, isFullWidth: isPrimaryButtonFullWidth, className: className },
                primaryButtonIcon && (React.createElement(StyledNotificationButtonIcon, { name: primaryButtonIcon, className: className })),
                React.createElement(StyledNotificationSpan, null, primaryButton)),
            React.createElement(StyledNotificationSpan, null))));
};
Notification.defaultProps = {
    title: 'Notification',
    type: 'default'
};
//# sourceMappingURL=Notification.js.map
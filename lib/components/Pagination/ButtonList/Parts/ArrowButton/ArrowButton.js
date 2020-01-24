import React from 'react';
import { Icon } from '../../../../Icon';
import { StyledPaginationButton } from '../../ButtonList.style';
export var ArrowButton = function (props) {
    var isDisabled = props.isDisabled, isSimple = props.isSimple, onClick = props.onClick, unique = props.unique, visible = props.visible, size = props.size;
    var map = function (key) {
        switch (key) {
            case '-1':
                return 'arrowLeft';
            case '-2':
                return 'arrowRight';
            case '-3':
                return 'arrowDoubleLeft';
            case '-4':
                return 'arrowDoubleRight';
        }
        return 'arrowDoubleRight';
    };
    return visible ? (React.createElement("li", { key: unique },
        React.createElement(StyledPaginationButton, { onClick: onClick, isDisabled: isDisabled, isSimple: isSimple, size: size },
            React.createElement(Icon, { name: map(unique.toString()) })))) : null;
};
//# sourceMappingURL=ArrowButton.js.map
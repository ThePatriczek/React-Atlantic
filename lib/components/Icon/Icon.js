import * as React from 'react';
import * as Icons from '../../Icons';
import { StyledIcon } from './Icon.style';
export var Icon = function (props) {
    var name = props.name;
    switch (name) {
        case 'arrowUp':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.ArrowUp, null)));
        case 'arrowDoubleUp':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.ArrowDoubleUp, null)));
        case 'arrowRight':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.ArrowRight, null)));
        case 'arrowDoubleRight':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.ArrowDoubleRight, null)));
        case 'arrowDown':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.ArrowDown, null)));
        case 'arrowDoubleDown':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.ArrowDoubleDown, null)));
        case 'arrowLeft':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.ArrowLeft, null)));
        case 'arrowDoubleLeft':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.ArrowDoubleLeft, null)));
        case 'hamburger':
            return (React.createElement(StyledIcon, null,
                React.createElement(Icons.Hamburger, null)));
    }
    return React.createElement("i", null);
};
//# sourceMappingURL=Icon.js.map
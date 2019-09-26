import * as React from 'react';
import * as Icons from '../../Icons';
import { StyledIcon } from './Icon.style';

export var Icon = function (props) {
    var name = props.name, isRotating = props.isRotating, className = props.className;
    var Component = React.createElement("i", { className: className });
    switch (name) {
        case 'arrowUp':
            Component = React.createElement(Icons.ArrowUp, null);
            break;
        case 'arrowDoubleUp':
            Component = React.createElement(Icons.ArrowDoubleUp, null);
            break;
        case 'arrowRight':
            Component = React.createElement(Icons.ArrowRight, null);
            break;
        case 'arrowDoubleRight':
            Component = React.createElement(Icons.ArrowDoubleRight, null);
            break;
        case 'arrowDown':
            Component = React.createElement(Icons.ArrowDown, null);
            break;
        case 'arrowDoubleDown':
            Component = React.createElement(Icons.ArrowDoubleDown, null);
            break;
        case 'arrowLeft':
            Component = React.createElement(Icons.ArrowLeft, null);
            break;
        case 'arrowDoubleLeft':
            Component = React.createElement(Icons.ArrowDoubleLeft, null);
            break;
        case 'hamburger':
            Component = React.createElement(Icons.Hamburger, null);
            break;
        case 'loading':
            Component = React.createElement(Icons.Loading, null);
            break;
        case 'edit':
            Component = React.createElement(Icons.Edit, null);
            break;
        case 'copy':
            Component = React.createElement(Icons.Copy, null);
            break;
    }
    return (React.createElement(StyledIcon, { isRotating: isRotating, className: className }, Component));
};
//# sourceMappingURL=Icon.js.map
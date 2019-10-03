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
        case 'check':
            Component = React.createElement(Icons.Check, null);
            break;
        case 'clear':
            Component = React.createElement(Icons.Clear, null);
            break;
        case 'close':
            Component = React.createElement(Icons.Close, null);
            break;
        case 'export':
            Component = React.createElement(Icons.Export, null);
            break;
        case 'eye':
            Component = React.createElement(Icons.Eye, null);
            break;
        case 'eyeSlash':
            Component = React.createElement(Icons.EyeSlash, null);
            break;
        case 'import':
            Component = React.createElement(Icons.Import, null);
            break;
        case 'info':
            Component = React.createElement(Icons.Info, null);
            break;
        case 'key':
            Component = React.createElement(Icons.Key, null);
            break;
        case 'license':
            Component = React.createElement(Icons.License, null);
            break;
        case 'logout':
            Component = React.createElement(Icons.Logout, null);
            break;
        case 'plus':
            Component = React.createElement(Icons.Plus, null);
            break;
        case 'search':
            Component = React.createElement(Icons.Search, null);
            break;
        case 'trash':
            Component = React.createElement(Icons.Trash, null);
            break;
        case 'upload':
            Component = React.createElement(Icons.Upload, null);
            break;
        case 'user':
            Component = React.createElement(Icons.User, null);
            break;
        case 'users':
            Component = React.createElement(Icons.Users, null);
            break;
        case 'enter':
            Component = React.createElement(Icons.Enter, null);
            break;
    }
    return (React.createElement(StyledIcon, { isRotating: isRotating, className: className }, Component));
};
//# sourceMappingURL=Icon.js.map
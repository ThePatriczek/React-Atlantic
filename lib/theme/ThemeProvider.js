import * as React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
export var ThemeProvider = function (props) {
    var theme = props.theme, children = props.children;
    return React.createElement(Provider, { theme: theme }, children);
};
//# sourceMappingURL=ThemeProvider.js.map
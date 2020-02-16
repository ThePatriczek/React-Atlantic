import React from 'react';
import { ThemeProvider } from '../../theme';
import { DeviceProvider } from '../Device';
export var AtlanticProvider = function (props) {
    var theme = props.theme, children = props.children, currentDevice = props.currentDevice, devices = props.devices;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(DeviceProvider, { currentDevice: currentDevice, devices: devices }, children)));
};
//# sourceMappingURL=Atlantic.js.map
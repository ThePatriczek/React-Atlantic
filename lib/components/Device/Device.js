import * as React from 'react';
import { useDevice } from '../../context/Device';
export var Device = function (_a) {
    var children = _a.children, devices = _a.devices;
    var currentDevice = useDevice().currentDevice;
    if (devices.includes(currentDevice)) {
        return React.createElement(React.Fragment, null, children);
    }
    return null;
};
//# sourceMappingURL=Device.js.map
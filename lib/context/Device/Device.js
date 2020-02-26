var _this = this;
import * as React from 'react';
import { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';
var devices = new Map([
    ['mobile', { max: 480 }],
    ['tabletVertical', { min: 481, max: 900 }],
    ['tabletHorizontal', { min: 901, max: 1200 }],
    ['laptop', { min: 1201, max: 1800 }],
    ['desktop', { min: 1801 }]
]);
var defaultValue = {
    devices: devices,
    currentDevice: 'desktop'
};
export var DeviceContext = createContext({
    currentDevice: defaultValue.currentDevice,
    isTouchable: false
});
export var useDevice = function () {
    return useContext(DeviceContext);
};
export var DeviceProvider = function (props) {
    var children = props.children;
    var devices = props.devices || defaultValue.devices;
    var _a = useState(props.currentDevice || defaultValue.currentDevice), currentDevice = _a[0], setCurrentDevice = _a[1];
    var getCurrentDevice = function (clientWidth) {
        var _a, _b, _c, _d, _e;
        var mobile = devices.get('mobile');
        var tabletVertical = devices.get('tabletVertical');
        var tabletHorizontal = devices.get('tabletHorizontal');
        var laptop = devices.get('laptop');
        var desktop = devices.get('desktop');
        if (((_a = mobile) === null || _a === void 0 ? void 0 : _a.max) && clientWidth <= mobile.max) {
            return 'mobile';
        }
        else if (((_b = tabletVertical) === null || _b === void 0 ? void 0 : _b.min) &&
            tabletVertical.max &&
            clientWidth >= tabletVertical.min &&
            clientWidth <= tabletVertical.max) {
            return 'tabletVertical';
        }
        else if (((_c = tabletHorizontal) === null || _c === void 0 ? void 0 : _c.min) &&
            tabletHorizontal.max &&
            clientWidth >= tabletHorizontal.min &&
            clientWidth <= tabletHorizontal.max) {
            return 'tabletHorizontal';
        }
        else if (((_d = laptop) === null || _d === void 0 ? void 0 : _d.min) &&
            laptop.max &&
            clientWidth >= laptop.min &&
            clientWidth <= laptop.max) {
            return 'laptop';
        }
        else if (((_e = desktop) === null || _e === void 0 ? void 0 : _e.min) && clientWidth >= desktop.min) {
            return 'desktop';
        }
        throw new Error("Unknown device");
    };
    var getCurrentDeviceMemoized = useCallback(getCurrentDevice, []);
    useLayoutEffect(function () {
        if (window) {
            window.onresize = debounce(onResize, 50);
            onResize();
            return function () {
                window.onresize = null;
            };
        }
        return function () { return null; };
    }, []);
    var onResize = function () {
        if (window) {
            var device = getCurrentDeviceMemoized(window.innerWidth);
            setCurrentDevice(device);
        }
    };
    var isTouchable = window &&
        currentDevice !== 'laptop' &&
        currentDevice !== 'desktop' &&
        ('ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0);
    return (React.createElement(DeviceContext.Provider, { value: {
            currentDevice: currentDevice,
            isTouchable: isTouchable
        } }, children));
};
var debounce = function (cb, interval) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = null;
            // @ts-ignore
            cb.apply(_this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, interval);
    };
};
//# sourceMappingURL=Device.js.map
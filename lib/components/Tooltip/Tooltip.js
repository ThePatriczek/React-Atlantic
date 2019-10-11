var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import ReactTooltip from 'react-tooltip';
export var Tooltip = function (props) {
    return React.createElement(ReactTooltip, __assign({}, props), props.children);
};
Tooltip.defaultProps = {
    place: 'top',
    type: 'dark',
    effect: 'solid'
};
Tooltip.show = function (target) { return ReactTooltip.show(target); };
Tooltip.hide = function (target) { return ReactTooltip.hide(target); };
Tooltip.rebuild = function () { return ReactTooltip.rebuild(); };
//# sourceMappingURL=Tooltip.js.map
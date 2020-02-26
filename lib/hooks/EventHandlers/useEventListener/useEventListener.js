import { useEffect } from 'react';
export var useEventListener = function (props) {
    useEffect(function () {
        var _a, _b, _c, _d, _e;
        if ((_a = props.ref) === null || _a === void 0 ? void 0 : _a.current) {
            if (props.onMouseDown) {
                (_b = window) === null || _b === void 0 ? void 0 : _b.addEventListener('mousedown', onMouseDown);
            }
            if (props.onKeyDown) {
                (_c = window) === null || _c === void 0 ? void 0 : _c.addEventListener('keydown', onKeyDown);
            }
            if (props.onEnter) {
                (_d = window) === null || _d === void 0 ? void 0 : _d.addEventListener('keydown', onEnter);
            }
            if (props.onEscape) {
                (_e = window) === null || _e === void 0 ? void 0 : _e.addEventListener('keydown', onEscape);
            }
        }
        return function () {
            var _a, _b, _c, _d;
            if (props.onMouseDown) {
                (_a = window) === null || _a === void 0 ? void 0 : _a.removeEventListener('mousedown', onMouseDown);
            }
            if (props.onKeyDown) {
                (_b = window) === null || _b === void 0 ? void 0 : _b.removeEventListener('keydown', onKeyDown);
            }
            if (props.onEnter) {
                (_c = window) === null || _c === void 0 ? void 0 : _c.removeEventListener('keydown', onEnter);
            }
            if (props.onEscape) {
                (_d = window) === null || _d === void 0 ? void 0 : _d.removeEventListener('keydown', onEscape);
            }
        };
    }, [props.deps]);
    var onMouseDown = function (e) {
        var _a, _b;
        if (!((_b = (_a = props.ref) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
            if (props.onMouseDown) {
                props.onMouseDown();
            }
        }
    };
    var onKeyDown = function (e) {
        if (props.onKeyDown) {
            props.onKeyDown();
        }
    };
    var onEnter = function (e) {
        if (e.key === 'Enter') {
            if (props.onEnter) {
                props.onEnter();
            }
        }
    };
    var onEscape = function (e) {
        if (e.key === 'Escape') {
            if (props.onEscape) {
                props.onEscape();
            }
        }
    };
    return { onKeyDown: onKeyDown, onMouseDown: onMouseDown, onEscape: onEscape, onEnter: onEnter };
};
//# sourceMappingURL=useEventListener.js.map
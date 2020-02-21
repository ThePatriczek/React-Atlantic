import { useEffect } from 'react';
export var useEventListener = function (props) {
    useEffect(function () {
        var _a;
        if ((_a = props.ref) === null || _a === void 0 ? void 0 : _a.current) {
            if (props.onMouseDown) {
                window.addEventListener('mousedown', onMouseDown);
            }
            if (props.onKeyDown) {
                window.addEventListener('keydown', onKeyDown);
            }
            if (props.onEnter) {
                window.addEventListener('keydown', onEnter);
            }
            if (props.onEscape) {
                window.addEventListener('keydown', onEscape);
            }
        }
        return function () {
            if (props.onMouseDown) {
                window.removeEventListener('mousedown', onMouseDown);
            }
            if (props.onKeyDown) {
                window.removeEventListener('keydown', onKeyDown);
            }
            if (props.onEnter) {
                window.removeEventListener('keydown', onEnter);
            }
            if (props.onEscape) {
                window.removeEventListener('keydown', onEscape);
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
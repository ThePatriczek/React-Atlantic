import { useCallback } from 'react';
export var useClick = function (props) {
    var onClick = useCallback(function (e) {
        var _a;
        if (props.onClick) {
            (_a = e) === null || _a === void 0 ? void 0 : _a.preventDefault();
            props.onClick();
        }
    }, [props.deps]);
    return {
        onClick: onClick
    };
};
//# sourceMappingURL=useClick.js.map
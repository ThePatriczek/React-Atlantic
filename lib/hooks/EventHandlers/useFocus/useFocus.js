import { useCallback, useState } from 'react';
export var useFocus = function () {
    var _a = useState(false), isFocused = _a[0], setFocused = _a[1];
    var onFocus = useCallback(function (e, onFocus) {
        setFocused(true);
        if (onFocus) {
            onFocus();
        }
    }, [isFocused]);
    var onBlur = useCallback(function (e, onBlur) {
        setFocused(false);
        if (onBlur) {
            onBlur();
        }
    }, [isFocused]);
    return {
        onFocus: onFocus,
        onBlur: onBlur,
        isFocused: isFocused
    };
};
//# sourceMappingURL=useFocus.js.map
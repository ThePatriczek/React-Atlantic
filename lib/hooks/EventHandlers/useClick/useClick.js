import { useCallback } from 'react';
export var useClick = function (props) {
    var onClick = useCallback(function (e) {
        if (props.onClick) {
            if (e) {
                e.preventDefault();
            }
            props.onClick();
        }
    }, [props.deps]);
    return {
        onClick: onClick
    };
};
//# sourceMappingURL=useClick.js.map
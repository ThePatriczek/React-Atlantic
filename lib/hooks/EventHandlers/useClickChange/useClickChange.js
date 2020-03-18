import { useCallback, useState } from 'react';
export var useClickChange = function (props) {
    var _a = useState(props.isDefaultChecked), isChecked = _a[0], setChecked = _a[1];
    var onChangeClick = useCallback(function (e, isPartiallyChecked) {
        var _a;
        if (e.type === 'click') {
            e.preventDefault();
        }
        if (!props.isDisabled) {
            if (props.isChecked === undefined) {
                if (!isPartiallyChecked) {
                    setChecked(e.type === 'click' ? !isChecked : (_a = e) === null || _a === void 0 ? void 0 : _a.target.checked);
                }
                if (props.onChange) {
                    props.onChange(props.handlersWithEvent ? e : !isChecked);
                }
            }
            else {
                if (props.onChange) {
                    props.onChange(props.handlersWithEvent ? e : !props.isChecked);
                }
            }
        }
    }, [isChecked, props.deps]);
    return {
        onChangeClick: onChangeClick,
        isChecked: isChecked
    };
};
//# sourceMappingURL=useClickChange.js.map
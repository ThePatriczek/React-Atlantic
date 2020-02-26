import * as easings from 'd3-ease';
import * as React from 'react';
import { useRef } from 'react';
import { useChain, useSpring, useTrail } from 'react-spring/web.cjs';
import { useClickChange } from '../../hooks/EventHandlers/useClickChange';
import { CheckSimple } from '../../Icons';
import { HiddenCheckbox, StyledCheckboxIcon, StyledCheckboxInputShown, StyledCheckboxLabel, StyledCheckboxMark, StyledCheckboxSpan } from './Checkbox.style';
export var Checkbox = function (props) {
    var isPartiallyChecked = props.isPartiallyChecked, isDefaultChecked = props.isDefaultChecked, position = props.position, isDisabled = props.isDisabled, className = props.className, children = props.children;
    var _a = useClickChange({
        isDisabled: isDisabled,
        isDefaultChecked: isDefaultChecked,
        deps: [props.isChecked],
        isChecked: props.isChecked,
        onChange: props.onChange
    }), onChangeClick = _a.onChangeClick, isChecked = _a.isChecked;
    var springRef = useRef(null);
    var springProps = useSpring({
        ref: springRef,
        x: props.isChecked || isChecked ? 0 : 100,
        config: { easing: function (t) { return easings.easeCubicIn(t); }, duration: 125 }
    });
    var trailRef = useRef(null);
    var trail = useTrail(1, {
        ref: trailRef,
        opacity: isPartiallyChecked || props.isChecked || isChecked ? 1 : 0,
        config: { duration: 125 }
    });
    useChain(props.isChecked || isChecked
        ? [trailRef, springRef]
        : [springRef, trailRef], [0, props.isChecked || isChecked ? 0.075 : 0.225]);
    return (React.createElement(StyledCheckboxLabel, { onClick: function (e) { return onChangeClick(e, isPartiallyChecked); }, isChecked: props.isChecked || isChecked, isDisabled: isDisabled, className: className },
        position === 'right' && (React.createElement(StyledCheckboxSpan, { position: position, isDisabled: isDisabled }, children)),
        React.createElement(HiddenCheckbox, { checked: props.isChecked || isChecked, disabled: isDisabled }),
        React.createElement(StyledCheckboxInputShown, { isDisabled: isDisabled }, trail.map(function (style, index) { return (React.createElement(StyledCheckboxMark, { key: index, style: style, isDisabled: isDisabled, isChecked: props.isChecked || isChecked, isPartiallyChecked: isPartiallyChecked },
            React.createElement(StyledCheckboxIcon, { isDisabled: isDisabled, isChecked: props.isChecked || isChecked, isPartiallyChecked: isPartiallyChecked },
                React.createElement(CheckSimple, { x: springProps.x })))); })),
        position === 'left' && (React.createElement(StyledCheckboxSpan, { position: position, isDisabled: isDisabled }, children))));
};
Checkbox.defaultProps = {
    position: 'left'
};
//# sourceMappingURL=Checkbox.js.map
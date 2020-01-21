import { Option } from './Option';
import { Select } from './Select';
var getChild = function (child, key, error) {
    if (!child.type || child.type.displayName !== Option.displayName) {
        throw Error(error);
    }
    var props = child.props;
    var value = props.value, children = props.children, className = props.className;
    return { value: value, label: children, className: className };
};
export var checkChildrenAndOptions = function (children, options) {
    var items = [];
    if (children) {
        if (Array.isArray(children)) {
            items = children;
        }
        else {
            items.push(children);
        }
        items = items.map(function (item, key) {
            if (item) {
                if (Array.isArray(item)) {
                    return item.map(function (child, childKey) {
                        return getChild(child, childKey, Select.displayName + " accepts only " + Option.displayName + " components!");
                    });
                }
                return getChild(item, key, Select.displayName + " accepts only " + Option.displayName + " components!");
            }
            return null;
        });
    }
    else if (options) {
        items = options;
    }
    return items;
};
export var isElementInViewport = function (el) {
    var bounding = el.getBoundingClientRect();
    return (bounding.top > 0 &&
        bounding.left > 0 &&
        bounding.bottom <
            (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right < (window.innerWidth || document.documentElement.clientWidth));
};
export var getPositionOfElementInViewport = function (el) {
    var bounding = el.getBoundingClientRect();
    if (bounding.top < 0) {
        return 'top';
    }
    if (bounding.left < 0) {
        return 'left';
    }
    if (bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight)) {
        return 'bottom';
    }
    if (bounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
        return 'right';
    }
    return null;
};
//# sourceMappingURL=Select.utils.js.map
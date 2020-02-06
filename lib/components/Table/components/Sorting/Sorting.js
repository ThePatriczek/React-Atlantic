import React from 'react';
import { Icon } from '../../../Icon';
import { StyledSorting } from './Sorting.style';
export var Sorting = function (props) {
    var order = props.order;
    if (order === 'asc') {
        return (React.createElement(StyledSorting, null,
            React.createElement(Icon, { name: 'arrowUp' })));
    }
    else if (order === 'desc') {
        return (React.createElement(StyledSorting, null,
            React.createElement(Icon, { name: 'arrowDown' })));
    }
    return (React.createElement(StyledSorting, null,
        React.createElement(Icon, { name: 'arrowsVertical' })));
};
//# sourceMappingURL=Sorting.js.map
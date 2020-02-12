import React from 'react';
import { DeleteAllButton, StyledChosenHeader, StyledDeleteOneButton, StyledDeleteOneIcon, StyledTransferDeleteAllButtonIcon, StyledTransferLi, StyledTransferSide, StyledTransferSpan, StyledTransferUl } from '../Transfer.style';
import { transferItemsRender } from '../Transfer.utils';
var RightSide = function (props) {
    var _a;
    var chosenComponent = props.chosenComponent, checkedItems = props.checkedItems, isHalfOpen = props.isHalfOpen, isOpen = props.isOpen, items = props.items, uncheckAll = props.uncheckAll, size = props.size, deleteAllText = props.deleteAllText, onChange = props.onChange, isFullWidth = props.isFullWidth, direction = props.direction;
    return (React.createElement(StyledTransferSide, { direction: direction, isHalfOpen: isHalfOpen, isOpen: isOpen, isFullWidth: isFullWidth },
        React.createElement(StyledChosenHeader, { size: size },
            React.createElement(StyledTransferSpan, null, (_a = chosenComponent) === null || _a === void 0 ? void 0 : _a(checkedItems.length, items.length)),
            React.createElement(DeleteAllButton, { isTransparent: true, globalSize: size, size: 'small', type: 'error', onClick: function () {
                    uncheckAll();
                } },
                size === 'small' && (React.createElement(StyledTransferDeleteAllButtonIcon, { name: 'trash', size: size })),
                size !== 'small' && deleteAllText)),
        React.createElement(StyledTransferUl, null, checkedItems.map(function (item) { return (React.createElement(StyledTransferLi, { size: size, key: item.value, onClick: function () {
                onChange(item.value, false);
            } },
            transferItemsRender(item),
            React.createElement(StyledDeleteOneButton, { size: size },
                React.createElement(StyledDeleteOneIcon, { name: 'error' })))); }))));
};
export default RightSide;
//# sourceMappingURL=RightSide.js.map
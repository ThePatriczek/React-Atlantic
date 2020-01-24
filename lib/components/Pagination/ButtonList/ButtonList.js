import React from 'react';
import { ButtonPaginationText, StyledNormalPaginationButton, StyledSimplePaginationButton } from './ButtonList.style';
import { ArrowButton } from './Parts/ArrowButton';
import { ThreeDots } from './Parts/ThreeDots';
export var ButtonList = function (props) {
    var count = props.count, isDisabled = props.isDisabled, showDoubleArrowJumper = props.showDoubleArrowJumper, showArrowJumper = props.showArrowJumper, showThreeDots = props.showThreeDots, currentPage = props.currentPage, isSimple = props.isSimple, textLeft = props.textLeft, textRight = props.textRight, onChange = props.onChange, size = props.size;
    var disabledMaxCondition = isDisabled || currentPage === count || count === 0;
    var disabledMinCondition = isDisabled || currentPage === 1 || count === 0;
    var onSingleArrowClick = function (right) {
        right ? onChange(currentPage + 1) : onChange(currentPage - 1);
    };
    var onDoubleArrowClick = function (right) {
        right ? onChange(count) : onChange(1);
    };
    var onStepClick = function (right) {
        var step = 5;
        right
            ? currentPage + 5 > count
                ? onChange(count)
                : onChange(currentPage + step)
            : currentPage - 5 < 1
                ? onChange(1)
                : onChange(currentPage - 5);
    };
    var middleScenario = function (list) {
        if (showThreeDots && Math.abs(currentPage - 1) > 3) {
            list.push(-1);
        }
        for (var i = currentPage - 2; i <= currentPage + 2; i++) {
            list.push(i);
        }
        if (showThreeDots && Math.abs(currentPage - count) > 3) {
            list.push(-1);
        }
    };
    var noMiddleScenario = function (list, right) {
        if (count > 6) {
            if (right && showThreeDots) {
                list.push(-1);
            }
            for (var i = right ? count - 4 : 2; i < (right ? count : 1 + 5); i++) {
                list.push(i);
            }
            if (!right && showThreeDots) {
                list.push(-1);
            }
        }
        else {
            for (var i = 2; i < count; i++) {
                list.push(i);
            }
        }
    };
    var generateArray = function () {
        var result = [];
        count === 0 ? result.push(0) : result.push(1);
        if (Math.abs(currentPage - 1) >= 3 && Math.abs(currentPage - count) >= 3) {
            middleScenario(result);
        }
        else {
            noMiddleScenario(result, Math.abs(currentPage - 1) > Math.abs(currentPage - count));
        }
        if (count !== 1 && count !== 0) {
            result.push(count);
        }
        return result;
    };
    var array = generateArray();
    return (React.createElement("ul", null,
        React.createElement(ArrowButton, { onClick: function () { return onDoubleArrowClick(false); }, isDisabled: isDisabled || disabledMinCondition, isSimple: isSimple, unique: -3, visible: showDoubleArrowJumper, size: size }),
        React.createElement(ArrowButton, { onClick: function () { return onSingleArrowClick(false); }, isDisabled: isDisabled || disabledMinCondition, isSimple: isSimple, unique: -1, visible: showArrowJumper, size: size }),
        array.map(function (item, key) {
            return item === -1 ? (React.createElement(ThreeDots, { text: key > array.length / 2 ? textRight : textLeft, unique: -key - 5, onClick: isDisabled ? undefined : onStepClick, isRight: key > array.length / 2 })) : !isSimple ? (React.createElement("li", { key: item },
                React.createElement(StyledNormalPaginationButton, { onClick: function () { return onChange(item); }, isActive: item === currentPage, isDisabled: isDisabled || item === 0, size: size },
                    React.createElement(ButtonPaginationText, null, item.toString())))) : (React.createElement("li", { key: item },
                React.createElement(StyledSimplePaginationButton, { onClick: function () { return onChange(item); }, isActive: item === currentPage, isDisabled: isDisabled || item === 0, isSimple: true, size: size },
                    React.createElement(ButtonPaginationText, null, item.toString()))));
        }),
        React.createElement(ArrowButton, { onClick: function () { return onSingleArrowClick(true); }, isDisabled: isDisabled || disabledMaxCondition, isSimple: isSimple, unique: -2, visible: showArrowJumper, size: size }),
        React.createElement(ArrowButton, { onClick: function () { return onDoubleArrowClick(true); }, isDisabled: isDisabled || disabledMaxCondition, isSimple: isSimple, unique: -4, visible: showDoubleArrowJumper, size: size })));
};
//# sourceMappingURL=ButtonList.js.map
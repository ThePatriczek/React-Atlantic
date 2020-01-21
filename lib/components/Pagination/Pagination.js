import React, { useEffect, useState } from 'react';
import { ButtonList } from './ButtonList';
import { StyledPagination } from './Pagination.style';
import { QuickJumper } from './QuickJumper';
import { SizeChanger } from './SizeChanger';
export var Pagination = function (props) {
    var current = props.current, defaultCurrent = props.defaultCurrent, isDisabled = props.isDisabled, pageSizeOptions = props.pageSizeOptions, showQuickJumper = props.showQuickJumper, hideArrowJumper = props.hideArrowJumper, showDoubleArrowJumper = props.showDoubleArrowJumper, showSizeChanger = props.showSizeChanger, isSimple = props.isSimple, className = props.className, total = props.total, showThreeDots = props.showThreeDots, sizeChangerText = props.sizeChangerText, quickJumperText = props.quickJumperText, tooltipTextRight = props.tooltipTextRight, tooltipTextLeft = props.tooltipTextLeft;
    var _a = useState(defaultCurrent), currentPage = _a[0], setPage = _a[1];
    var _b = useState(pageSizeOptions ? pageSizeOptions[0] : props.pageSize), pageSize = _b[0], setPageSize = _b[1];
    useEffect(function () {
        if (props.pageSize) {
            setPageSize(props.pageSize);
        }
    }, [props.pageSize]);
    useEffect(function () {
        if (current) {
            setPage(current);
        }
    }, [current]);
    useEffect(function () {
        if (currentPage > Math.ceil(total / pageSize)) {
            setPage(Math.ceil(total / pageSize));
        }
    }, [pageSize]);
    var onSizeChange = function (pageSize) {
        var _a, _b;
        var page = 0;
        if (currentPage > Math.ceil(total / pageSize)) {
            page = Math.ceil(total / pageSize);
        }
        setPageSize(pageSize);
        (_b = (_a = props).onSizeChange) === null || _b === void 0 ? void 0 : _b.call(_a, page, pageSize);
    };
    var onChange = function (currentPage) {
        var _a, _b;
        setPage(currentPage);
        (_b = (_a = props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, currentPage, pageSize);
    };
    var count = Math.ceil(total / pageSize);
    return (React.createElement(StyledPagination, { isDisabled: isDisabled, total: total, className: className, showQuickJumper: showQuickJumper, hideArrowJumper: hideArrowJumper, showDoubleArrowJumper: showDoubleArrowJumper, showSizeChanger: showSizeChanger, showThreeDots: showThreeDots, isSimple: isSimple, defaultCurrent: defaultCurrent, pageSize: pageSize, quickJumperText: quickJumperText, sizeChangerText: sizeChangerText, tooltipTextRight: tooltipTextRight, tooltipTextLeft: tooltipTextLeft },
        React.createElement(ButtonList, { isSimple: !!isSimple, currentPage: currentPage, showArrowJumper: !hideArrowJumper, showDoubleArrowJumper: !!showDoubleArrowJumper, isDisabled: !!isDisabled || count === 0, count: count, showThreeDots: !!showThreeDots, textRight: tooltipTextRight, textLeft: tooltipTextLeft, onChange: onChange }),
        showQuickJumper && (React.createElement(QuickJumper, { setPage: setPage, count: count, isDisabled: !!isDisabled || count === 0, text: quickJumperText, onChange: onChange })),
        showSizeChanger && (React.createElement(SizeChanger, { pageSize: pageSize, setPageSize: setPageSize, isDisabled: !!isDisabled || count === 0, pageSizeOptions: pageSizeOptions, text: sizeChangerText, onSizeChange: onSizeChange }))));
};
Pagination.defaultProps = {
    pageSizeOptions: [10, 20, 30, 40],
    defaultCurrent: 1,
    pageSize: 20,
    total: 0,
    showThreeDots: true,
    tooltipTextRight: "Next 5 pages",
    tooltipTextLeft: "Previous 5 pages",
    sizeChangerText: "page",
    quickJumperText: "Go to"
};
Pagination.displayName = "Pagination";
//# sourceMappingURL=Pagination.js.map
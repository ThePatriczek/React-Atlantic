var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect, useState } from 'react';
import { ButtonList } from './ButtonList';
import { StyledPagination } from './Pagination.style';
import { QuickJumper } from './QuickJumper';
import { SizeChanger } from './SizeChanger';
export var Pagination = function (props) {
    var defaultCurrent = props.defaultCurrent, isDisabled = props.isDisabled, pageSizeOptions = props.pageSizeOptions, showQuickJumper = props.showQuickJumper, hideArrowJumper = props.hideArrowJumper, showDoubleArrowJumper = props.showDoubleArrowJumper, showSizeChanger = props.showSizeChanger, isSimple = props.isSimple, className = props.className, total = props.total, showThreeDots = props.showThreeDots, sizeChangerText = props.sizeChangerText, quickJumperText = props.quickJumperText, tooltipTextRight = props.tooltipTextRight, tooltipTextLeft = props.tooltipTextLeft, size = props.size;
    var _a = useState(defaultCurrent || 1), currentPage = _a[0], setPage = _a[1];
    var _b = useState(pageSizeOptions ? pageSizeOptions[0] : props.pageSize || 20), pageSize = _b[0], setPageSize = _b[1];
    useEffect(function () {
        if (props.pageSize) {
            setPageSize(props.pageSize);
        }
    }, [props.pageSize]);
    useEffect(function () {
        if (props.current) {
            setPage(props.current);
        }
    }, [props.current]);
    useEffect(function () {
        if (total && currentPage > Math.ceil(total / pageSize)) {
            setPage(Math.ceil(total / pageSize));
        }
    }, [pageSize]);
    var onSizeChange = function (pageSize) {
        var _a, _b;
        var page = currentPage;
        if (total && currentPage > Math.ceil(total / pageSize)) {
            page = Math.ceil(total / pageSize);
        }
        setPageSize(pageSize);
        (_b = (_a = props).onSizeChange) === null || _b === void 0 ? void 0 : _b.call(_a, page, pageSize);
    };
    var onChange = function (currentPage) {
        var _a, _b;
        setPage(currentPage);
        (_b = (_a = props).onPageChange) === null || _b === void 0 ? void 0 : _b.call(_a, currentPage, pageSize);
    };
    var count = total ? Math.ceil(total / pageSize) : 0;
    return (React.createElement(StyledPagination, __assign({}, props),
        React.createElement(ButtonList, { isSimple: !!isSimple, currentPage: currentPage, showArrowJumper: !hideArrowJumper, showDoubleArrowJumper: !!showDoubleArrowJumper, isDisabled: !!isDisabled || count === 0, count: count, showThreeDots: !!showThreeDots, textRight: tooltipTextRight, textLeft: tooltipTextLeft, onChange: onChange, size: size || 'medium' }),
        showQuickJumper && (React.createElement(QuickJumper, { setPage: setPage, count: count, isDisabled: !!isDisabled || count === 0, text: quickJumperText, onChange: onChange, size: size || 'medium' })),
        showSizeChanger && (React.createElement(SizeChanger, { pageSize: pageSize, setPageSize: setPageSize, isDisabled: !!isDisabled || count === 0, pageSizeOptions: pageSizeOptions, text: sizeChangerText, onSizeChange: onSizeChange, size: size || 'medium' }))));
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
    quickJumperText: "Go to",
    size: 'medium'
};
Pagination.displayName = "Pagination";
//# sourceMappingURL=Pagination.js.map
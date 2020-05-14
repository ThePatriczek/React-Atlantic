import cs from 'date-fns/locale/cs';
import * as React from 'react';
import { useRef, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import { Input } from '../Input';
import { StyledReactDatePicker, StyledReactDatePickerButton, StyledReactDatePickerButtonContainer, StyledReactDatePickerContainer } from './DatePicker.style';
import { DatePickerHeader } from './DatePickerHeader/DatePickerHeader';
registerLocale('cs', cs);
export var DatePicker = function (props) {
    var id = props.id, className = props.className, selected = props.selected, placeholder = props.placeholder, onChange = props.onChange, onKeyDown = props.onKeyDown, maxDate = props.maxDate, minDate = props.minDate, isFullWidth = props.isFullWidth;
    var _a = useState(selected), date = _a[0], setDate = _a[1];
    var datePickerRef = useRef();
    var selectToday = function () {
        var _a;
        setDate(new Date());
        (_a = datePickerRef.current) === null || _a === void 0 ? void 0 : _a.setOpen(false);
        if (onChange) {
            onChange(new Date());
        }
    };
    var handleChange = function (date) {
        setDate(date);
        if (onChange) {
            onChange(date);
        }
    };
    return (React.createElement(StyledReactDatePickerContainer, { isFullWidth: isFullWidth },
        React.createElement(StyledReactDatePicker, { renderCustomHeader: function (_a) {
                var date = _a.date, decreaseMonth = _a.decreaseMonth, increaseMonth = _a.increaseMonth, prevMonthButtonDisabled = _a.prevMonthButtonDisabled, nextMonthButtonDisabled = _a.nextMonthButtonDisabled, changeYear = _a.changeYear;
                return DatePickerHeader({
                    date: date,
                    decreaseMonth: decreaseMonth,
                    increaseMonth: increaseMonth,
                    prevMonthButtonDisabled: prevMonthButtonDisabled,
                    nextMonthButtonDisabled: nextMonthButtonDisabled,
                    changeYear: changeYear
                });
            }, customInput: React.createElement(Input, { iconLeft: 'calendarAlt', handlersWithEvent: true, isFullWidth: isFullWidth }), selected: date, onChange: handleChange, id: id, locale: "cs", className: className, dateFormat: "d.M.yyyy", placeholderText: placeholder, dropdownMode: "select", autoComplete: "off", disabledKeyboardNavigation: true, maxDate: maxDate, minDate: minDate, onKeyDown: onKeyDown, showPopperArrow: false, ref: datePickerRef },
            React.createElement(StyledReactDatePickerButtonContainer, null,
                React.createElement(StyledReactDatePickerButton, { isFullWidth: true, onClick: selectToday }, "Zvolit dne\u0161n\u00ED datum")))));
};
//# sourceMappingURL=DatePicker.js.map
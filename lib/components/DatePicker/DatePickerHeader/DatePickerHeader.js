import React from 'react';
import { Icon } from '../../Icon';
import { StyledReactDatePickerButtonMoveMonth, StyledReactDatePickerButtonMoveYear, StyledReactDatePickerHeaderContainer, StyledReactDatePickerMonthAndDate, StyledReactDatePickerTriangle } from './DatePickerHeader.style';
export var DatePickerHeader = function (props) {
    var months = [
        'Leden',
        'Únor',
        'Březen',
        'Duben',
        'Květen',
        'Červen',
        'Červenec',
        'Srpen',
        'Září',
        'Říjen',
        'Listopad',
        'Prosinec'
    ];
    var date = props.date, decreaseMonth = props.decreaseMonth, increaseMonth = props.increaseMonth, prevMonthButtonDisabled = props.prevMonthButtonDisabled, nextMonthButtonDisabled = props.nextMonthButtonDisabled, changeYear = props.changeYear;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledReactDatePickerTriangle, null),
        React.createElement(StyledReactDatePickerHeaderContainer, null,
            React.createElement(StyledReactDatePickerButtonMoveYear, { onClick: function () { return changeYear(date.getFullYear() - 1); }, type: 'primary' },
                React.createElement(Icon, { name: 'arrowDoubleLeft' })),
            React.createElement(StyledReactDatePickerButtonMoveMonth, { onClick: decreaseMonth, isDisabled: prevMonthButtonDisabled, type: 'primary' },
                React.createElement(Icon, { name: 'arrowLeft' })),
            React.createElement(StyledReactDatePickerMonthAndDate, null, months[date.getMonth()] + ' ' + date.getFullYear()),
            React.createElement(StyledReactDatePickerButtonMoveMonth, { onClick: increaseMonth, isDisabled: nextMonthButtonDisabled, type: 'primary' },
                React.createElement(Icon, { name: 'arrowRight' })),
            React.createElement(StyledReactDatePickerButtonMoveYear, { onClick: function () { return changeYear(date.getFullYear() + 1); }, type: 'primary' },
                React.createElement(Icon, { name: 'arrowDoubleRight' })))));
};
//# sourceMappingURL=DatePickerHeader.js.map
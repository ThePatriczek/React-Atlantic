import React from 'react';
export interface DatePickerHeaderProps {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
    changeYear: (year: number) => void;
}
export declare const DatePickerHeader: React.FC<DatePickerHeaderProps>;

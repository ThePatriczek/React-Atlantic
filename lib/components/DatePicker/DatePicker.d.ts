import * as React from 'react';
import './datepicker-style.css';
export interface DatePickerProps {
    id?: string;
    selected?: Date | null;
    className?: string;
    onChange?: (date?: Date | null) => void;
    onKeyDown?: (e: any) => void;
    placeholder?: string;
    maxDate?: Date;
    minDate?: Date;
}
export declare const DatePicker: React.FC<DatePickerProps>;

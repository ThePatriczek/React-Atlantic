import cs from 'date-fns/locale/cs';
import * as React from 'react';
import { useRef, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { Input } from '../Input';
import {
  StyledReactDatePicker,
  StyledReactDatePickerButton,
  StyledReactDatePickerButtonContainer,
  StyledReactDatePickerContainer
} from './DatePicker.style';
import { DatePickerHeader } from './DatePickerHeader/DatePickerHeader';

registerLocale('cs', cs);

export interface DatePickerProps {
  id?: string;
  selected?: Date | null;
  className?: string;
  onChange?: (date?: Date | null) => void;
  onKeyDown?: (e: any) => void;
  placeholder?: string;
  maxDate?: Date;
  minDate?: Date;
  isFullWidth?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = (
  props
): React.ReactElement => {
  const {
    id,
    className,
    selected,
    placeholder,
    onChange,
    onKeyDown,
    maxDate,
    minDate,
    isFullWidth
  } = props;

  const [date, setDate] = useState<Date | undefined | null>(selected);
  const datePickerRef = useRef<ReactDatePicker>();

  const selectToday = () => {
    setDate(new Date());
    datePickerRef.current?.setOpen(false);
  };

  const handleChange = (date: Date) => {
    setDate(date);

    if (onChange) {
      onChange(date);
    }
  };

  return (
    <StyledReactDatePickerContainer isFullWidth={isFullWidth}>
      <StyledReactDatePicker
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          changeYear
        }) =>
          DatePickerHeader({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
            changeYear
          })
        }
        customInput={
          <Input
            iconLeft={'calendar'}
            handlersWithEvent
            isFullWidth={isFullWidth}
          />
        }
        selected={date}
        onChange={handleChange}
        id={id}
        locale="cs"
        className={className}
        dateFormat="d.M.yyyy"
        placeholderText={placeholder}
        dropdownMode="select"
        autoComplete="off"
        disabledKeyboardNavigation
        maxDate={maxDate}
        minDate={minDate}
        onKeyDown={onKeyDown}
        showPopperArrow={false}
        ref={datePickerRef}
      >
        <StyledReactDatePickerButtonContainer>
          <StyledReactDatePickerButton isFullWidth onClick={selectToday}>
            {`Zvolit dnešní datum`}
          </StyledReactDatePickerButton>
        </StyledReactDatePickerButtonContainer>
      </StyledReactDatePicker>
    </StyledReactDatePickerContainer>
  );
};

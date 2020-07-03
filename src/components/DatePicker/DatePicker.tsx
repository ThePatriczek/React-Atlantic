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
  onSelect?: (date?: Date | null) => void;
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
  const datePickerRef = useRef<ReactDatePicker>();
  const [isFocused, setFocused] = useState<boolean>(false);

  const selectToday = () => {
    datePickerRef.current?.setOpen(false);

    if (onChange) {
      onChange(new Date());
    }

    if (props?.onSelect) {
      props?.onSelect(new Date());
    }
  };

  const handleChange = (date: Date) => {
    if (onChange) {
      onChange(date);
    }
  };

  const onSelect = date => {
    props.onSelect?.(date);
    setFocused(false);
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
            iconLeft={'calendarAlt'}
            handlersWithEvent
            isFullWidth={isFullWidth}
          />
        }
        selected={selected}
        onChange={handleChange}
        onSelect={onSelect}
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        open={isFocused}
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

import React, { useState } from 'react';
import { Icon } from '../../Icon';
import {
  StyledReactDatePickerButtonMoveMonth,
  StyledReactDatePickerHeaderContainer,
  StyledReactDatePickerMonthAndDate,
  StyledReactDatePickerTriangle
} from './DatePickerHeader.style';

export interface DatePickerHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

export const DatePickerHeader: React.FC<DatePickerHeaderProps> = (
  props
): React.ReactElement => {

  const [year, setYear] = useState<any>();

  const months = [
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

  const {
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  } = props;

  return (
    <>
      <StyledReactDatePickerTriangle />
      <StyledReactDatePickerHeaderContainer>
        <StyledReactDatePickerButtonMoveMonth
          onClick={decreaseMonth}
          isDisabled={prevMonthButtonDisabled}
          type={'primary'}
        >
          <Icon name={'arrowLeft'} />
        </StyledReactDatePickerButtonMoveMonth>
        <StyledReactDatePickerMonthAndDate>
          {months[date.getMonth()] + ' ' + date.getFullYear()}
        </StyledReactDatePickerMonthAndDate>
        <StyledReactDatePickerButtonMoveMonth
          onClick={increaseMonth}
          isDisabled={nextMonthButtonDisabled}
          type={'primary'}
        >
          <Icon name={'arrowRight'} />
        </StyledReactDatePickerButtonMoveMonth>
      </StyledReactDatePickerHeaderContainer>
    </>
  );
};

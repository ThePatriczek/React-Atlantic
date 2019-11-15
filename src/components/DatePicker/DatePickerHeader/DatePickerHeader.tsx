import React from 'react';
import { Icon } from '../../Icon';
import {
  StyledReactDatePickerButtonMoveMonth,
  StyledReactDatePickerButtonMoveYear,
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
  changeYear: (year: number) => void;
}

export const DatePickerHeader: React.FC<DatePickerHeaderProps> = (
  props
): React.ReactElement => {
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
    nextMonthButtonDisabled,
    changeYear
  } = props;

  return (
    <>
      <StyledReactDatePickerTriangle />
      <StyledReactDatePickerHeaderContainer>
        <StyledReactDatePickerButtonMoveYear
          onClick={() => changeYear(date.getFullYear() - 1)}
          type={'primary'}
        >
          <Icon name={'arrowDoubleLeft'} />
        </StyledReactDatePickerButtonMoveYear>
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
        <StyledReactDatePickerButtonMoveYear
          onClick={() => changeYear(date.getFullYear() + 1)}
          type={'primary'}
        >
          <Icon name={'arrowDoubleRight'} />
        </StyledReactDatePickerButtonMoveYear>
      </StyledReactDatePickerHeaderContainer>
    </>
  );
};

import { lighten } from 'polished';
import ReactDatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Button } from '../Button';

interface StyledDatePickerProps {
  id?: string;
  selected?: Date | null;
  className?: string;
  onChange?: (date?: Date | null) => void;
  onKeyDown?: (e: any) => void;
  onSelect?: (date: Date | null) => void;
  placeholder?: string;
  ref?: any;
}

export const StyledReactDatePicker = styled(ReactDatePicker)<
  StyledDatePickerProps
>``;

export const StyledReactDatePickerContainer = styled.div<StyledDatePickerProps>`
  ${props => css`
    .react-datepicker__day--selected {
      background-color: ${props.theme.color.success};
      color: ${props.theme.color.white};
      border: 1px solid ${props.theme.color.success};

      &:hover {
        background-color: ${lighten(0.05, props.theme.color.success)};
      }
    }
  `}
`;

export const StyledReactDatePickerButtonContainer = styled.div``;

export const StyledReactDatePickerButton = styled(Button)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

StyledReactDatePicker.defaultProps = {
  theme
};

StyledReactDatePickerContainer.defaultProps = {
  theme
};

StyledReactDatePickerButtonContainer.defaultProps = {
  theme
};

StyledReactDatePickerButton.defaultProps = {
  theme
};

StyledReactDatePicker.displayName = 'StyledReactDatePicker';
StyledReactDatePickerContainer.displayName = 'StyledReactDatePickerContainer';
StyledReactDatePickerButtonContainer.displayName =
  'StyledReactDatePickerButtonContainer';
StyledReactDatePickerButton.displayName = 'StyledReactDatePickerButton';

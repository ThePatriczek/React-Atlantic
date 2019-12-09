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
  isFullWidth?: boolean;
}

export const StyledReactDatePicker = styled(ReactDatePicker)<
  StyledDatePickerProps
>``;

export const StyledReactDatePickerContainer = styled.div<StyledDatePickerProps>`
  ${props =>
    props.isFullWidth &&
    css`
      width: 100%;
    `};
    
    .react-datepicker-wrapper{
      ${props =>
        props.isFullWidth &&
        css`
          width: 100%;
        `};
    }
    
    .react-datepicker-popper{
      margin-top: ${props => props.theme.margin.md};
      z-index: 1;
    }
    
    .react-datepicker{
      width: 250px;
      font-size: ${props => props.theme.font.size.md};
      font-family: ${props => props.theme.font.family};
      
      background-color: ${props => props.theme.color.background.alpha};
      border-radius: ${props => props.theme.radius};
      box-shadow: ${props => props.theme.boxShadow.md};
      
      &__day-names,&__week{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${props => props.theme.margin.sm};
      
        color: ${props => props.theme.color.text.alpha};
        text-align: center;
      }
      
      &__day,&__day-name{
        flex: 1;
        padding: ${props => props.theme.padding.md} 0;
        border-radius: ${props => props.theme.radius};
        cursor: pointer;
        
        &--outside-month{
          color: ${props => props.theme.color.text.beta};
        }
        
        &--today{
          background-color: ${props => props.theme.color.background.beta};
        }
        
        &--selected {
          background-color: ${props => props.theme.color.success.alpha};
          color: ${props => props.theme.color.text.gamma};
          border: 1px solid ${props => props.theme.color.success.alpha};
    
          &:hover {
            background-color: ${props => props.theme.color.success.beta};
          }
        }
      }
      
      &__day-names{
        border-bottom: 1px solid ${props => props.theme.color.border};
        background-color: ${props => props.theme.color.background.beta};
      }
    }
`;

export const StyledReactDatePickerButtonContainer = styled.div`
  border-top: 1px solid ${props => props.theme.color.border};
`;

export const StyledReactDatePickerButton = styled(Button)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border: 0;
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
StyledReactDatePickerButtonContainer.displayName = 'StyledReactDatePickerButtonContainer';
StyledReactDatePickerButton.displayName = 'StyledReactDatePickerButton';

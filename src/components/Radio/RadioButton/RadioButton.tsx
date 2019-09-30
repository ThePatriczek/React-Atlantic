import * as React from 'react';
import { Size } from '../../../types';
import { RadioProps } from '../RadioPropsInterface';
import {
  StyledRadioButtonInputHidden,
  StyledRadioButtonLabel,
  StyledRadioButtonSpan
} from './RadioButton.style';

export default interface RadioButtonProps extends RadioProps {
  size?: Size;
}

export const RadioButton: React.FC<
  React.PropsWithChildren<RadioButtonProps>
> = (props: React.PropsWithChildren<RadioButtonProps>): React.ReactElement => {
  const { isDefaultChecked, size, isDisabled, className, children } = props;
  const [isChecked, setChecked] = React.useState<boolean>(!!isDefaultChecked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      if (props.isChecked === undefined) {
        setChecked(e.target.checked);
        if (props.onChange) {
          props.onChange(!isChecked);
        }
      } else {
        if (props.onChange) {
          props.onChange(!props.isChecked);
        }
      }
    }
  };

  return (
    <StyledRadioButtonLabel
      isChecked={props.isChecked || isChecked}
      isDisabled={isDisabled}
      className={className}
      size={size}
    >
      <StyledRadioButtonInputHidden
        onChange={onChange}
        checked={props.isChecked || isChecked}
        disabled={isDisabled}
      />

      <StyledRadioButtonSpan isDisabled={isDisabled} size={size}>
        {children}
      </StyledRadioButtonSpan>
    </StyledRadioButtonLabel>
  );
};

RadioButton.defaultProps = {
  size: 'medium'
};

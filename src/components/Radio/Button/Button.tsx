import * as React from 'react';
import { Size } from '../../../types';
import { RadioProps } from '../Radio';

import { StyledRadioButtonInputHidden, StyledRadioButtonLabel, StyledRadioButtonSpan } from './Button.style';

export interface ButtonProps extends RadioProps {
  size?: Size;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
  props: React.PropsWithChildren<ButtonProps>
): React.ReactElement => {
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

Button.defaultProps = {
  size: 'medium'
};

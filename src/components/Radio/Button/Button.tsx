import * as React from 'react';
import { Size } from '../../../types';
import { useRadioGroup } from '../Context';
import { RadioProps } from '../Radio';

import { StyledRadioButtonInputHidden, StyledRadioButtonLabel, StyledRadioButtonSpan } from './Button.style';

export interface ButtonProps {
  size?: Size;
}

export const Button: React.FC<
  React.PropsWithChildren<RadioProps & ButtonProps>
> = (
  props: React.PropsWithChildren<RadioProps & ButtonProps>
): React.ReactElement => {
  const {
    isDefaultChecked,
    isDisabled,
    className,
    children,
    value,
    size
  } = props;
  const { value: ctxVal, setValue: setCtxVal } = useRadioGroup();
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

      if (value) {
        setCtxVal(value);
      }
    }
  };

  let checked: boolean = props.isChecked || isChecked;

  if (ctxVal !== undefined) {
    checked = ctxVal === value;
  }

  return (
    <StyledRadioButtonLabel
      isChecked={checked}
      isDisabled={isDisabled}
      className={`atlantic--radio_button ${className}`}
      size={size}
    >
      <StyledRadioButtonInputHidden
        onChange={onChange}
        checked={checked}
        disabled={isDisabled}
        value={value}
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

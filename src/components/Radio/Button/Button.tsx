import React, {
  ChangeEvent,
  FC,
  PropsWithChildren,
  ReactElement,
  useState
} from 'react';
import { Size } from '../../../types';
import { useRadioGroup } from '../Context';
import { RadioProps } from '../Radio';

import {
  StyledRadioButtonInputHidden,
  StyledRadioButtonLabel,
  StyledRadioButtonSpan
} from './Button.style';

export interface ButtonProps extends RadioProps {
  size?: Size;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (
  props
): ReactElement => {
  const {
    isDefaultChecked,
    isDisabled,
    className,
    children,
    value,
    size
  } = props;
  const { value: ctxVal, setValue: setCtxVal } = useRadioGroup();
  const [isChecked, setChecked] = useState<boolean>(!!isDefaultChecked);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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

      if (value !== undefined) {
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

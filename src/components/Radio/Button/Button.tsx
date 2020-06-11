import React, {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement
} from 'react';
import { Size } from '../../../types';
import { useRadioGroup } from '../Context';
import { RadioProps } from '../Radio';

import { useClickChange } from '../../../hooks/EventHandlers/useClickChange';
import {
  StyledRadioButtonInputHidden,
  StyledRadioButtonLabel,
  StyledRadioButtonSpan
} from './Button.style';

export interface ButtonProps
  extends RadioProps,
    Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> {
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
    size,
    // tslint:disable-next-line: variable-name
    onChange: _onChange,
    ...labelProps
  } = props;
  const { value: ctxVal, setValue: setCtxVal } = useRadioGroup();
  const { onChangeClick: hookOnChange, isChecked } = useClickChange({
    isDisabled,
    isDefaultChecked,
    deps: [props.isChecked],
    isChecked: props.isChecked,
    onChange: props.onChange
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    hookOnChange(e);

    if (!isDisabled) {
      if (value !== undefined) {
        setCtxVal(value);
      }
    }
  };

  let checked: boolean | undefined = props.isChecked || isChecked;

  if (ctxVal !== undefined) {
    checked = ctxVal === value;
  }

  return (
    <StyledRadioButtonLabel
      isChecked={checked}
      isDisabled={isDisabled}
      className={`atlantic--radio_button ${className}`}
      size={size}
      {...labelProps}
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

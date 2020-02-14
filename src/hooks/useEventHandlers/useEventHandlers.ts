import * as React from 'react';

interface UseOnChangeValue {
  onChangeClick: (e, x?) => void;
  onChangeInput: (e, x?) => void;
  onKeyDown: (e, x?, y?) => void;
  onKeyDownTextArea: (e, x?) => void;
  onBlur: (e, x?) => void;
  onFocus: (e, x?) => void;
  onClick: () => void;
  isChecked: Readonly<boolean>;
  isFocused: Readonly<boolean>;
  value: Readonly<string>;
}

export type eventHandlers = React.MouseEvent<HTMLLabelElement> &
  React.ChangeEvent<HTMLInputElement> &
  React.ChangeEvent<HTMLTextAreaElement> &
  React.MouseEvent<HTMLAnchorElement>;

export const useEventHandlers = (props: {
  isDisabled?;
  others?;
  isDefaultChecked?;
  defaultValue?;
}): Readonly<UseOnChangeValue> => {
  const [isChecked, setChecked] = React.useState<boolean>(
    props?.others?.isDefaultChecked && props?.others?.isDefaultChecked
  );
  const [value, setValue] = React.useState<string>(props?.defaultValue || ``);
  const [isFocused, setFocused] = React.useState<boolean>(false);

  const onChangeClick = (e: eventHandlers, isPartiallyChecked?) => {
    if (e.type === 'click') {
      e.preventDefault();
    }

    if (!props.isDisabled) {
      if (props.others.isChecked === undefined) {
        if (!isPartiallyChecked) {
          setChecked(e.type === 'click' ? !isChecked : e.target.checked);
        }
        if (props.others.onChange) {
          props.others.onChange(!isChecked);
        }
      } else {
        if (props.others.onChange) {
          props.others.onChange(!props.others.isChecked);
        }
      }
    }
  };

  const onChangeInput = (e: eventHandlers, handlersWithEvent?) => {
    const val: string = e.target.value;

    if (!props.isDisabled) {
      if (props.others.value === undefined) {
        setValue(val);
        if (props.others.onChange) {
          props.others.onChange(handlersWithEvent ? e : val);
        }
      } else {
        if (props.others.onChange) {
          props.others.onChange(handlersWithEvent ? e : val);
        }
      }
    }
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    onEnterPress?,
    handlersWithEvent?
  ) => {
    if (onEnterPress) {
      if (e.key === `Enter`) {
        if (props.others.value || value) {
          props.others.value
            ? onEnterPress(props.others.value)
            : onEnterPress(value);
        }
      }
    }
    if (handlersWithEvent && props.others.onKeyDown) {
      props.others.onKeyDown(e);
    }
  };

  const onKeyDownTextArea = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    onEnterPress?
  ) => {
    if (onEnterPress) {
      if (e.key === `Enter`) {
        e.preventDefault();
        onEnterPress(e.currentTarget.value);
      }
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>, onFocus?) => {
    setFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>, onBlur?) => {
    setFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const onClick = (e?: eventHandlers) => {
    if (props.others.onClick) {
      if (e) {
        e.preventDefault();
      }
      props.others.onClick();
    }
  };

  return {
    onChangeClick,
    onChangeInput,
    onKeyDown,
    onKeyDownTextArea,
    onFocus,
    onBlur,
    onClick,
    isChecked,
    value,
    isFocused
  };
};

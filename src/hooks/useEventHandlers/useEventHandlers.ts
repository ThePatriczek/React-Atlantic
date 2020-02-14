import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useState
} from 'react';

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
  value: Readonly<unknown>;
}

export type EventHandlers = MouseEvent<HTMLLabelElement> &
  ChangeEvent<HTMLInputElement> &
  ChangeEvent<HTMLTextAreaElement> &
  MouseEvent<HTMLAnchorElement>;

interface UseEventHandlersProps {
  isDisabled?: Readonly<boolean>;
  others?;
  isDefaultChecked?: Readonly<boolean>;
  defaultValue?: Readonly<unknown>;
}

export const useEventHandlers = (
  props: Readonly<UseEventHandlersProps>
): Readonly<UseOnChangeValue> => {
  const [isChecked, setChecked] = useState<Readonly<boolean>>(
    props?.others?.isDefaultChecked && props?.others?.isDefaultChecked
  );
  const [value, setValue] = useState<Readonly<unknown>>(
    props?.defaultValue || ``
  );
  const [isFocused, setFocused] = useState<Readonly<boolean>>(false);

  const onChangeClick = (e: EventHandlers, isPartiallyChecked?) => {
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

  const onChangeInput = (e: EventHandlers, handlersWithEvent?) => {
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
    e: KeyboardEvent<HTMLInputElement>,
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
    e: KeyboardEvent<HTMLTextAreaElement>,
    onEnterPress?
  ) => {
    if (onEnterPress) {
      if (e.key === `Enter`) {
        e.preventDefault();
        onEnterPress(e.currentTarget.value);
      }
    }
  };

  const onFocus = (e: FocusEvent<HTMLInputElement>, onFocus?) => {
    setFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>, onBlur?) => {
    setFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const onClick = (e?: EventHandlers) => {
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

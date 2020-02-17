import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useState
} from 'react';

export interface UseOnChangeValue {
  onChangeClick: (
    e: MouseEvent<HTMLLabelElement> | ChangeEvent<HTMLInputElement>,
    isPartiallyChecked?: Readonly<boolean>
  ) => void;
  onChangeInput: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    handlersWithEvent?: Readonly<boolean>
  ) => void;
  onKeyDown: (
    e: KeyboardEvent<HTMLInputElement>,
    onEnterPress?: (value: Readonly<unknown>) => void,
    handlersWithEvent?: Readonly<boolean>
  ) => void;
  onKeyDownTextArea: (
    e: KeyboardEvent<HTMLTextAreaElement>,
    onEnterPress?: (value: Readonly<string>) => void
  ) => void;
  onBlur: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    onBlur?: () => void
  ) => void;
  onFocus: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    onFocus?: () => void
  ) => void;
  onClick: () => void;
  isChecked: Readonly<boolean>;
  isFocused: Readonly<boolean>;
  value: Readonly<unknown>;
}

export type EventHandlers =
  | MouseEvent<HTMLLabelElement>
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>
  | KeyboardEvent<HTMLTextAreaElement>;

interface UseEventHandlersProps {
  isDisabled?: Readonly<boolean>;
  isDefaultChecked?: Readonly<boolean>;
  defaultValue?: Readonly<unknown>;
  others?;
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

  const onChangeClick = (e, isPartiallyChecked?: Readonly<boolean>) => {
    if (e.type === 'click') {
      e.preventDefault();
    }

    if (!props.isDisabled) {
      if (props.others.isChecked === undefined) {
        if (!isPartiallyChecked) {
          setChecked(e.type === 'click' ? !isChecked : e?.target.checked);
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

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement>,
    handlersWithEvent?: Readonly<boolean>
  ) => {
    const value: Readonly<string> = e.target.value;

    if (!props.isDisabled) {
      if (props.others.value === undefined) {
        setValue(value);
        if (props.others.onChange) {
          props.others.onChange(handlersWithEvent ? e : value);
        }
      } else {
        if (props.others.onChange) {
          props.others.onChange(handlersWithEvent ? e : value);
        }
      }
    }
  };

  const onKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    onEnterPress?: (value: Readonly<unknown>) => void,
    handlersWithEvent?: Readonly<boolean>
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
    onEnterPress?: (value: Readonly<string>) => void
  ) => {
    if (onEnterPress) {
      if (e.key === `Enter`) {
        e.preventDefault();
        onEnterPress(e.currentTarget.value);
      }
    }
  };

  const onFocus = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    onFocus?: () => void
  ) => {
    setFocused(true);
    if (onFocus) {
      onFocus();
    }
  };

  const onBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    onBlur?: () => void
  ) => {
    setFocused(false);
    if (onBlur) {
      onBlur();
    }
  };

  const onClick = (e?: MouseEvent<HTMLAnchorElement>) => {
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
    isFocused,
    value
  };
};

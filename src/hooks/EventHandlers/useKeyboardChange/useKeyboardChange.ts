import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';

export interface UseOnChangeValue {
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
  value: Readonly<unknown>;
}

interface UseEventHandlersProps {
  isDisabled?: Readonly<boolean>;
  defaultValue?: Readonly<unknown>;
  others?;
}

export const useKeyboardChange = (
  props: Readonly<UseEventHandlersProps>
): Readonly<UseOnChangeValue> => {
  const [value, setValue] = useState<Readonly<unknown>>(
    props?.defaultValue || ``
  );

  const onChangeInput = useCallback(
    (
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
    },
    [value, props.others.value]
  );

  const onKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      onEnterPress?: (value: Readonly<unknown>) => void,
      handlersWithEvent?: Readonly<boolean>
    ) => {
      if (!props.isDisabled) {
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
      }
    },
    [value, props.others.value]
  );

  const onKeyDownTextArea = useCallback(
    (
      e: KeyboardEvent<HTMLTextAreaElement>,
      onEnterPress?: (value: Readonly<string>) => void
    ) => {
      if (!props.isDisabled) {
        if (onEnterPress) {
          if (e.key === `Enter`) {
            e.preventDefault();
            onEnterPress(e.currentTarget.value);
          }
        }
      }
    },
    [value, props.others.value]
  );

  return {
    onChangeInput,
    onKeyDown,
    onKeyDownTextArea,
    value
  };
};

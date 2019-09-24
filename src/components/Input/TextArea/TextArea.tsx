import * as React from 'react';

export interface TextAreaProps {
  isDisabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  value?: React.ReactText;
  defaultValue?: React.ReactText;
  onChange?: (value: React.ReactText) => void;
  onEnterPress?: (value: React.ReactText) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export const TextArea: React.FC<TextAreaProps> = (
  props: TextAreaProps
): React.ReactElement => {
  const {
    isDisabled,
    placeholder,
    defaultValue,
    onEnterPress,
    autoFocus
  } = props;

  const [value, setValue] = React.useState<React.ReactText>(defaultValue || ``);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val: string = e.target.value;

    if (!isDisabled) {
      if (props.value === undefined) {
        setValue(val);

        if (props.onChange) {
          props.onChange(val);
        }
      } else {
        if (props.onChange) {
          props.onChange(val);
        }
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (onEnterPress) {
      if (e.key === `Enter`) {
        e.preventDefault();
        onEnterPress(e.currentTarget.value);
      }
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (props.onFocus) {
      props.onFocus();
    }
  };

  return (
    <textarea
      placeholder={placeholder}
      value={props.value !== undefined ? props.value : value}
      onChange={onChange}
      disabled={isDisabled}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onFocus={onFocus}
      autoFocus={autoFocus}
    />
  );
};

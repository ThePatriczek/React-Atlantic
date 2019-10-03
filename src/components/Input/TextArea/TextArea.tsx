import * as React from 'react';
import { Icon, IconName } from '../../Icon';
import { StyledTextArea, StyledTextAreaIcon, StyledTextAreaWrapper } from './TextArea.style';

export interface TextAreaProps {
  isDisabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onEnterPress?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  iconLeft?: IconName;
  iconRight?: IconName;
}

export const TextArea: React.FC<TextAreaProps> = (
  props: TextAreaProps
): React.ReactElement => {
  const {
    isDisabled,
    placeholder,
    defaultValue,
    onEnterPress,
    autoFocus,
    iconLeft,
    iconRight
  } = props;

  const [value, setValue] = React.useState<string>(defaultValue || ``);

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
    <StyledTextAreaWrapper
      iconLeft={!!iconLeft}
      iconRight={!!iconRight}
      isDisabled={!!isDisabled}
    >
      <StyledTextArea
        placeholder={placeholder}
        value={props.value !== undefined ? props.value : value}
        onChange={onChange}
        disabled={isDisabled}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onFocus={onFocus}
        autoFocus={autoFocus}
      />

      {iconLeft && (
        <StyledTextAreaIcon iconLeft={!!iconLeft} iconRight={false}>
          <Icon name={iconLeft} />
        </StyledTextAreaIcon>
      )}

      {iconRight && (
        <StyledTextAreaIcon iconLeft={false} iconRight={!!iconRight}>
          <Icon name={iconRight} />
        </StyledTextAreaIcon>
      )}
    </StyledTextAreaWrapper>
  );
};

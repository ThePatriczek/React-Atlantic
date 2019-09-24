import * as React from 'react';
import { Size } from '../../types';
import { Icon, IconName } from '../Icon';
import { StyledInput, StyledInputWrapper, StyledInputWrapperAlt } from './Input.style';
import { TextArea, TextAreaProps } from './TextArea';

export interface InputProps {
  value?: React.ReactText;
  defaultValue?: React.ReactText;
  isDisabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  id?: string;
  onEnterPress?: (value: React.ReactText) => void;
  onChange?: (value: React.ReactText) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  iconLeft?: IconName;
  iconRight?: IconName;
  isAlternative?: boolean;
  size?: Size;
  isLoading?: boolean;
}

export const Input: React.FC<InputProps> & {
  TextArea: React.FC<TextAreaProps>;
} = (props: InputProps): React.ReactElement => {
  const {
    defaultValue,
    isDisabled,
    placeholder,
    id,
    onEnterPress,
    iconLeft,
    iconRight,
    autoFocus,
    isAlternative,
    size,
    isLoading
  } = props;

  const ref = React.createRef<HTMLInputElement>();

  const [value, setValue] = React.useState<React.ReactText>(defaultValue || ``);

  const [isFocused, setFocused] = React.useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onEnterPress) {
      if (e.key === `Enter`) {
        if (value) {
          onEnterPress(value);
        }
      }
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (props.onFocus) {
      props.onFocus();
    }
  };

  if (isAlternative && !isDisabled) {
    return (
      <StyledInputWrapperAlt
        size={size as Size}
        isFocused={isFocused}
        iconLeft={!!iconLeft}
        iconRight={!!(iconRight || isLoading)}
        hasValue={!!value}
        isDisabled={isDisabled}
        onClick={() => {
          if (ref.current) {
            ref.current.focus();
          }
        }}
      >
        {iconLeft || iconRight ? (
          <StyledInputWrapper
            size={size as Size}
            isFocused={isFocused}
            iconLeft={!!iconLeft}
            iconRight={!!(iconRight || isLoading)}
            isDisabled={isDisabled}
            onClick={() => {
              if (ref.current) {
                ref.current.focus();
              }
            }}
          >
            {iconLeft && <Icon name={iconLeft} />}

            <StyledInput
              id={id}
              value={props.value !== undefined ? props.value : value}
              onChange={onChange}
              disabled={isDisabled}
              onKeyDown={onKeyDown}
              autoFocus={autoFocus}
              onBlur={onBlur}
              onFocus={onFocus}
              ref={ref}
              size={size as never}
            />
            <label>{placeholder}</label>
            {isLoading && <Icon name={'loading'} isRotating />}
            {iconRight && !isLoading && <Icon name={iconRight} />}
          </StyledInputWrapper>
        ) : (
          <>
            <StyledInput
              id={id}
              value={props.value !== undefined ? props.value : value}
              onChange={onChange}
              disabled={isDisabled}
              onKeyDown={onKeyDown}
              autoFocus={autoFocus}
              onBlur={onBlur}
              onFocus={onFocus}
              ref={ref}
              size={size as never}
            />
            <label>{placeholder}</label>
          </>
        )}
      </StyledInputWrapperAlt>
    );
  }

  return (
    <StyledInputWrapper
      isFocused={isFocused}
      iconLeft={!!iconLeft}
      iconRight={!!(iconRight || isLoading)}
      isDisabled={isDisabled}
      size={size as Size}
      onClick={() => {
        if (ref.current) {
          ref.current.focus();
        }
      }}
    >
      {iconLeft && <Icon name={iconLeft} />}

      <StyledInput
        id={id}
        value={props.value !== undefined ? props.value : value}
        onChange={onChange}
        disabled={isDisabled}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ref}
        size={size as never}
      />

      {isLoading && <Icon name={'loading'} isRotating />}
      {iconRight && !isLoading && <Icon name={iconRight} />}
    </StyledInputWrapper>
  );
};

Input.defaultProps = {
  size: 'medium'
};

Input.TextArea = TextArea;

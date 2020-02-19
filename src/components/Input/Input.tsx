import * as React from 'react';
import { Size } from '../../types';
import { Icon, IconName } from '../Icon';
import {
  StyledInput,
  StyledInputWrapper,
  StyledInputWrapperAlt
} from './Input.style';
import { TextArea, TextAreaProps } from './TextArea';

export type AutoComplete =
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'url'
  | 'photo';

export interface InputProps {
  transferFocus?: boolean;
  value?: string;
  defaultValue?: string;
  isDisabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  id?: string;
  onEnterPress?: (value: string) => void;
  onChange?: (value: React.ChangeEvent<HTMLInputElement> | string) => void;
  onBlur?: () => void;
  onKeyDown?: (value: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  iconLeft?: IconName;
  iconRight?: IconName;
  isAlternative?: boolean;
  size?: Size;
  isLoading?: boolean;
  /** custom className */
  className?: string;
  htmlType?: 'text' | 'email' | 'password';
  autoComplete?: AutoComplete;
  isFullWidth?: boolean;
  handlersWithEvent?: boolean;
}

export const Input: React.FC<InputProps> & {
  TextArea: React.FC<TextAreaProps>;
} = (props: InputProps): React.ReactElement => {
  const {
    transferFocus,
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
    isLoading,
    className,
    autoComplete,
    htmlType,
    isFullWidth,
    handlersWithEvent
  } = props;

  const ref = React.createRef<HTMLInputElement>();

  const [value, setValue] = React.useState<string>(defaultValue || ``);

  const [isFocused, setFocused] = React.useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;

    if (!isDisabled) {
      if (props.value === undefined) {
        setValue(val);
        if (props.onChange) {
          props.onChange(handlersWithEvent ? e : val);
        }
      } else {
        if (props.onChange) {
          props.onChange(handlersWithEvent ? e : val);
        }
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onEnterPress) {
      if (e.key === `Enter`) {
        if (props.value || value) {
          props.value ? onEnterPress(props.value) : onEnterPress(value);
        }
      }
    }
    if (handlersWithEvent && props.onKeyDown) {
      props.onKeyDown(e);
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

  const val = props.value !== undefined ? props.value : value;

  const Component = (
    <StyledInput
      id={id}
      value={val}
      onChange={onChange}
      disabled={isDisabled}
      placeholder={isAlternative ? `` : placeholder}
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
      onBlur={onBlur}
      onFocus={onFocus}
      ref={ref}
      size={size as never}
      autoComplete={autoComplete}
      type={htmlType}
      isFullWidth={isFullWidth}
    />
  );

  if (transferFocus && isAlternative && !isDisabled) {
    return (
      <StyledInputWrapperAlt
        size={size as Size}
        isFocused={transferFocus}
        iconLeft={!!iconLeft}
        iconRight={!!(iconRight || isLoading)}
        hasValue={!!val}
        isDisabled={isDisabled}
        onClick={() => {
          if (ref.current) {
            ref.current.focus();
          }
        }}
        className={className}
        isFullWidth={isFullWidth}
      >
        {iconLeft || iconRight ? (
          <StyledInputWrapper
            size={size as Size}
            isFocused={transferFocus}
            iconLeft={!!iconLeft}
            iconRight={!!(iconRight || isLoading)}
            isDisabled={isDisabled}
            onClick={() => {
              if (ref.current) {
                ref.current.focus();
              }
            }}
            isFullWidth={isFullWidth}
          >
            {iconLeft && <Icon name={iconLeft} />}

            {Component}

            <label>{placeholder}</label>
            {isLoading && <Icon name={'loading'} isRotating />}
            {iconRight && !isLoading && <Icon name={iconRight} />}
          </StyledInputWrapper>
        ) : (
          <>
            {Component}
            <label>{placeholder}</label>
          </>
        )}
      </StyledInputWrapperAlt>
    );
  }

  if (isAlternative && !isDisabled) {
    return (
      <StyledInputWrapperAlt
        size={size as Size}
        isFocused={isFocused}
        iconLeft={!!iconLeft}
        iconRight={!!(iconRight || isLoading)}
        hasValue={!!val}
        isDisabled={isDisabled}
        onClick={() => {
          if (ref.current) {
            ref.current.focus();
          }
        }}
        className={className}
        isFullWidth={isFullWidth}
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
            isFullWidth={isFullWidth}
          >
            {iconLeft && <Icon name={iconLeft} />}

            {Component}

            <label>{placeholder}</label>
            {isLoading && <Icon name={'loading'} isRotating />}
            {iconRight && !isLoading && <Icon name={iconRight} />}
          </StyledInputWrapper>
        ) : (
          <>
            {Component}
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
      className={className}
      isFullWidth={isFullWidth}
    >
      {iconLeft && <Icon name={iconLeft} />}

      {Component}

      {isLoading && <Icon name={'loading'} isRotating />}
      {iconRight && !isLoading && <Icon name={iconRight} />}
    </StyledInputWrapper>
  );
};

Input.defaultProps = {
  size: 'medium',
  htmlType: 'text'
};

Input.TextArea = TextArea;

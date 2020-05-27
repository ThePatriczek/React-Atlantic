import React, { useEffect } from 'react';
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
  ComponentLeft?: Icon;
  ComponentRight?: Icon;
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
    ComponentLeft,
    ComponentRight,
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

  useEffect(() => {
    if (!!iconRight && !!ComponentRight) {
      const err = new Error(
        `Only one of iconRight or componentRight can be defined at the same time`
      );
      throw err;
    }
  }, [iconRight, ComponentRight]);

  useEffect(() => {
    if (!!iconRight && !!ComponentRight) {
      const err = new Error(
        `Only one of iconLeft or componentLeft can be defined at the same time`
      );
      throw err;
    }
  }, [iconLeft, ComponentLeft]);

  const ref = React.createRef<HTMLInputElement>();
  const [value, setValue] = React.useState<string>(defaultValue || ``);
  const [isFocused, setFocused] = React.useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;

    if (!isDisabled) {
      if (typeof props.value === 'undefined') {
        setValue(val);
      }

      props.onChange?.(handlersWithEvent ? e : val);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === `Enter`) {
      onEnterPress?.(value);
    }

    if (handlersWithEvent) {
      props.onKeyDown?.(e);
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    props.onBlur?.();
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    props.onFocus?.();
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

  const AlternativeComponent = (
    <StyledInputWrapperAlt
      size={size as Size}
      isFocused={transferFocus || isFocused}
      isLeftComponent={!!iconLeft}
      isRightComponent={!!(iconRight || isLoading)}
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
          isFocused={
            typeof transferFocus !== 'undefined' ? transferFocus : isFocused
          }
          isLeftComponent={!!iconLeft}
          isRightComponent={!!(iconRight || isLoading)}
          isDisabled={isDisabled}
          onClick={() => {
            if (ref.current) {
              ref.current.focus();
            }
          }}
          isFullWidth={isFullWidth}
        >
          {iconLeft && <Icon name={iconLeft} />}
          {!!ComponentLeft && ComponentLeft}
          {Component}

          <label>{placeholder}</label>
          {isLoading && <Icon name={'loading'} isRotating />}
          {iconRight && !isLoading && <Icon name={iconRight} />}
          {!!ComponentRight && !isLoading && ComponentRight}
        </StyledInputWrapper>
      ) : (
        <>
          {Component}
          <label>{placeholder}</label>
        </>
      )}
    </StyledInputWrapperAlt>
  );

  if (isAlternative && !isDisabled) {
    return AlternativeComponent;
  }

  return (
    <StyledInputWrapper
      isFocused={isFocused}
      isLeftComponent={!!(iconLeft || ComponentLeft)}
      isRightComponent={!!(isLoading || iconRight || ComponentRight)}
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
      {!!ComponentLeft && ComponentLeft}
      {Component}
      {isLoading && <Icon name={'loading'} isRotating />}
      {iconRight && !isLoading && <Icon name={iconRight} />}
      {!!ComponentRight && !isLoading && ComponentRight}
    </StyledInputWrapper>
  );
};

Input.defaultProps = {
  size: 'medium',
  htmlType: 'text'
};

Input.TextArea = TextArea;

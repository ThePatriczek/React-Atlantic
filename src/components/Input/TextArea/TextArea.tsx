import * as React from 'react';
import { useEventHandlers } from '../../../hooks/useEventHandlers';
import { Icon, IconName } from '../../Icon';
import {
  StyledTextArea,
  StyledTextAreaIcon,
  StyledTextAreaWrapper
} from './TextArea.style';

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
  const {
    onKeyDownTextArea,
    onFocus,
    onBlur,
    onChangeInput,
    value
  } = useEventHandlers({ isDisabled, others: props, defaultValue });
  const val = props.value !== undefined ? props.value : value;

  return (
    <StyledTextAreaWrapper
      iconLeft={iconLeft}
      iconRight={iconRight}
      isDisabled={isDisabled}
      placeholder={placeholder}
      value={val as string}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
    >
      <StyledTextArea
        placeholder={placeholder}
        value={val as string}
        onChange={onChangeInput}
        disabled={isDisabled}
        onKeyDown={e => onKeyDownTextArea(e, onEnterPress)}
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

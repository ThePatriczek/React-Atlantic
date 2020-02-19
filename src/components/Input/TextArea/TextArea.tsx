import * as React from 'react';
import { useFocus } from '../../../hooks/EventHandlers/useFocus';
import { useKeyboardChange } from '../../../hooks/EventHandlers/useKeyboardChange';
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

  const { onKeyDownTextArea, onChangeInput, value } = useKeyboardChange({
    isDisabled,
    defaultValue,
    deps: [props.value],
    onChange: props.onChange,
    value: props.value
  });
  const { onFocus, onBlur } = useFocus();

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
        onBlur={e => onBlur(e, props.onBlur)}
        onFocus={e => onFocus(e, props.onFocus)}
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

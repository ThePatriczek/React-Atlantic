import * as React from 'react';
import { Check } from '../../Icons';
import { HorizontalPosition } from '../../types';
import {
  HiddenCheckbox,
  StyledCheckboxIcon,
  StyledCheckboxInputShown,
  StyledCheckboxLabel,
  StyledCheckboxMark,
  StyledCheckboxSpan
} from './Checkbox.style';

export interface CheckboxProps {
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  isPartiallyChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
  position?: HorizontalPosition;
  /** custom className */
  className?: string;
}

export const Checkbox: React.FC<React.PropsWithChildren<CheckboxProps>> = (
  props: React.PropsWithChildren<CheckboxProps>
): React.ReactElement => {
  const {
    isPartiallyChecked,
    isDefaultChecked,
    position,
    isDisabled,
    className,
    children
  } = props;
  const [isChecked, setChecked] = React.useState<boolean>(!!isDefaultChecked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      if (props.isChecked === undefined) {
        if (!isPartiallyChecked) {
          setChecked(e.target.checked);
        }
        if (props.onChange) {
          props.onChange(!isChecked);
        }
      } else {
        if (props.onChange) {
          props.onChange(!props.isChecked);
        }
      }
    }
  };

  return (
    <StyledCheckboxLabel
      isChecked={props.isChecked || isChecked}
      isDisabled={isDisabled}
      className={className}
    >
      {position === 'right' && (
        <StyledCheckboxSpan isDisabled={isDisabled}>
          {children}
        </StyledCheckboxSpan>
      )}

      <StyledCheckboxInputShown isDisabled={isDisabled}>
        <StyledCheckboxMark
          isDisabled={isDisabled}
          isChecked={props.isChecked || isChecked}
          isPartiallyChecked={isPartiallyChecked}
        >
          <HiddenCheckbox
            onChange={onChange}
            checked={props.isChecked || isChecked}
            disabled={isDisabled}
          />
          {(props.isChecked || isChecked) && (
            <StyledCheckboxIcon
              isDisabled={isDisabled}
              isChecked={props.isChecked || isChecked}
              isPartiallyChecked={isPartiallyChecked}
            >
              <Check />
            </StyledCheckboxIcon>
          )}
        </StyledCheckboxMark>
      </StyledCheckboxInputShown>

      {position === 'left' && (
        <StyledCheckboxSpan isDisabled={isDisabled}>
          {children}
        </StyledCheckboxSpan>
      )}
    </StyledCheckboxLabel>
  );
};

Checkbox.defaultProps = {
  position: 'left'
};

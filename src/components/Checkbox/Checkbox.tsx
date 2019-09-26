import * as React from 'react';
import { Tick } from '../../Icons';
import { HorizontalPosition } from '../../types';
import {
  StyledCheckboxIcon,
  StyledCheckboxInputHidden,
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
  text?: string;
  textPosition?: HorizontalPosition;
}

export const Checkbox: React.FC<CheckboxProps> = (
  props: CheckboxProps
): React.ReactElement => {
  const {
    isPartiallyChecked,
    isDefaultChecked,
    textPosition,
    text,
    isDisabled
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
    >
      {text && textPosition === 'left' && (
        <StyledCheckboxSpan isDisabled={isDisabled} textPosition={textPosition}>
          {text}
        </StyledCheckboxSpan>
      )}

      <StyledCheckboxInputShown isDisabled={isDisabled}>
        <StyledCheckboxMark
          isDisabled={isDisabled}
          isChecked={props.isChecked || isChecked}
          isPartiallyChecked={isPartiallyChecked}
        >
          <StyledCheckboxInputHidden
            onChange={onChange}
            checked={props.isChecked || isChecked}
            disabled={isDisabled}
          />
          <StyledCheckboxIcon
            isDisabled={isDisabled}
            isChecked={props.isChecked || isChecked}
            isPartiallyChecked={isPartiallyChecked}
          >
            <Tick />
          </StyledCheckboxIcon>
        </StyledCheckboxMark>
      </StyledCheckboxInputShown>

      {text && textPosition === 'right' && (
        <StyledCheckboxSpan isDisabled={isDisabled} textPosition={textPosition}>
          {text}
        </StyledCheckboxSpan>
      )}
    </StyledCheckboxLabel>
  );
};

Checkbox.defaultProps = {
  textPosition: 'right'
};

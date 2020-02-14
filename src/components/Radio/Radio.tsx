import * as React from 'react';
import { HorizontalPosition } from '../../types';
import { Button, ButtonProps } from './Button';
import { useRadioGroup } from './Context';
import { Group, GroupProps } from './Group';
import {
  StyledRadioInputHidden,
  StyledRadioInputShown,
  StyledRadioLabel,
  StyledRadioMark,
  StyledRadioSpan
} from './Radio.style';

export interface RadioProps {
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
  position?: HorizontalPosition;
  /** custom className */
  className?: string;
  value?: any;
}

export const Radio: React.FC<React.PropsWithChildren<RadioProps>> & {
  Button: React.FC<ButtonProps>;
  Group: React.FC<GroupProps>;
} = (props: React.PropsWithChildren<RadioProps>): React.ReactElement => {
  const {
    isDefaultChecked,
    position,
    isDisabled,
    className,
    children,
    value
  } = props;
  const { value: ctxVal, setValue: setCtxVal } = useRadioGroup();
  const [isChecked, setChecked] = React.useState<boolean>(!!isDefaultChecked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) {
      if (props.isChecked === undefined) {
        setChecked(e.target.checked);
        if (props.onChange) {
          props.onChange(!isChecked);
        }
      } else {
        if (props.onChange) {
          props.onChange(!props.isChecked);
        }
      }

      if (value !== undefined) {
        setCtxVal(value);
      }
    }
  };

  let checked: boolean = props.isChecked || isChecked;

  if (ctxVal !== undefined) {
    checked = ctxVal === value;
  }

  return (
    <StyledRadioLabel
      isChecked={checked}
      isDisabled={isDisabled}
      className={className}
      position={position}
      isDefaultChecked={isDefaultChecked}
    >
      {position === 'right' && (
        <StyledRadioSpan isDisabled={isDisabled}>{children}</StyledRadioSpan>
      )}

      <StyledRadioInputShown isDisabled={isDisabled}>
        <StyledRadioMark isDisabled={isDisabled} isChecked={checked}>
          <StyledRadioInputHidden
            onChange={onChange}
            checked={checked}
            disabled={isDisabled}
            value={value}
          />
        </StyledRadioMark>
      </StyledRadioInputShown>

      {position === 'left' && (
        <StyledRadioSpan isDisabled={isDisabled}>{children}</StyledRadioSpan>
      )}
    </StyledRadioLabel>
  );
};

Radio.defaultProps = {
  position: 'left'
};

Radio.Button = Button;

Radio.Group = Group;

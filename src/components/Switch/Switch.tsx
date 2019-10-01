import * as React from 'react';
import { Size, Type } from '../../types';
import { HiddenCheckbox } from '../Checkbox/Checkbox.style';
import {
  StyledSwitcherFalse,
  StyledSwitcherToggler,
  StyledSwitcherTrue,
  StyledSwitcherWrap,
  StyledSwitchLabel
} from './Switch.style';

export interface SwitchProps {
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
  textOn?: string;
  textOff?: string;
  className?: string;
  size?: Size;
  type?: Type;
}

export const Switch: React.FC<SwitchProps> = (
  props: SwitchProps
): React.ReactElement => {
  const {
    textOn,
    textOff,
    className,
    isDefaultChecked,
    isDisabled,
    size,
    type
  } = props;

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
    }
  };

  return (
    <StyledSwitchLabel
      size={size}
      isChecked={props.isChecked || isChecked}
      htmlType={type}
      isDisabled={isDisabled}
      className={className}
    >
      <HiddenCheckbox
        onChange={onChange}
        checked={props.isChecked || isChecked}
        disabled={isDisabled}
      />
      <StyledSwitcherWrap
        htmlType={type}
        isChecked={props.isChecked || isChecked}
        size={size}
      >
        <StyledSwitcherTrue
          htmlType={type}
          size={size}
          isChecked={props.isChecked || isChecked}
          isDisabled={isDisabled}
        >
          {textOn}
        </StyledSwitcherTrue>
        <StyledSwitcherToggler
          size={size}
          isChecked={props.isChecked || isChecked}
          htmlType={type}
        />
        <StyledSwitcherFalse
          htmlType={type}
          size={size}
          isChecked={props.isChecked || isChecked}
          isDisabled={isDisabled}
        >
          {textOff}
        </StyledSwitcherFalse>
      </StyledSwitcherWrap>
    </StyledSwitchLabel>
  );
};

Switch.defaultProps = {
  type: 'primary'
};

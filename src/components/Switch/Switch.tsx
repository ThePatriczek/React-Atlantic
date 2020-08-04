import * as React from 'react';
import { useClickChange } from '../../hooks/EventHandlers/useClickChange';
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

  const { onChangeClick, isChecked } = useClickChange({
    isDisabled,
    isDefaultChecked,
    deps: [props.isChecked],
    isChecked: props.isChecked,
    onChange: props.onChange
  });

  return (
    <StyledSwitchLabel
      size={size}
      isChecked={props.isChecked || isChecked}
      htmlType={type}
      isDisabled={isDisabled}
      className={className}
    >
      <HiddenCheckbox
        onChange={onChangeClick}
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
          isDisabled={isDisabled}
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

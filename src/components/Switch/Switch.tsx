import * as React from 'react';
import { Size } from '../../types';
import {
  StyledSwitcherFalse,
  StyledSwitcherToggler,
  StyledSwitcherTrue,
  StyledSwitcherWrap,
  StyledSwitchInputHidden,
  StyledSwitchLabel
} from './Switch.style';

export type SwitchType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error';

export interface SwitchProps {
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
  textLeft?: string;
  textRight?: string;
  className?: string;
  name?: string;
  labelBefore?: string;
  labelAfter?: string;
  size?: Size;
  htmlType?: SwitchType;
}

export const Switch: React.FC<SwitchProps> = (
  props: SwitchProps
): React.ReactElement => {
  const {
    textLeft,
    textRight,
    className,
    name,
    isDefaultChecked,
    isDisabled,
    size,
    htmlType
  } = props;

  const [isChecked, setChecked] = React.useState<boolean>(!!isDefaultChecked);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (!isDisabled) {
      if (props.isChecked === undefined) {
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
    <>
      <StyledSwitchLabel
        size={size}
        isChecked={props.isChecked || isChecked}
        htmlType={htmlType}
        isDisabled={isDisabled}
      >
        <StyledSwitchInputHidden
          onChange={onChange}
          className={className}
          name={name}
          id={name}
          checked={props.isChecked || isChecked}
          disabled={isDisabled}
        />
        <StyledSwitcherWrap
          htmlType={htmlType}
          isChecked={props.isChecked || isChecked}
          size={size}
        >
          <StyledSwitcherTrue
            htmlType={htmlType}
            size={size}
            isChecked={props.isChecked || isChecked}
            isDisabled={isDisabled}
          >
            {textLeft}
          </StyledSwitcherTrue>
          <StyledSwitcherToggler
            size={size}
            isChecked={props.isChecked || isChecked}
            htmlType={htmlType}
          />
          <StyledSwitcherFalse
            htmlType={htmlType}
            size={size}
            isChecked={props.isChecked || isChecked}
            isDisabled={isDisabled}
          >
            {textRight}
          </StyledSwitcherFalse>
        </StyledSwitcherWrap>
      </StyledSwitchLabel>
    </>
  );
};

Switch.defaultProps = {
  htmlType: 'error',
  textLeft: 'Yes',
  textRight: 'No'
};

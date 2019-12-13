import * as easings from 'd3-ease';
import * as React from 'react';
import { animated, config, useSpring, useTransition } from 'react-spring';
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

  const springProps = useSpring({
    x: isChecked ? 0 : 100,
    config: { easing: t => easings.easeCubicIn(t), duration: 250 }
  });


  return (
    <StyledCheckboxLabel
      isChecked={props.isChecked || isChecked}
      isDisabled={isDisabled}
      className={className}
    >
      {position === 'right' && (
        <StyledCheckboxSpan position={position} isDisabled={isDisabled}>
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
                <StyledCheckboxIcon
                  isDisabled={isDisabled}
                  isChecked={props.isChecked || isChecked}
                  isPartiallyChecked={isPartiallyChecked}
                >
                  <Check x={springProps.x.interpolate((x: any) => x)} />
                </StyledCheckboxIcon>
              </StyledCheckboxMark>
      </StyledCheckboxInputShown>

      {position === 'left' && (
        <StyledCheckboxSpan position={position} isDisabled={isDisabled}>
          {children}
        </StyledCheckboxSpan>
      )}
    </StyledCheckboxLabel>
  );
};

Checkbox.defaultProps = {
  position: 'left'
};

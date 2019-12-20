import * as easings from 'd3-ease';
import * as React from 'react';
import { useRef } from 'react';
import { ReactSpringHook, useChain, useSpring, useTrail } from 'react-spring';

import { Check, CheckSimple } from '../../Icons';
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

  const onClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (!isDisabled) {
      if (props.isChecked === undefined) {
        if (!isPartiallyChecked) {
          setChecked(!isChecked);
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

  const springRef = useRef<ReactSpringHook>(null);
  const springProps = useSpring({
    ref: springRef,
    x: props.isChecked || isChecked ? 0 : 100,
    config: { easing: t => easings.easeCubicIn(t), duration: 125 }
  });

  const trailRef = useRef<ReactSpringHook>(null);
  const trail = useTrail(1, {
    ref: trailRef,
    opacity: isPartiallyChecked || props.isChecked || isChecked ? 1 : 0,
    config: { duration: 125 }
  });

  useChain(
    props.isChecked || isChecked
      ? [trailRef, springRef]
      : [springRef, trailRef],
    [0, props.isChecked || isChecked ? 0.075 : 0.225]
  );

  return (
    <StyledCheckboxLabel
      onClick={onClick}
      isChecked={props.isChecked || isChecked}
      isDisabled={isDisabled}
      className={className}
    >
      {position === 'right' && (
        <StyledCheckboxSpan position={position} isDisabled={isDisabled}>
          {children}
        </StyledCheckboxSpan>
      )}
      <HiddenCheckbox
        checked={props.isChecked || isChecked}
        disabled={isDisabled}
      />
      <StyledCheckboxInputShown isDisabled={isDisabled}>
        {trail.map((style, index) => (
          <StyledCheckboxMark
            key={index}
            style={style}
            isDisabled={isDisabled}
            isChecked={props.isChecked || isChecked}
            isPartiallyChecked={isPartiallyChecked}
          >
            <StyledCheckboxIcon
              isDisabled={isDisabled}
              isChecked={props.isChecked || isChecked}
              isPartiallyChecked={isPartiallyChecked}
            >
              <CheckSimple x={springProps?.x?.interpolate((x: any) => x)} />
            </StyledCheckboxIcon>
          </StyledCheckboxMark>
        ))}
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

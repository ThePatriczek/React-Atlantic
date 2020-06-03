import * as easings from 'd3-ease';
import * as React from 'react';
import { ChangeEvent, useRef } from 'react';
import { useChain, useSpring, useTrail } from 'react-spring/web.cjs';
import { useClickChange } from '../../hooks/EventHandlers/useClickChange';
import { CheckSimple } from '../../Icons';
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
  id?: Readonly<string>;
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  isPartiallyChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean | ChangeEvent<HTMLInputElement>) => void;
  position?: HorizontalPosition;
  /** custom className */
  className?: string;
  handlersWithEvent?: boolean;
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
    children,
    handlersWithEvent,
    id
  } = props;

  const { onChangeClick, isChecked } = useClickChange({
    isDisabled,
    isDefaultChecked,
    deps: [props.isChecked],
    isChecked: props.isChecked,
    onChange: props.onChange,
    handlersWithEvent
  });

  const springRef = useRef(null);
  const springProps = useSpring({
    ref: springRef,
    x: props.isChecked || isChecked ? 0 : 100,
    config: { easing: t => easings.easeCubicIn(t), duration: 125 }
  });

  const trailRef = useRef(null);
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
      onClick={e => onChangeClick(e, isPartiallyChecked)}
      isChecked={props.isChecked || isChecked}
      isDisabled={isDisabled}
      className={className}
      htmlFor={id}
    >
      {position === 'right' && children && (
        <StyledCheckboxSpan position={position} isDisabled={isDisabled}>
          {children}
        </StyledCheckboxSpan>
      )}
      <HiddenCheckbox
        id={id}
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
              <CheckSimple x={springProps.x} />
            </StyledCheckboxIcon>
          </StyledCheckboxMark>
        ))}
      </StyledCheckboxInputShown>

      {position === 'left' && children && (
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

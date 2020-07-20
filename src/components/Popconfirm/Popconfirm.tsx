import React, { FC, useRef, useState } from 'react';
import { useTransition } from 'react-spring/web.cjs';
import { Text } from '../../../lib/components/Typography/Text';
import { useEventListener } from '../../hooks/EventHandlers/useEventListener';
import { Position } from '../../types';
import { Button, PureButton } from '../Button';
import {
  StyledAnimatedPopconfirmContainer,
  StyledCancelButtonContainer,
  StyledPopconfirmContainer,
  StyledPopconfirmContent,
  StyledPopconfirmFooter
} from './Popconfirm.style';

export interface PopconfirmProps {
  children: Readonly<JSX.Element>;
  position?: Readonly<Position>;
  className?: Readonly<string>;
  onConfirm: () => void;
  onCancel?: () => void;
  content?: Readonly<JSX.Element | string>;
  cancelText?: Readonly<string>;
  confirmText?: Readonly<string>;
  executeDirectly?: Readonly<boolean>;
}

export const Popconfirm: FC<PopconfirmProps> = props => {
  const {
    children,
    className,
    onConfirm,
    onCancel,
    content,
    position,
    confirmText,
    cancelText,
    executeDirectly
  } = props;
  const [isOpen, setOpen] = useState<Readonly<boolean>>(false);
  const insideContainerRef = useRef<Readonly<HTMLDivElement>>(null);
  const buttonContainerRef = useRef<Readonly<HTMLSpanElement>>(null);

  const {} = useEventListener({
    ref: insideContainerRef,
    deps: [isOpen],
    isOpen,
    onMouseDown: () => {
      onCancelClick();
    },
    onEscape: () => {
      onCancelClick();
    },
    onEnter: () => {
      onConfirmClick();
    }
  });

  const positionAnimationFromLeave: ReadonlyMap<
    Readonly<string>,
    Readonly<string>
  > = new Map([
    [`top`, `scale(0.7) translateY(50px)`],
    [`bottom`, `scale(0.7) translateY(-50px)`],
    [`right`, `scale(0.7) translateX(-50px)`],
    [`left`, `scale(0.7) translateX(50px)`]
  ]);

  const positionAnimationEnter: ReadonlyMap<
    Readonly<string>,
    Readonly<string>
  > = new Map([
    [`top`, `scale(1) translateY(0)`],
    [`bottom`, `scale(1) translateY(0)`],
    [`right`, `scale(1) translateX(0)`],
    [`left`, `scale(1) translateX(0)`]
  ]);

  const transitions = useTransition(isOpen, null, {
    from: {
      transform: positionAnimationFromLeave.get(position || `top`),
      opacity: 0
    },
    enter: {
      transform: positionAnimationEnter.get(position || `top`),
      opacity: 1
    },
    leave: {
      transform: positionAnimationFromLeave.get(position || `top`),
      opacity: 0
    },
    unique: true,
    config: { mass: 1, tension: 500, friction: 24, precision: 0.00001 }
  });

  const onConfirmClick = () => {
    onConfirm?.();
    setOpen(false);
  };

  const onCancelClick = () => {
    onCancel?.();
    setOpen(false);
  };

  const ConfirmButton = () => (
    <Button onClick={onConfirmClick} type={'success'}>
      {confirmText}
    </Button>
  );

  const CancelButton = () => (
    <StyledCancelButtonContainer style={{ paddingRight: '5px' }}>
      <Button onClick={onCancelClick} type={'default'}>
        {cancelText}
      </Button>
    </StyledCancelButtonContainer>
  );

  const ChildrenComponent = () => (
    <PureButton
      onClick={() => {
        executeDirectly ? onConfirmClick() : setOpen(prevState => !prevState);
      }}
    >
      {children}
    </PureButton>
  );

  return (
    <StyledPopconfirmContainer className={className}>
      <span ref={buttonContainerRef}>
        <ChildrenComponent />
      </span>
      {transitions.map(({ item, props }) =>
        item ? (
          <StyledAnimatedPopconfirmContainer
            elementRect={buttonContainerRef?.current?.getBoundingClientRect()}
            ref={insideContainerRef}
            style={props}
            position={position}
          >
            <StyledPopconfirmContent key={content?.toString()}>
              {typeof content === 'string' ? <Text>{content}</Text> : content}
            </StyledPopconfirmContent>
            <StyledPopconfirmFooter>
              <CancelButton />
              <ConfirmButton />
            </StyledPopconfirmFooter>
          </StyledAnimatedPopconfirmContainer>
        ) : null
      )}
    </StyledPopconfirmContainer>
  );
};

Popconfirm.defaultProps = {
  position: 'top',
  confirmText: 'Confirm',
  cancelText: 'Cancel'
};
Popconfirm.displayName = `Popconfirm`;

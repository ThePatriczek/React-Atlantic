import React, { FC, useEffect, useRef, useState } from 'react';
import { useTransition } from 'react-spring/web.cjs';
import { useEventListener } from '../../hooks/EventHandlers/useEventListener';
import { Position } from '../../types';
import { Button, PureButton } from '../Button';
import { Typography } from '../Typography';
import {
  StyledAnimatedPopconfirmContainer,
  StyledAnimatedPopconfirmContent,
  StyledPopconfirmChildren,
  StyledPopconfirmContainer,
  StyledPopconfirmContent,
  StyledPopconfirmFooter,
  StyledPopconfirmTriangle
} from './style';

export interface PopconfirmProps {
  children: Readonly<JSX.Element>;
  position?: Readonly<Position>;
  changePositionOnResize?: Readonly<boolean>;
  changePositionOnScroll?: Readonly<boolean>;
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
    confirmText,
    cancelText,
    executeDirectly,
    changePositionOnResize,
    changePositionOnScroll
  } = props;
  const { Text } = Typography;
  const [isOpen, setOpen] = useState<Readonly<boolean>>(false);
  const [position, setPosition] = useState<Readonly<Position>>(
    props.position || 'top'
  );
  const insideContainerRef = useRef<Readonly<HTMLDivElement>>(null);
  const buttonContainerRef = useRef<Readonly<HTMLSpanElement>>(null);

  useEffect(() => {
    if (typeof props.position !== 'undefined' && props.position !== position) {
      setPosition(props.position);
      setOpen(false);
    }
  }, [props.position]);

  useEffect(() => {
    if (changePositionOnScroll || changePositionOnResize) {
      if (
        position !== props.position &&
        typeof props.position !== 'undefined'
      ) {
        setPosition(props.position);
      }
    }
  }, [isOpen]);

  useEventListener(
    {
      ref: insideContainerRef,
      isOpen,
      onMouseDown: () => {
        onCancelClick();
      },
      onEscape: () => {
        onCancelClick();
      },
      onEnter: () => {
        onConfirmClick();
      },
      onResize: () => {
        if (changePositionOnResize && isOpen) {
          inViewportCheck();
        }
      },
      onScroll: () => {
        if (changePositionOnScroll && isOpen) {
          inViewportCheck();
        }
      }
    },
    [isOpen]
  );

  const positionAnimationFromLeave: ReadonlyMap<
    Readonly<Position>,
    Readonly<string>
  > = new Map([
    [`top`, `scale(0.7) translateX(-50%) translateY(50px)`],
    [`bottom`, `scale(0.7) translateX(-50%) translateY(-50px)`],
    [`right`, `scale(0.7) translateX(-50px) translateY(-50%)`],
    [`left`, `scale(0.7) translateX(50px) translateY(-50%)`]
  ]);

  const positionAnimationEnter: ReadonlyMap<
    Readonly<Position>,
    Readonly<string>
  > = new Map([
    [`top`, `scale(1) translateX(-50%) translateY(0)`],
    [`bottom`, `scale(1) translateX(-50%) translateY(0)`],
    [`right`, `scale(1) translateX(0) translateY(-50%)`],
    [`left`, `scale(1) translateX(0) translateY(-50%)`]
  ]);

  const inViewportCheck = () => {
    const bounding = insideContainerRef?.current?.getBoundingClientRect();

    if (bounding) {
      const outLeft = bounding.left < 0;
      const outRight =
        bounding.right >
        (window.innerWidth || document.documentElement.clientWidth);
      const outTop = bounding.top < 0;
      const outBottom =
        bounding.bottom >
        (window.innerHeight || document.documentElement.clientHeight);
      const outOfAll = outTop && outBottom && outLeft && outRight;

      const outLeftRight = outLeft && bounding?.width > bounding?.right;
      const outRightLeft =
        outRight &&
        bounding.right >
          (window.innerWidth || document.documentElement.clientWidth);
      const outTopBottom = bounding?.height > bounding?.bottom;
      const outBottomTop =
        outBottom &&
        bounding.bottom >
          (window.innerHeight || document.documentElement.clientHeight);

      const move = (place: Position, withOut: boolean = false) => {
        if (position !== place) {
          if (withOut) {
            if (outBottom) {
              setPosition(place);
            }
          } else {
            setPosition(place);
          }
        }
      };

      const moveTop = (withOut = false) => move('top', withOut);

      const moveBottom = (withOut = false) => move('bottom', withOut);

      const moveLeft = (withOut = false) => move('left', withOut);

      const moveRight = (withOut = false) => move('right', withOut);

      if (!outOfAll) {
        if (outLeftRight || outRightLeft) {
          if (!outTopBottom) {
            moveTop();
          } else if (!outBottomTop) {
            moveBottom();
          }
        } else {
          moveLeft(true);
          moveRight(true);
          moveBottom(true);
          moveTop(true);
        }
      }
    }
  };

  const transitions = useTransition(isOpen, {
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
    config: { mass: 1, tension: 500, friction: 24, precision: 0.00001 },
    reset: true,
    unique: true,
    onChange: () => {
      inViewportCheck();
    }
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
    <Button onClick={onConfirmClick} type={'primary'}>
      {confirmText}
    </Button>
  );

  const CancelButton = () => (
    <Button onClick={onCancelClick} type={'default'}>
      {cancelText}
    </Button>
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
      <StyledPopconfirmChildren ref={buttonContainerRef}>
        <ChildrenComponent />
      </StyledPopconfirmChildren>
      {transitions((style, item) =>
        item ? (
          <StyledAnimatedPopconfirmContainer
            ref={insideContainerRef}
            style={style}
            position={position}
          >
            <StyledAnimatedPopconfirmContent position={position}>
              <StyledPopconfirmTriangle position={position} />

              <StyledPopconfirmContent>
                {typeof content === 'string' ? <Text>{content}</Text> : content}
              </StyledPopconfirmContent>

              <StyledPopconfirmFooter>
                <CancelButton />
                <ConfirmButton />
              </StyledPopconfirmFooter>
            </StyledAnimatedPopconfirmContent>
          </StyledAnimatedPopconfirmContainer>
        ) : null
      )}
    </StyledPopconfirmContainer>
  );
};

Popconfirm.defaultProps = {
  position: 'top',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  changePositionOnResize: true,
  changePositionOnScroll: true
};
Popconfirm.displayName = `Popconfirm`;

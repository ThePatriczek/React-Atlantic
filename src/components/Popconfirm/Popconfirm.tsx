import React, { FC, useEffect, useRef, useState } from 'react';
import { useTransition } from 'react-spring/web.cjs';
import { Text } from '../../../lib/components/Typography/Text';
import { useEventListener } from '../../hooks/EventHandlers/useEventListener';
import { Position } from '../../types';
import { Button, PureButton } from '../Button';
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
    if ((changePositionOnScroll || changePositionOnResize) && isOpen) {
      if (
        position !== props.position &&
        typeof props.position !== 'undefined'
      ) {
        setPosition(props.position);
      }
    }
  }, [isOpen]);

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
  });

  const positionAnimationFromLeave: ReadonlyMap<
    Readonly<string>,
    Readonly<string>
  > = new Map([
    [`top`, `scale(0.7) translateX(-50%) translateY(50px)`],
    [`bottom`, `scale(0.7) translateX(-50%) translateY(-50px)`],
    [`right`, `scale(0.7) translateX(-50px) translateY(-50%)`],
    [`left`, `scale(0.7) translateX(50px) translateY(-50%)`]
  ]);

  const positionAnimationEnter: ReadonlyMap<
    Readonly<string>,
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

      const moveTop = (withOut = false) => {
        if (position !== 'top') {
          if (withOut) {
            if (outBottom) {
              setPosition('top');
            }
          } else {
            setPosition('top');
          }
        }
      };

      const moveBottom = (withOut = false) => {
        if (position !== 'bottom') {
          if (withOut) {
            if (outTop) {
              setPosition('bottom');
            }
          } else {
            setPosition('bottom');
          }
        }
      };

      const moveLeft = (withOut = false) => {
        if (position !== 'left') {
          if (withOut) {
            if (outRight) {
              setPosition('left');
            }
          } else {
            setPosition('left');
          }
        }
      };

      const moveRight = (withOut = false) => {
        if (position !== 'right') {
          if (withOut) {
            if (outLeft) {
              setPosition('right');
            }
          } else {
            setPosition('right');
          }
        }
      };

      if (!outOfAll) {
        console.log('----');
        console.log(outRight, 'outRight');
        console.log(outLeft, 'outLeft');
        console.log('position', position);

        if (
          (outRight && position === 'left') ||
          (outLeft && position === 'right')
        ) {
          moveTop();
        } else {
          moveLeft(true);
          moveRight(true);
          moveBottom(true);
          moveTop(true);
        }
      }
    }
  };

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
    config: { mass: 1, tension: 500, friction: 24, precision: 0.00001 },
    onRest: () => {
      if (isOpen) {
        inViewportCheck();
      }
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
      {transitions.map(({ item, props }) =>
        item ? (
          <StyledAnimatedPopconfirmContainer
            ref={insideContainerRef}
            style={props}
            position={position}
          >
            <StyledAnimatedPopconfirmContent position={position}>
              <StyledPopconfirmTriangle position={position} />

              <StyledPopconfirmContent key={content?.toString()}>
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

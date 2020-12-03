import React, { FC, useEffect, useRef, useState } from "react";
import { useTransition } from "react-spring/web.cjs";
import { useEventListener } from "../../hooks/EventHandlers/useEventListener";
import { Position } from "../../types";
import { Button } from "../Button";
import { Typography } from "../Typography";
import {
  Dimensions,
  StyledAnimatedPopconfirmContainer,
  StyledAnimatedPopconfirmContent,
  StyledPopconfirmChildren,
  StyledPopconfirmContainer,
  StyledPopconfirmContent,
  StyledPopconfirmFooter,
  StyledPopconfirmTriangle
} from "./style";
import {
  inViewportCheck,
  positionAnimationEnter,
  positionAnimationFromLeave,
  updateDimensions
} from "./utils";

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
  autoPosition?: Readonly<boolean>;
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
    changePositionOnScroll,
    autoPosition
  } = props;
  const { Text } = Typography;
  const [isOpen, setOpen] = useState<Readonly<boolean>>(false);
  const [position, setPosition] = useState<Readonly<Position>>(
    props.position || "top"
  );
  const [togglerDimensions, setTogglerDimensions] = useState<Dimensions>({
    x: 0,
    y: 0
  });
  const insideContainerRef = useRef<Readonly<HTMLDivElement>>(null);
  const buttonContainerRef = useRef<Readonly<HTMLSpanElement>>(null);

  useEffect(() => {
    if (typeof props.position !== "undefined" && props.position !== position) {
      setPosition(props.position);
      setOpen(false);
    }
  }, [props.position]);

  useEffect(() => {
    if (changePositionOnScroll || changePositionOnResize) {
      if (
        position !== props.position &&
        typeof props.position !== "undefined"
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
        if (changePositionOnResize) {
          if (isOpen && autoPosition) {
            inViewportCheck({
              position: [position, setPosition],
              insideContainerRef
            });
          }
        } else {
          setOpen(false);
        }
      },
      onScroll: () => {
        if (changePositionOnScroll) {
          if (isOpen && autoPosition) {
            inViewportCheck({
              position: [position, setPosition],
              insideContainerRef
            });
          }
        } else {
          setOpen(false);
        }
      }
    },
    [isOpen]
  );

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
    onStart: () =>
      updateDimensions({
        togglerDimensions: [togglerDimensions, setTogglerDimensions],
        position,
        buttonContainerRef,
        insideContainerRef
      }),
    onChange: () => {
      if (autoPosition) {
        inViewportCheck({
          position: [position, setPosition],
          insideContainerRef
        });
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
    <Button onClick={onConfirmClick} type={"primary"}>
      {confirmText}
    </Button>
  );

  const CancelButton = () => (
    <Button onClick={onCancelClick} type={"default"}>
      {cancelText}
    </Button>
  );

  return (
    <StyledPopconfirmContainer className={className}>
      <StyledPopconfirmChildren
        ref={buttonContainerRef}
        onClick={() =>
          executeDirectly ? onConfirmClick() : setOpen(prevState => !prevState)
        }
      >
        {children}
      </StyledPopconfirmChildren>
      {transitions((style, item) =>
        item ? (
          <StyledAnimatedPopconfirmContainer
            ref={insideContainerRef}
            style={style}
            position={position}
            dimensions={togglerDimensions}
          >
            <StyledAnimatedPopconfirmContent position={position}>
              <StyledPopconfirmTriangle position={position} />

              <StyledPopconfirmContent>
                {typeof content === "string" ? <Text>{content}</Text> : content}
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
  position: "top",
  confirmText: "Confirm",
  cancelText: "Cancel",
  changePositionOnResize: false,
  changePositionOnScroll: false,
  autoPosition: true
};
Popconfirm.displayName = `Popconfirm`;

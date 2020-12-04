import { Dispatch, RefObject, SetStateAction } from "react";
import { Position } from "../../../types";
import { Dimensions } from "../style";

export const positionAnimationFromLeave: ReadonlyMap<
  Readonly<Position>,
  Readonly<string>
> = new Map([
  [`top`, `translateX(-50%) translateY(50px)`],
  [`bottom`, `translateX(-50%) translateY(-50px)`],
  [`right`, `translateX(-50px) translateY(-50%)`],
  [`left`, `translateX(50px) translateY(-50%)`]
]);

export const positionAnimationEnter: ReadonlyMap<
  Readonly<Position>,
  Readonly<string>
> = new Map([
  [`top`, `translateX(-50%) translateY(0)`],
  [`bottom`, `translateX(-50%) translateY(0)`],
  [`right`, `translateX(0) translateY(-50%)`],
  [`left`, `translateX(0) translateY(-50%)`]
]);

interface UpdateDimensionsProps {
  position: Position;
  togglerDimensions: [Dimensions, Dispatch<SetStateAction<Dimensions>>];
  insideContainerRef: RefObject<Readonly<HTMLDivElement>>;
  buttonContainerRef: RefObject<Readonly<HTMLSpanElement>>;
}

export const updatePosition = ({
  position,
  togglerDimensions,
  insideContainerRef,
  buttonContainerRef
}: UpdateDimensionsProps) => {
  if (insideContainerRef?.current && buttonContainerRef?.current) {
    let topPosition;
    let leftPosition;

    if ([`top`, `bottom`].includes(position)) {
      leftPosition =
        buttonContainerRef?.current.getBoundingClientRect().x! +
        buttonContainerRef?.current.getBoundingClientRect().width! / 2;

      topPosition =
        buttonContainerRef?.current?.getBoundingClientRect().y! +
        (position === `top`
          ? -insideContainerRef?.current.getBoundingClientRect().height!
          : buttonContainerRef?.current.getBoundingClientRect().height!);
    } else if ([`left`, `right`].includes(position)) {
      leftPosition =
        buttonContainerRef?.current?.getBoundingClientRect().x! +
        (position === `left`
          ? -insideContainerRef?.current.getBoundingClientRect().width!
          : buttonContainerRef?.current.getBoundingClientRect().width!);

      topPosition =
        buttonContainerRef?.current.getBoundingClientRect().y! +
        buttonContainerRef?.current.getBoundingClientRect().height! / 2;
    }

    if (
      togglerDimensions[0].x !== Math.floor(leftPosition) ||
      togglerDimensions[0].y !== Math.floor(topPosition)
    ) {
      togglerDimensions[1]({
        x: Math.floor(leftPosition),
        y: Math.floor(topPosition)
      });
    }
  }
};
